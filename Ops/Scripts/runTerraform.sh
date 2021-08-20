cd ../Terraform
npm run build
terraform init -upgrade
terraform plan -lock=false
yes yes | terraform apply -lock=false