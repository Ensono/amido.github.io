############################################
# NAMING
############################################

variable "name_company" {
  type = string
}

variable "name_project" {
  type = string
}

variable "name_component" {
  type = string
}

variable "stage" {
  type = string
}

variable "attributes" {
  default = []
}

variable "tags" {
  type    = map(string)
  default = {}
}

############################################
# RESOURCE INFORMATION
############################################

variable "resource_group_location" {
  type = string
}

###########################
# SinglePageApplication
##########################

variable "index_doc" {
  type        = string
  description = "Represents the name of the index document. This is commonly \"index.html\"."
}

variable "error_doc" {
  type        = string
  description = "Represents the path to the error document that should be shown when an error 404 is issued, in other words, when a browser requests a page that does not exist."
}

variable "account_replication_type" {
  type = string
}

variable "account_kind" {
  type = string
}

variable "account_tier" {
  type = string
}

variable "account_min_tls_version" {
  type = string
}

########################
# CDN Response Headers #
########################
variable "response_header_cdn" {
  type        = list(map(string))
  description = "Custom Response Headers for Microsoft CDN. Can be used with security and auditing requirements"
}

variable "app_hostname" {
  type = string
}
