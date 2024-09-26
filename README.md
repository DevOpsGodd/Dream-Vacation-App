# DevOps Project - Dream-Vacation-App: Containerization, Kubernetes, and Cloud Migration

This project demonstrates a complete DevOps workflow, starting from containerizing a three-tier application, deploying it to a Kubernetes cluster on Minikube, and then migrating it to the cloud. The project also integrates CI/CD pipelines, infrastructure automation with Terraform, monitoring, and security enhancements.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Phase 1: Local Deployment and Containerization](#phase-1-local-deployment-and-containerization)
   - Building and Containerizing the Application
   - Minikube Setup
   - Local Kubernetes Deployment
   - GitHub Actions CI/CD
4. [Phase 2: Cloud Migration and Advanced DevOps Concepts](#phase-2-cloud-migration-and-advanced-devops-concepts)
   - Infrastructure as Code (IaC)
   - CI/CD with Multiple Environments
   - Cloud Kubernetes Cluster Setup
   - Monitoring and Observability
   - Security Enhancements
5. [How to Run Locally](#how-to-run-locally)
6. [Contact Information](#contact-information)

---

## Project Overview

In this project, I achieved the following:
- Containerized a three-tier application (frontend, backend, database) using Docker.
- Deployed the application locally on Minikube using Kubernetes.
- Automated the CI/CD pipelines with GitHub Actions, enabling deployment across multiple environments (dev, prod).
- Migrated the Kubernetes cluster to a cloud environment and used Terraform to provision cloud resources.
- Set up monitoring and observability with Prometheus, Grafana, and Loki, and enhanced security with image scanning.

---

## Technologies Used

- **Containerization:** Docker, Docker Compose
- **Kubernetes:** Minikube, AWS EKS
- **CI/CD:** GitHub Actions, Terraform
- **Monitoring:** Prometheus, Grafana, Loki
- **Security:** Image Scanning
- **Cloud Provider:** AWS

---

## Phase 1: Local Deployment and Containerization

### 1. Building and Containerizing the Application
- Built a three-tier application (frontend, backend, database).
- Wrote Dockerfiles for each service to containerize them.
- Ensured services connected using Docker Compose and ran locally.

### 2. Minikube Setup
- Installed and configured Minikube to simulate a Kubernetes environment locally.
- Created separate namespaces in Minikube to represent multiple environments: dev, prod.

### 3. Local Kubernetes Deployment
- Deployed the containerized services to the Minikube cluster.
- Defined Kubernetes manifests for deployments, services, ConfigMaps, and Secrets.

### 4. GitHub Actions CI/CD
- Automated the deployment process with GitHub Actions.
- Set up pipelines for building, testing, and deploying the application to different environments based on branch (dev, staging, prod).

---

## Phase 2: Cloud Migration and Advanced DevOps Concepts

### 1. Infrastructure as Code (IaC)
- Used Terraform to provision cloud resources, including VMs, databases, and Kubernetes clusters.
- Automated the creation and management of cloud infrastructure.

### 2. CI/CD with Multiple Environments
- Extended CI/CD pipelines to support cloud deployments across dev, staging, and production environments using GitHub Actions.

### 3. Cloud Kubernetes Cluster Setup
- Migrated the application to a managed Kubernetes service (e.g., AWS EKS, GCP GKE, or Azure AKS).
- Implemented Kubernetes best practices such as ConfigMaps, Secrets, and Horizontal Pod Autoscaling.
- Set up ingress controllers for routing traffic to the services.

### 4. Monitoring and Observability
- Deployed Prometheus and Grafana for real-time monitoring.
- Configured Loki for log collection and shipping from the application.
- Created Grafana dashboards to visualize key metrics, such as CPU, memory usage, and application performance.

### 5. Security Enhancements
- Implemented container image scanning in the CI pipeline to identify vulnerabilities.
- Set up HTTPS using Let’s Encrypt to secure connections to the application.

---

## How to Run Locally

1. **Clone the Repository:**
   ```bash
   git clone -b develop https://github.com/obusorezekiel/Dream-Vacation-App.git
   ```

2. **Build and Run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Access Minikube Dashboard:**
   ```bash
   minikube dashboard
   ```

4. **Deploy to Minikube:**
   Apply the Kubernetes manifests:
   ```bash
   kubectl apply -f kubernetes/manifests/
   ```

5. **Access the Application:**
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

---

## Contact Information

For any questions or support, feel free to contact me:

- **Name:** Obusor Ezekiel Umesi
- **Email:** ezekiel.umesi@gmail.com
- **LinkedIn:** [linkedin.com/in/ezekiel-umesi/](https://www.linkedin.com/in/ezekiel-umesi/)

---

### Future Enhancements
- Implement advanced security measures such as role-based access control (RBAC).
- Integrate Chaos Engineering to test system resilience.