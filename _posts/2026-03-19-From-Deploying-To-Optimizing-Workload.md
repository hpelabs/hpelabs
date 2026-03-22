---
layout: post
title: "From Deploying to Optimizing Workload Solutions with HPE Compute and Hybrid Cloud"
image: /assets/images/HOLs/Deploy-Optimize-Workload/banner.jpg
post_end_promo: <i><b>Continue your journey with more HPE Compute Technical Enablement Hands-on Labs for infrastructure, security, technologies, and solutions.</b></i>
excerpt: This hands-on lab offers participants practical, choice-driven learning experience for deploying and tuning modern workloads on HPE platforms by using Microsoft SQL Server as example.
room: 1 # Set to 1 or 2
---

Hands-On Lab information

## Overview

This hands-on lab offers participants practical, choice-driven learning
experience for deploying and tuning modern workloads on HPE platforms by
using Microsoft SQL Server as example.

Attendees can select modules based on their schedule and interests.

By completing one or more modules in this lab, participants will:

- Understand how to deploy and optimize SQL Server workloads on HPE
  ProLiant servers

- Apply BIOS, OS, SQL Server, and storage tuning techniques to improve
  OLTP performance

- Explore data protection using HPE StoreOnce and Catalyst for SQL
  Server

- Learn how SQL Server integrates with object storage and data lake
  architecture

- Get introduced to SQL Server 2025 Vector Search capabilities

- Experience software‑driven deployment and orchestration using HPE
  Morpheus blueprints

## Introduction

Microsoft SQL Server serves as the example database workload to
demonstrate deployment, configuration, performance optimization
strategies, and newly integrated AI features for designing and executing
applications in contemporary environments.

Your work environment includes a desktop computer (PC) with two monitors:
We recommend to use the landscape-oriented monitor for hands-on tasks, and the
portrait-oriented monitor for reviewing instructions and consulting with an AI assistant.

This setup allows you to reference step-by-step guides while performing
practical tasks, enhancing efficiency and accuracy during lab exercises, 
from the hands on lab guide platform available though a web browser navigating to HOL.SSHK2.COM

The PC will allow you to connect to the HPE remote lab through Omnissa horizon to your assigned HPE ProLiant
Servers and HPE Primera storage systems installed specifically to run
all modules of this hands on lab.

There are 10 HPE ProLiant servers with associated storage in the remote lab, which means we can have up to 10 teams run the lab simultaneously.

- Each team (or group of participants) is assigned a server and storage and can decide
  which modules to run.

The login sheet given by the instructors contains information related to
your team number and the credentials to establish the connection through
Omnissa horizon to an HPE lab in Houston where this infrastructure is hosted.

 [![]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image3.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image3.png){:class="img-900"}{: data-lightbox="gallery"}

The first set of modules (modules 1-4) is designed to run on HPE
ProLiant DL380 or DL380a Gen11 as bare metal servers with Microsoft
Windows Server 2025 and SQL Server 2025:

  - **Module 1: Achieve best OLTP performance**

    `Estimated time: 1 hour 30 minutes`

    Use SQL Server on bare metal HPE ProLiant Server and Primera storage and
    software to tune iLO/BIOS and SQL Server database including storage
    parameters to achieve best OLTP performance on the given configuration.

  - **Module 2: HPE StoreOnce Catalyst Plug-in for SQL Server**

    `Estimated time: 40 minutes`

    Protect (backup) Microsoft SQL Server to HPE StoreOnce with HPE Catalyst
    plugin for SQL Server

  - **Module 3: Microsoft SQL Server Data Lake with Alletra MP X10000 use cases**

    `Estimated time: 30 minutes`

    Setup SQL Server data lake with external table feature and S3 object storage like HPE Alletra MP X10000

  - **Module 4: Getting started with SQL Server 2025 Vector Search**

    `Estimated time: 20 minutes`   

    Introduction to SQL Server 2025 and its new Vector Search capabilities on HPE ProLiant Server

  - **Module 5: Deploy Microsoft SQL Server web stack with HPE Morpheus Blueprint**

    `Estimated time: 45 minutes`   

    This last module uses a completely different environment and focuses on HPE Morpheus blueprint. It introduces HPE Morpheus blueprints for orchestrating end‑to‑end SQL Server and application stack deployments.

# Getting started with this hands-on lab

## Connect to HOL guide platform

  From the classroom desktop computer, access the portal that allows you to select the manuals for the modules you are interested in. This will guide you through the hands-on lab with an AI assistant that you could query in case of needed.

- Go to **[https://hol.sshk2.com](https://hol.sshk2.com)**

- Enter your credentials according to the login sheet that was given by your instructors.

  [![]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image4a.jpg){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image4a.jpg){:class="img-900"}{: data-lightbox="gallery"}

- You will first see a welcome message. Click on the **OK** to open the first lab guide.  
This guide walks you through the introduction and explains how to connect to the remote infrastructure.   
Be sure to **start** with **0 Intro connection guide** to establish connectivity to the lab environment.  
  
The following screenshot depicts how the page looks like when a document is loaded.  

  [![]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image5b.jpg){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image5b.jpg){:class="img-900"}{: data-lightbox="gallery"}

- After you have connected to the lab infrastructure, you can select the module(s) of your choice (one at a time) as depicted below:

  [![]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image6.jpeg){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image6.jpeg){:class="img-900"}{: data-lightbox="gallery"}

- Clicking on the module opens a new page. The page is divided into two main parts:
  - On the left is the manual
  - On the right, the AI assistant

  On top, you can see some options that may ease your experience:

  [![]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image7.jpeg){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image7.jpeg){:class="img-900"}{: data-lightbox="gallery"}

For example, for each module:

  - ❷ **Sizing options** — Adjust the split between the manual and AI assistant panels to your preference.

  - ❸ **Lab credentials** — Click to reveal the credentials you may need during the lab. A popup will appear with your information; use the copy button (overlapping squares icon) next to each value to copy it.

    [![]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image8.jpg){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image8.jpg){:class="img-600"}{: data-lightbox="gallery"}

  - **Spanish** — Click to switch the manual language to Spanish.

  - ❹ **AI assistant** — Ask any question related to the module you are working on. You can even take a screenshot of your current screen and include it in your question.

<br>

  > 💡 **Tip**:   
  >
  >{: .small-space}
  > 
  > For a better experience, we recommend the following setup:
  >  - Use your secondary monitor (portrait orientation) to display the HOL guide.
  >  - Move the page you want to read or follow instructions on to this monitor.
  >  - Keep your primary monitor in landscape orientation for active tasks.

<br>

**Your primary display is usually the main monitor you use for work, while your secondary display refers to an additional monitor that can be set up vertically (portrait orientation).**
