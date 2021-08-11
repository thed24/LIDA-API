cd ../Terraform
terraform init -upgrade
terraform plan -lock=false
yes yes | terraform apply -lock=false