resource "azurerm_storage_account" "default" {
  name                      = substr(replace(module.default_label.id, "-", ""), 0, 24)
  resource_group_name       = azurerm_resource_group.default.name
  account_replication_type  = var.account_replication_type
  location                  = var.resource_group_location
  account_kind              = var.account_kind
  account_tier              = var.account_tier
  enable_https_traffic_only = true
  min_tls_version           = var.account_min_tls_version
  tags                      = module.default_label.tags

  static_website {
    index_document     = var.index_doc
    error_404_document = var.error_doc == "" ? var.index_doc : var.error_doc
  }

  lifecycle {
    ignore_changes = [
      tags,
    ]
  }
}
