# Express Boilerplate

- Simple Boilerplate of a Express Application made using Typescript
- With Seperate Error Handling Middleware
- and a Logger to check API Call Logs
- Added Payment Features of Razorpay
- Added File Upload Service using Multer and AWS S3 Bucket

# Usage

- Clone this project
- Install Packages using yarn, etc...

`yarn`

- Add .env file with `PORT`

- Initialize Git, so you can connect with your Repo using `git init`

- Start Using this Boilerplate

# Razorpay Feature

- Create your own .env file

- Put your `RAZORPAY_KEY & RAZORPAY_SECRET` in .env file

- Modify Payment Controller and Payment Service

- Done...

# File Uploading Feature

- There are some uploading routes, which help in different conditions

- We can upload a Sngle File.

- We can Upload Multiple files from Single Input.

- We can Upload Multiple files from Multiple Inputs.

- Error Handling Provided

- Customise as per your needs...

# AWS S3 File Upload Service

- Put your `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION` and `AWS_BUCKET_NAME` into .env file

- Customize the Controllers and Manage the Results when file is uploaded.

- Response for uploading via AWS S3 V2

  ```
  {
    "msg": "Upload Success",
    "status": true,
    "result": {
        "ETag": "\"4299dcccfb0fe6130abec9742ca22f51\"",
        "ServerSideEncryption": "AES256",
        "Location": "https://express-test-multer-bucket.s3.ap-south-1.amazonaws.com/uploads/a9c1f899-9a16-47ad-83bb-f219076f0ca1-wall.jpeg",
        "key": "uploads/a9c1f899-9a16-47ad-83bb-f219076f0ca1-wall.jpeg",
        "Key": "uploads/a9c1f899-9a16-47ad-83bb-f219076f0ca1-wall.jpeg",
        "Bucket": "express-test-multer-bucket"
    }
  }
  ```

- Response for uploading via AWS S3 V3

  ```
  {
    "msg": "Upload Success",
    "status": true,
    "result": {
        "$metadata": {
            "httpStatusCode": 200,
            "requestId": "QXPS8SRWTTAAHMBC",
            "extendedRequestId": "987tSfCYVZzrW/XMts8HJ6gsrMrI3UTMQue8nMY1VrpquDwRrn6Vhfcawx524gsNtfb5jLCQr7k=",
            "attempts": 1,
            "totalRetryDelay": 0
        },
        "ETag": "\"4299dcccfb0fe6130abec9742ca22f51\"",
        "ServerSideEncryption": "AES256"
    }
  }
  ```

- Note: In this template the AWS S3 V3 Response for client was customised as same to the AWS S3 V2

- You can customize as per your needs...

# Contribution

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive messages.
- Push your changes to your fork.
- Submit a pull request to the main branch of the original repository.
