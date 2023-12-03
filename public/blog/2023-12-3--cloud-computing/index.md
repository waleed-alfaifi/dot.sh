---
title: Cloud DevOps Engineer from Udacity - Review
excerpt: Sharing my experience, what I learned, and my thoughts about the Cloud DevOps Engineer Nanodegree from Udacity.
---

<!--
 Topics to cover:
    - backstory on why I chose this course
    - overall experience with the course
    - what I learned such as AWS basics, CI/CD, and more
 -->

**TL;DR:** I really enjoyed the course and I learned a lot. I would recommend it to anyone who wants to get into cloud computing and DevOps. There were some annoying things such as outdated projects and automated or useless replies in the support center, but overall it was a great experience.

---

I have been interested in cloud computing for a long time and I always wanted to dig into its world. My interest in the cloud and systems in general started when I took my internship in college where I worked with a cloud-based ERP and dealt with Docker and PostgreSQL along with a lot of Linux commands and configuration.

Since then I wanted to get more into the cloud, and it was this year when I decided to take the **Cloud DevOps Engineer Nanodegree from Udacity**. In this post, I will share my experience with the course, things I liked, things I didn't like, and what I learned.

## Overall Experience

I have to say that I really enjoyed [the course](https://www.udacity.com/course/cloud-dev-ops-nanodegree--nd9991). It was a great experience and I learned a lot. We first started with the **basics of cloud computing and AWS**. In this section, we learned about different types of cloud computing in which **SaaS** (software as a service) was one of them. It was a bit of a surprise to realize that SaaS is actually some sort of cloud computing 😄. We also learned about regions, availability zones, different services AWS provides, cloud concepts, and so on. At the end of this section, we had a project where we had to create a static website and host it on AWS S3. I will list the projects at the end of this post.

### Infrastructure as Code

After that we learned about **IAC (infrastructure as code)** using [cloudformation](https://aws.amazon.com/cloudformation/). This was the section where I learned the power of writing code to automate the provision of resources. This included how to diagram the infrastructure, how to write cloudformation templates, and how to deploy them. Honestly, this was a bit hard at first since cloudformation templates are written in yaml (or json) format which in my opinion is a config language and not a programming language, besides dev experience wasn't very good for yaml. However, I got used to it and then GitHub Copilot came to the rescue 😁. At the end, we had a project where we created a VPC with a load balancer and NAT gateways.

### CI/CD and Ansible

Now we come to the most interesting part of the course where you build a complete CI/CD pipeline to integrate code, provision resources, and publish to production. In this section we learned about **CI/CD using CircleCI, configuration management using Ansible, and monitoring using Prometheus** (which was introduced in the previous section). The final project was the most difficult yet interesting one. We created a CI/CD for both frontend and backend of a web app including build, test and scan steps. We also created a blue/green deployment strategy using Ansible and we monitored the app using Prometheus. It was really fun to see the result of your work in action. I do have a criticism about this project though. The project was made with Node.js 13 and it had a lot of outdated packages in addition to vague instructions, all which made it very difficult to get it to work. But I'm glad I did it and learned a lot about CI/CD and servers in general.

### Containers, Kubernetes, and Capstone

Finally, we learned about the next logical step which is serverless, containers, and the most important of all, **Kubernetes**! It was really fun to learn about Kubernetes and how it integrates with Docker. This was probably the reason I was excited to take this course in the first place 😅. For the final project, we containerized a machine learning microservice and deployed it to a Kubernetes cluster (using [minikube](https://minikube.sigs.k8s.io/docs/)).

As for the capstone project, it was more lenient than the previous projects. We had to choose a project of our own and apply what we learned. I was in a hurry to finish the course so I decided to choose a simple Node.js app and apply the learned skills. The link to the repo is at the end of this post.

## Final Thoughts

Hope this post can give you an inside look of the course. I would like to point out that this Nanoegree doesn't give much theoretical knowledge and leaves the reading to you. So basically they give you the tools and you have to learn how to use them. You will have to go through docs and articles to figure things out. I personally like this approach, but it can get frustrating sometimes. If you are project-oriented like me, you will probably like this course. Checkout the [course's details](https://www.udacity.com/course/cloud-dev-ops-nanodegree--nd9991), download the syllabus, and see if it's for you. A tip that I would like to end with is to always document your learning. I personally use markdown files hosted on a github repo but you can use whatever tool you are comfortable with. The important thing is to write what you are learning so that you can go back to it and review what you learned. I also think it helps you to understand the concepts better and remember them for longer.

---

Here is a list of the projects I did:

- Deploy Static Website on AWS ([source](https://github.com/waleed-alfaifi/udacity-static-hosting))
- Deploy a high-availability web app using CloudFormation ([source](https://github.com/waleed-alfaifi/udagram))
- Give Your Application Auto-Deploy Superpowers ([source](https://github.com/waleed-alfaifi/udapeople))
- Operationalize a Machine Learning Microservice API ([source](https://github.com/waleed-alfaifi/project-ml-microservice-kubernetes))
- Capstone Project ([source](https://github.com/waleed-alfaifi/udacity-capstone))
