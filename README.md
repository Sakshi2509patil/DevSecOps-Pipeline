![](src/assets/flow.png)

---

### Deploy Static Music Website on Cloud using Jenkins – DevSecOps Project

---

###### Deployment Steps

### Step 1: Connect to EC2 Instance (Ubuntu 22.04)

You can connect to your EC2 instance using one of the following methods:

**Option 1: EC2 Instance Connect (Browser-Based)**

AWS provides **EC2 Instance Connect**, which lets you connect directly from your browser without using SSH keys.

**Steps:**

1. Go to your EC2 instance in the **AWS Management Console**.  
2. Select your instance → Click **Connect** → Choose **EC2 Instance Connect**.  
3. Click **Connect**. A terminal opens in your browser.


### Step 2: Clone the Repository

Update the system packages and clone the project repository:

```bash
sudo apt-get update -y
git clone https://github.com/Sakshi2509patil/DevSecOps-Pipeline.git
cd DevSecOps-Pipeline
```


### Step 3: Install Docker and Run the Application in a Container

#### 3.1 Install Docker

Update packages, install Docker, add your user to the Docker group, and set permissions:

```bash
sudo apt-get install docker.io -y
sudo usermod -aG docker $USER
newgrp docker
sudo chmod 777 /var/run/docker.sock
```
---

### Phase 2: Security

### Install SonarQube and Trivy:

#### 4.1 Install SonarQube

Run SonarQube in Docker:

```bash
docker run -d --name sonar -p 9000:9000 sonarqube:lts-community
```

Access the UI:

```bash
http://<publicIP>:9000
# Default credentials: admin / admin
```

#### 4.2 Install Trivy (Vulnerability Scanner)

```bash
sudo apt-get install -y wget apt-transport-https gnupg lsb-release
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | sudo apt-key add -
echo "deb https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/trivy.list
sudo apt-get update
sudo apt-get install -y trivy
```

#### 4.3 Scan Images with Trivy

Scan a Docker image:

```bash
trivy image <image_id_or_name>
# example:
# trivy image melodyzone:latest
```
#### 2.Integrate SonarQube and Configure:

Integrate SonarQube with your CI/CD pipeline.
Configure SonarQube to analyze code for quality and security issues.








