# Resource Group
output "website_resource_group" {
  description = "Website Resource Group Name"
  value       = azurerm_resource_group.default.name
}

# Storage Account
output "storage_account_name" {
  description = "Storage Account name"
  value       = azurerm_storage_account.default.name
}

output "storage_account_key" {
  sensitive = true
  description = "Blob Storage Access Key"
  value       = azurerm_storage_account.default.primary_access_key
}

# CDN Endpoint
output "cdn_profile_name" {
  description = "The CDN Name"
  value       = azurerm_cdn_profile.default.name
}

output "cdn_endpoint_name" {
  description = "The CDN Endpoint Name"
  value       = azurerm_cdn_endpoint.default.name
}
