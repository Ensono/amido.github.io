resource "azurerm_cdn_profile" "default" {
  name                = module.default_label.id
  location            = "global"
  resource_group_name = azurerm_resource_group.default.name
  sku                 = "Standard_Microsoft"

  lifecycle {
    ignore_changes = [
      tags,
    ]
  }
}

resource "azurerm_cdn_endpoint" "default" {
  name                = module.default_label.id
  profile_name        = azurerm_cdn_profile.default.name
  location            = "global"
  resource_group_name = azurerm_resource_group.default.name

  origin {
    name      = module.default_label.id
    host_name = azurerm_storage_account.default.primary_web_host
  }

  origin_host_header = azurerm_storage_account.default.primary_web_host

  global_delivery_rule {
    dynamic "modify_response_header_action" {
      for_each = var.response_header_cdn
      iterator = response_header
      content {
        action = response_header.value["action"]                                              # (Required) Action to be executed on a header value. Valid values are Append, Delete and Overwrite.
        name   = response_header.value["name"]                                                # (Required) The header name.
        value  = response_header.value["value"] == "" ? null : response_header.value["value"] # (Optional) The value of the header. Only needed when action is set to Append or overwrite.
      }
    }
  }

  delivery_rule {
    name = "DefaultHTTPRedirect"
    # order = length(var.response_header_cdn) * 10
    order = 1
    request_scheme_condition {
      match_values     = toset(["HTTP"]) # (Required) Valid values are HTTP and HTTPS.
      operator         = "Equal"         # (Optional) Valid values are Equal.
      negate_condition = false           # (Optional) Defaults to false.
    }

    url_redirect_action {
      redirect_type = "Found"
      protocol      = "Https"
    }
  }

  lifecycle {
    ignore_changes = [
      tags,
    ]
  }
}

# Workaround for setting custom domain on the CDN
resource "null_resource" "custom_domain" {
  triggers = {
    # trigger_hostname = lookup(sort(azurerm_cdn_endpoint.default.origin)[0], "host_name")
    trigger_hostname = var.app_hostname
  }

  provisioner "local-exec" {
    command = <<EOF
    az cdn custom-domain create --endpoint-name ${azurerm_cdn_endpoint.default.name} --hostname ${var.app_hostname} \
      --name ${module.default_label.id} \
      --profile-name ${azurerm_cdn_profile.default.name} \
      --resource-group ${azurerm_resource_group.default.name} \
      --subscription ${data.azurerm_client_config.current.subscription_id}
    EOF
  }

  depends_on = [azurerm_storage_account.default]

  lifecycle {
    ignore_changes = [
      id,
    ]
  }
}

# Workaround for a current bug
# CLI version 2.31 - still exists
# https://github.com/Azure/azure-cli/issues/12152
# can be set to az cli once fixed
# end goal to remove and make this part of terraform once Go SDK from MS makes this possible
# az cdn custom-domain enable-https --endpoint-name ${azurerm_cdn_endpoint.default.name} \
#   --name ${var.app_hostname} \
#   --profile-name ${azurerm_cdn_profile.default.name} \
#   --resource-group ${azurerm_resource_group.default.name} \
#   --subscription ${var.subscription_id}
resource "null_resource" "custom_domain_ssl" {
  triggers = {
    # trigger_hostname = lookup(sort(azurerm_cdn_endpoint.default.origin)[0], "host_name")
    trigger_hostname = var.app_hostname
  }

  provisioner "local-exec" {
    command = <<EOF
    az rest --method post --uri /subscriptions/${data.azurerm_client_config.current.subscription_id}/resourceGroups/${azurerm_resource_group.default.name}/providers/Microsoft.Cdn/profiles/${azurerm_cdn_profile.default.name}/endpoints/${azurerm_cdn_endpoint.default.name}/customDomains/${module.default_label.id}/enableCustomHttps?api-version=2019-06-15-preview \
    --body "{\"certificateSource\":\"Cdn\",\"protocolType\":\"ServerNameIndication\",\"certificateSourceParameters\":{\"@odata.type\":\"#Microsoft.Azure.Cdn.Models.CdnCertificateSourceParameters\",\"certificateType\":\"Dedicated\"}}"
    EOF
  }

  depends_on = [null_resource.custom_domain]

  lifecycle {
    ignore_changes = [
      id,
    ]
  }
}
