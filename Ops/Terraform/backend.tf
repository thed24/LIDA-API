terraform {
  backend "gcs" {
    bucket = "lida-api-tfstate"
    prefix = "prod"
    credentials = "../key.json"
  }
}