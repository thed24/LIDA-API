Set-Location Ops\Terraform
Write-Output yes | terraform destroy -lock=false
Set-Location ..\..