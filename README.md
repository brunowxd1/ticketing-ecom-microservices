# Ticketing System Microservices Project

## Overview

This project implements a microservices architecture to create a scalable and maintainable ticketing system for e-commerce platforms. It leverages modern technologies such as Docker, Kubernetes, NATS event bus, and MongoDB to ensure high availability, fault tolerance, and seamless scalability.

## Features

- **User Authentication**: Secure signup/login functionality with JWT-based authentication.
- **Ticket Management**: Create, update, and delete tickets for events or services.
- **Order Processing**: Place and manage orders for tickets, including payment processing integration.
- **Event-Driven Communication**: Microservices communicate asynchronously via NATS event bus to ensure decoupling and reliability.
- **Scalability**: Kubernetes deployment for easy scaling and management of microservices.

## Getting Started

### Prerequisites

- Docker
- Kubernetes (minikube or a cloud provider's Kubernetes service)
- NATS Streaming Server
- MongoDB

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/brunowxd1/ticketing-ecom-microservices.git
   cd ticketing-ecom-microservices
   ```

2. **Start Kubernetes Cluster**
   If using minikube:

   ```bash
   minikube start
   ```

3. **Deploy NATS Streaming Server**

   ```bash
   kubectl apply -f infra/k8s/nats-depl.yaml
   ```

4. **Deploy MongoDB**

   ```bash
   kubectl apply -f infra/k8s/mongo-depl.yaml
   ```

5. **Deploy Microservices**

   ```bash
   kubectl apply -f infra/k8s/
   ```

## Running Locally

For local development, you can use Skaffold to automate the deployment of all services:

```bash
skaffold dev
```
