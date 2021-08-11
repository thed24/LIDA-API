locals {
  timestamp = formatdate("YYMMDDhhmmss", timestamp())
	index_file_path = abspath("../../")
}

data "archive_file" "source" {
  type        = "zip"
  source_dir  = "${local.index_file_path}"
  output_path = "/tmp/function-${local.timestamp}.zip"
  excludes = [ "node_modules" ]
}

resource "google_storage_bucket" "bucket" {
  name = var.project
}

resource "google_storage_bucket_object" "zip" {
  name   = "source.zip#${data.archive_file.source.output_md5}"
  bucket = google_storage_bucket.bucket.name
  source = data.archive_file.source.output_path
}

resource "google_project_service" "cf" {
  project = var.project
  service = "cloudfunctions.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy         = false
}

resource "google_project_service" "cb" {
  project = var.project
  service = "cloudbuild.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy         = false
}

resource "google_cloudfunctions_function" "function" {
  name    = var.function_name
  runtime = "nodejs14"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.bucket.name
  source_archive_object = google_storage_bucket_object.zip.name
  trigger_http          = true
  entry_point           = var.function_entry_point

  environment_variables = {
    MY_ENV_VAR = "todo: secrets"
  }
}