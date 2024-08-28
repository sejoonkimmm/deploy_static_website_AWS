# How to Deploy a Static Website on Amazon AWS
This guide will walk you through the process of deploying a static website using Amazon Web Services (AWS). We'll cover everything from purchasing a domain to setting up automated deployment using AWS CLI.


## Table of Contents
1. Prerequisites
2. Purchase Domain from Namecheap
3. Set Up AWS S3 Bucket
4. Configure AWS CloudFront
5. Set Up AWS Certificate Manager
6. Configure AWS Route 53
7.Generate AWS Access Keys
8. Set Up AWS CLI
9. Create Deployment Script

## Prerequisites

* An AWS account
* Basic knowledge of command-line interface
* Your static website files ready for deployment

## Purchase Domain from Namecheap

Go to Namecheap and search for your desired domain name.
Add the domain to your cart and complete the purchase process.

![스크린샷 2024-08-28 오후 12 14 26](https://github.com/user-attachments/assets/b267759c-20d0-4d89-a90c-03c1f528eca0)
![image](https://github.com/user-attachments/assets/e0852586-a6ee-415d-8b41-c6e63675c9c5)

## Set Up AWS S3 Bucket

1. Log in to your AWS Management Console.
2. Navigate to S3 and click "Create bucket".
3. Name your bucket (e.g., your-domain-com).
![image](https://github.com/user-attachments/assets/0704139c-464c-4220-8bfa-604d7f9956fc)

4. Configure bucket settings:
*  Uncheck "Block all public access"
* Enable versioning
* Leave other settings as default


5. Create the bucket.

6. Go to the bucket's "Permissions" tab and add the following bucket policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```
Replace your-bucket-name with your actual bucket name.

## Configure AWS CloudFront

1. Go to CloudFront in the AWS Console and click "Create Distribution".
2. Choose "Web" as the delivery method.
3. For "Origin Domain Name", select your S3 bucket.
![image](https://github.com/user-attachments/assets/fe918633-05a6-48a7-a9de-bf341175ce3c)

4. Set "Compress Objects Automatically" to "Yes".
5. Under "Default Cache Behavior Settings":
* Viewer Protocol Policy: Redirect HTTP to HTTPS
* Allowed HTTP Methods: GET, HEAD
* Cache Policy and Origin Request Policy: Use the defaults

  ![image](https://github.com/user-attachments/assets/9d6b2137-a982-438b-b414-cbe0e506528d)



6. Under "Distribution Settings":
* Price Class: Choose your preferred option
* Alternate Domain Names (CNAMEs): Enter your domain name
* SSL Certificate: We'll set this up in the next step


7. Create the distribution.

## Set Up AWS Certificate Manager

> Warning! AWS Certificate Manager must be created in the US-EAST-1 Region
> Warning! AWS Certificate Manager must be created in the US-EAST-1 Region
> Warning! AWS Certificate Manager must be created in the US-EAST-1 Region

1. Go to AWS Certificate Manager.
2. Click "Request a certificate".
3. Choose "Request a public certificate" and click "Next".
4. Enter your domain name and any subdomains (e.g., www.yourdomain.com).
![image](https://github.com/user-attachments/assets/dc2c9073-c8e9-4484-9909-b586e2f45e70)

5. Choose "DNS validation" and click "Request".
You'll see validation records. Keep this page open for the next step.

## Configure AWS Route 53

1. Go to Route 53 in the AWS Console.
2. Click "Create Hosted Zone".
3. Enter your domain name and create the zone.
4. You'll see NS (Name Server) records. Copy these.
  ![image](https://github.com/user-attachments/assets/c42df48b-3457-46eb-af42-1ba592af510e)

5. Go back to Namecheap, find your domain, and update the nameservers with the ones from Route 53.
  ![image](https://github.com/user-attachments/assets/87cb2e6f-6f82-4db1-a884-57b2a0e089ff)
  ![image](https://github.com/user-attachments/assets/38dd2db5-b99d-49d7-a583-d7d2a401e569)


6. In Route 53, create a new record set:
* Name: leave blank (or enter www if you want a www subdomain)
* Type: A - IPv4 address
* Alias: Yes
* Alias Target: Select your CloudFront distribution

7. Add the CNAME records for SSL certificate validation (from the Certificate Manager step).

## Generate AWS Access Keys

1. Go to IAM (Identity and Access Management) in the AWS Console.
2. Click on your user name.
3. Go to the "Security credentials" tab.
4. Under "Access keys", click "Create access key".
5. Download the key file and keep it secure.

## Set Up AWS CLI

1. Install AWS CLI following the official guide.
2. Open your terminal and run:
```bash
aws configure
```

3. Enter your AWS Access Key ID and Secret Access Key when prompted.
4. For default region, enter your preferred region.
5. For default output format, you can leave it blank or enter json.

## Create Deployment Script
Create a file named deploy.sh in your project root with the following content:
```bash
#!/bin/bash

# Variables
BUCKET_NAME="your-bucket-name"
DISTRIBUTION_ID="your-cloudfront-distribution-id"

# Remove existing files in the bucket
aws s3 rm s3://$BUCKET_NAME --recursive

# Upload new files to the bucket
aws s3 sync . s3://$BUCKET_NAME --exclude "*.sh" --exclude ".git/*" --exclude "README.md"

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
```

Replace your-bucket-name and your-cloudfront-distribution-id with your actual values.
To use this script:

1. Make it executable: chmod +x deploy.sh
2. Run it from your project directory: ./deploy.sh

This script will delete all existing files in your S3 bucket, upload your new files, and invalidate the CloudFront cache to ensure your changes are immediately visible.
