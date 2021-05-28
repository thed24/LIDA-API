locals {
  timestamp = formatdate("YYMMDDhhmmss", timestamp())
	index_file_path = abspath("../..")
}

data "archive_file" "source" {
  type        = "zip"
  source_dir  = "${local.index_file_path}"
  output_path = "/tmp/function-${local.timestamp}.zip"
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
  runtime = "nodejs12"

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.bucket.name
  source_archive_object = google_storage_bucket_object.zip.name
  trigger_http          = true
  entry_point           = var.function_entry_point
}

resource "google_cloudfunctions_function_iam_member" "invoker" {
  project        = google_cloudfunctions_function.function.project
  region         = google_cloudfunctions_function.function.region
  cloud_function = google_cloudfunctions_function.function.name

  role   = "roles/cloudfunctions.invoker"
  member = "allUsers"
}