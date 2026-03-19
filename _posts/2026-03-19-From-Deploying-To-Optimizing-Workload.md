---
layout: post
title: "From Deploying to Optimizing Workload Solutions with HPE Compute and Hybrid Cloud"
image: /assets/images/HOLs/Deploy-Optimize-Workload/banner.jpg
post_end_promo: <i><b>Continue your journey with more HPE Compute Technical Enablement Hands-on Labs for infrastructure, security, technologies, and solutions.</b></i>
excerpt: Learn to automate HPE server lifecycle management using the HPE Compute Ops Management PowerShell module—from workspace provisioning and device onboarding to policy enforcement, compliance monitoring, and sustainability insights within HPE GreenLake.
room: 1 # Set to 1 or 2
---

Hands-On Lab Guide


# Introduction

Use of this material to deliver training without prior written
permission from HPE is prohibited.


# From Deploying to Optimizing Workload Solutions with HPE Compute and Hybrid Cloud

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

# Introduction

Microsoft SQL Server serves as the example database workload to
demonstrate deployment, configuration, performance optimization
strategies, and newly integrated AI features for designing and executing
applications in contemporary environments.

Your work environment includes a desktop computer with two monitors: use
the landscape-oriented monitor for hands-on tasks, and the
portrait-oriented monitor for reviewing instructions and consulting with
an AI assistant.

This setup allows you to reference step-by-step guides while performing
practical tasks, enhancing efficiency and accuracy during lab exercises.

from the hands on lab guide platform available though a web browser
HOL.SSHK2.COM

The PC will allow you to connect via VPN to your assigned HPE ProLiant
Servers and HPE Primera storage systems installed specifically to run
all modules of this hands on lab.

- Each student group is assigned a server and storage and can decide
  which modules to run.

  The login sheet given by the instructors contains information related to
your team number and the credentials to establish the connection through
Omnissa horizon to an HPE lab in Houston where the hardware is located.

    [![]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image3.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/Deploy-Optimize-Workload/image3.png){:class="img-900"}{: data-lightbox="gallery"}

  The first set of modules (modules 1-4) is designed to run on HPE
ProLiant DL380 or DL380a Gen11 as bare metal servers with Microsoft
Windows Server 2025 and SQL Server 2025.

  - **Module 1**: Achieve best OLTP performance

    Estimated time: 1 hour 30 minutes

    Use SQL Server on bare metal HPE ProLiant Server and Primera storage and
    software to tune iLO/BIOS and SQL Server database including storage
    parameters to achieve best OLTP performance on the given configuration.

  - **Module 2**: HPE StoreOnce Catalyst Plug-in for SQL Server

    Estimated time: 40 minutes

    Protect (backup) Microsoft SQL Server to HPE StoreOnce with HPE Catalyst
    plugin for SQL Server

Module 3: Microsoft SQL Server Data Lake with Alletra MP X10000 use
cases

Estimated time: 30 minutes

Setup SQL Server data lake with external table feature and S3 object
storage like HPE Alletra MP X10000

Module 4: Getting started with SQL Server 2025 Vector Search

Estimated time: 20 minutes

Introduction to SQL Server 2025 and its new Vector Search capabilities
on HPE ProLiant Server

Module 5: Deploy Microsoft SQL Server web stack with HPE Morpheus
Blueprint

Estimated time: 45 minutes

This last module uses a completely different environment and focuses on
HPE Morpheus blueprint.

It introduces HPE Morpheus blueprints for orchestrating end‑to‑end SQL
Server and application stack deployments.

## Getting started with this hands-on lab

### Task1 – Connect to HOL guide platform

From the classroom desktop computer, access the portal that allows you
to select the manuals for the modules you are interested in. This will
guide you through the hands-on lab with an AI assistant that you could
query in case of needed.

1.  Open a web browser (chrome for example)

2.  Enter HOL.SSHK2.COM in the address bar

> <img src="./media/media/image4.jpg"
> style="width:6.91667in;height:4.07325in" />

3.  Enter your assigned Holuser# where is your team number (for
    example for Team 1 enter holuser1, password is identical)

> <img src="./media/media/image5.jpeg"
> style="width:7.02778in;height:3.50069in" />
>
> Once on this page, you can access any of the modules, however you must
> start with module 0 to connect to the lab infrastructure.
>
> After that, you can select the module of your choice based on interest
> and time, as depicted below:
>
> <img src="./media/media/image6.jpeg"
> style="width:7.00926in;height:3.39079in" />

4.  After selecting the module, the page is divided into two main parts,
    on the left is the manual and, on the right, the AI assistant. On
    top, you can see some options that may ease your experience.

> <img src="./media/media/image7.jpeg"
> style="width:6.78704in;height:3.60442in" />

For example, for each module,

- If you prefer a larger or smaller window for the manual/AI assistant,
  you can pick the size using the sizing options (labelled 2 on the
  image above)

- You have some information like credentials that may have to be
  entered. You can find them by clicking on the credentials button on
  top (number 3 from the image above).\
  A new page will appear on top with specific information as depicted in
  the next image, and to copy the information you just have to select
  the button with overlapping squares on the right, next to the
  information.

<img src="./media/media/image8.jpg"
style="width:5.83333in;height:2.99114in" />

- If you are more familiar with Spanish, you can click on Spanish to
  view the manual in Spanish.

- On the right side of the window is that AI assistant. You can enter
  any question related to the module you are using, and even take a
  screenshot of where you are and ask…

For a better experience, we recommend the following setup:

Use your secondary monitor (portrait orientation) to display the HOL
guide.

1.  Move the page you want to read or follow instructions on to this
    monitor.

2.  Keep your primary monitor in landscape orientation for active tasks.

**Note:** Your primary display is usually the main monitor you use for
work, while your secondary display refers to an additional monitor that
can be set up vertically (portrait orientation).
