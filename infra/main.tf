terraform {
  required_version = ">= 1.0.0"
  backend "gcs" {
    prefix = "tfstate/blog-training-app"
  }
}

## project ##
provider "google" {
  project = var.gcp_project_id
  region  = var.primary_region
}

locals {
  backend_app_name  = "blog-training-backend-app"
  frontend_app_name = "blog-training-frontend-app"
}

# Cloud Run のデプロイで利用するArtifact Registry のリポジトリ
module "artifact-registry" {
  source                     = "./modules/artifact-registry"
  gcp_project_id             = var.gcp_project_id
  artifact_registry_location = var.primary_region
  backend_app_name           = local.backend_app_name
  frontend_app_name          = local.frontend_app_name
}

# Cloud SQL
module "cloud-sql" {
  source                     = "./modules/cloud-sql"
  target_region              = var.primary_region
}

# Cloud Build
# マイグレーション＋バックエンドデプロイ
# フロントエンドデプロイ
module "cloud-build" {
 source                      = "./modules/cloud-build"
 gcp_project_id              = var.gcp_project_id
 region                      = var.primary_region
 cloudsql_instance_full_name = module.cloud-sql.blog_training_db_connection_name
 backend_app_name            = local.backend_app_name
 github_owner                = "KenyaMasuko"
 github_app_repo_name        = "second-step-graphql"
}
