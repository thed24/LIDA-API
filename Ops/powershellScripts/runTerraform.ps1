npm run build
Set-Location Ops\Terraform
terraform init -reconfigure
terraform plan -lock=false
Write-Output yes | terraform apply -lock=false
Set-Location ..\..