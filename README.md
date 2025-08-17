![](src/assets/flow.png)

---

### Deploy Static Music Website on Cloud using Jenkins – DevSecOps Project

---

###### Deployment Steps

### Step 1: Connect to EC2 Instance (Ubuntu)

You can connect to your EC2 instance using one of the following methods:

**Steps:**

1. Go to your EC2 instance in the **AWS Management Console**.  
2. Select your instance → Click **Connect** → Choose **EC2 Instance Connect**.  
3. Click **Connect**. A terminal opens in your browser.

---

### Step 2: Clone the Repository

Update the system packages and clone the project repository:

```bash
sudo apt-get update -y
git clone https://github.com/Sakshi2509patil/DevSecOps-Pipeline.git
cd DevSecOps-Pipeline

