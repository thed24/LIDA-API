cd ../Terraform
terraform init
terraform plan -lock=false
terraform apply -lock=false