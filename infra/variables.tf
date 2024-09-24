variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "cluster_name" {
  description = "Cluster Name"
  type        = string
  default     = "k8scluster"
}

variable "vpc_name" {
    description = "VPC Name"
    type = string
    default = "VPC_Ezekiel"
}