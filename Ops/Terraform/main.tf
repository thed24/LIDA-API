provider "google" {
  credentials = file("../key.json")
  project = var.project_id
  region  = var.region
}

module "Function" {
  source      = "./Modules/Function"
  project     = var.project_id
  name        = "rest-api"
  function_entry_point = "app"
  function_name = "rest-api"
}