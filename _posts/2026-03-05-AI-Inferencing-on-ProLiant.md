---
layout: post
title: "AI Inferencing Solutions on HPE ProLiant Compute"
image: /assets/images/HOLs/AI-Inferencing/banner.jpg
post_end_promo: <i><b>Continue your journey with more HPE Compute Technical Enablement Hands-on Labs for infrastructure, security, technologies, and solutions.</b></i>
excerpt: Gain hands on experience with three real world AI inferencing solutions powered by HPE ProLiant Compute. Explore Vision AI analytics using Vaidio, demonstrate text to image generation with SwarmUI, and deploy a RAG enabled AI assistant using Open WebUI.
room: 2 # Set to 1 or 2
---


Three real world AI inferencing solutions powered by HPE ProLiant Compute.

## Accessing the Lab Environment

 Connect to your designated Ubuntu VM using Omnissa Horizon:

1. Click the Lab Access dropdown located at the top right of this page then shift + click the link for External (Outside of HPE) or Internal (Inside HPE) to open the Horizon login page in a new window.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img00.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img00.png){:class="img-300"}{: data-lightbox="gallery"}    

2. In the new window, click on Omnissa Horizon Web Client.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img01.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img01.png){:class="img-300"}{: data-lightbox="gallery"}

3. Login with the credentials provided to you.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img02.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img02.png){:class="img-300"}{: data-lightbox="gallery"}
    
    > ⚠️ **Important note**   
    >
    >{: .small-space}
    > 
    > Your credentials can be found on the PowerPoint slide or sheet of paper issued to you by your lab supervisor. Please return the sheet to your supervisor when you have completed this lab.

4. Click on the RDP icon to launch a remote desktop to your virtual machine.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img03.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img03.png){:class="img-600"}{: data-lightbox="gallery"}

5. Click on Cancel to keep the VM in windowed mode.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img04.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img04.png){:class="img-400"}{: data-lightbox="gallery"}

&nbsp;

This concludes Accessing the Lab Enviornment. Please proceed to Section 1.

&nbsp;

[↑ Back to Top](#)
## Section 1: Vision AI with HPE ProLiant Compute – Facility safety and security

Computer vision analyzes video footage from security cameras to detect and track objects, people, and behaviors for enhanced operations, security, and smart space experiences. It can be used for the following use cases:

- Reduced theft and inventory loss

- Improved customer safety and satisfaction

- Enhanced store operations and efficiency

- Optimized inventory management

- Better insights for data-driven decision-making

In this lab we will be using Vaidio’s Vision AI Platform to experience Computer Vision in a live environment. Vaidio is a certified HPE Gold Partner ISV.

1. From the Desktop in Linux, click on the Chromium Browser icon link on the left-hand side your jump server desktop.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img05.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img05.png){:class="img-400"}{: data-lightbox="gallery"}

2. From the Chromium browser in your connected jump server, navigate to the following web address and accept any browser warnings to proceed.
    
    ```text
    https://10.28.62.12
    ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img08.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img08.png){:class="img-500"}{: data-lightbox="gallery"}

3. Login to the Vaidio computer vision application, with the following user credentials and then click on the Login button to continue.

   Username:
   ```text
   HPEDemoUser
   ```
   Password:
   ```text
   Will2Win
   ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img09.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img09.png){:class="img-300"}{: data-lightbox="gallery"}

4. You are presented with the main navigation interface for Vaidio, and you land on the Search page. The Vaidio navigation icons run vertically on the left side of the page. You click on the individual icons to move to the next interface screen. Locate and click on the Camera icon to go to the manage cameras section. (You may notice a red exclamation mark next to the camera icon, this is NOT a broken camera, it is a visible representation of an anomaly being recognized by the computer vision software. It is a normal notification.)

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img10.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img10.png){:class="img-600"}{: data-lightbox="gallery"}

5. This Camera screen lists the currently attached cameras. If you had administrative capability for your logged in user, you would be able to add cameras on this screen. The Vaidio environment uses standard industry protocols like RTSP, to connect to standard IP Cameras and Network Video Recorders (NVRs). Now click on the Eye icon to switch to a live view.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img11.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img11.png){:class="img-600"}{: data-lightbox="gallery"}

6. Drag the link, HPE – Front of Building, into the live view workspace (this is how you would add 2-3 cameras to your focused view) or you can double click the camera name to launch a full screen view of a single camera:

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img12.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img12.png){:class="img-600"}{: data-lightbox="gallery"}

7. Click on Organize Layout to maximize the image. This is a live view from our HPE HQ Office in Houston, TX. Hopefully it is daytime there (more traffic) so that you can see objects being recognized in real time.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img13.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img13.png){:class="img-600"}{: data-lightbox="gallery"}

8. You can immediately see the power of AI in action. The system is putting bounding boxes around all the objects it has been trained to recognize. Once the system recognizes objects, it can start counting them, trigger alerts on those objects, and a host of other capabilities. Now click on the Intrusion icon in the left navigation.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img14.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img14.png){:class="img-600"}{: data-lightbox="gallery"}

9. In the Select Camera pull down option, select CIC - Car. This is a replica of our sponsored F1 Car. We have setup Vaidio to capture images when someone touches the car.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img15.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img15.png){:class="img-600"}{: data-lightbox="gallery"}

10. Now click on the History link. Select a starting date that is less 30 days old and then click on Search.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img16.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img16.png){:class="img-600"}{: data-lightbox="gallery"}

11. Scroll down in the identified matches and locate a person touching the car. You can enlarge the image by clicking on it. Once you are done browsing, click the Object Counting icon in the left navigation.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img17.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img17.png){:class="img-600"}{: data-lightbox="gallery"}

12. From the presented workspace, select the camera HPE – Front of Building from the dropdown box.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img18.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img18.png){:class="img-600"}{: data-lightbox="gallery"}

13. Now you once again see AI in action. The system is counting what it recognizes.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img19.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img19.png){:class="img-600"}{: data-lightbox="gallery"}

14. Now select the Vaidio Search function page. From this area, you can search for recognizable objects.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img20.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img20.png){:class="img-400"}{: data-lightbox="gallery"}

15. In the Search page, use the calendar on the upper left to choose the beginning time you want to search from. Pick a date less than 30 days prior to today’s date. Then click the Camera icon to select the camera.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img21.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img21.png){:class="img-600"}{: data-lightbox="gallery"}

16. In the Camera List window, uncheck the box next to Select All, scroll down the list and check the box next to HPE – Front of Building, then click on OK.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img22.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img22.png){:class="img-600"}{: data-lightbox="gallery"}

17. Now use the filter icons. Click on the Vehicle icon then select the > link, to the right of the word Bicycle, then click Add. This will further refine the search. You can also just click on the name of a target item to select all.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img23.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img23.png){:class="img-600"}{: data-lightbox="gallery"}

18. Press the Search button to start inferencing on the 30 days of video captured.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img24.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img24.png){:class="img-600"}{: data-lightbox="gallery"}

19. Once results are displayed, you can start selecting the frames that were identified with a positive result.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img25.jpg){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img25.jpg){:class="img-600"}{: data-lightbox="gallery"}

    > 💡 **Tip**   
    >
    >{: .small-space}
    > 
    > If you don’t get any results, try different filter combinations. For metadata results of analyzed video streams/video files, the user can enter a flexible retention time. After this retention time, the data is automatically deleted. The default value sets the system to hold 90 days of data before it starts overwriting the old information.


20. Return to your browser session, you should be able to find some positive results. Feel free to search for other objects. Try to see how many “yellow” buses have driven through that intersection in the timeframe you have set the search for?

&nbsp;

This concludes Section 1. Please proceed to the next section.

&nbsp;

[↑ Back to Top](#)
## Section 2: Text to Image Generation with HPE ProLiant Compute

For generative AI workloads such as product design, 3D animation, and image or video generation, the HPE ProLiant DL380a Gen12 server delivers the rendering and design performance required by demanding visual applications across the media and entertainment, healthcare and manufacturing industries.

Generative AI generates lifelike and dynamic pictures, 3D animations (including character movements,) physics simulations, and environmental effects. You use it to curate new visual content, such as images or videos, that mimic real-world data.

As an example of Generative AI Inferencing, we will install and use SwarmUI in our environment. The steps to install the environment are basically the following:

- We have already installed and setup SwarmUI for this experience.

- Launch and use SwarmUI to generate images from text prompts.

In this lab we will use SwarmUI to experience Generative AI in a live environment.

### Task 1: Some pre-work to prepare our workstation

Before we start using our environment, some preliminary work needs to be done to make our installation process work correctly.

Each of these environments needs additional services and applications installed, to get this to all work together. Both environments also have configuration files that need to be edited to customize the environment, so things work correctly.

We are going to do that pre-work first as it will allow the labs to flow more smoothly.


> 💡 **Tip**   
>
>{: .small-space}
> 
> In this lab, you will need to copy and paste multiple commands into the terminal. Use `cntrl+shift+v` to paste into the terminal.


1. From the Linux desktop, click on the Terminal icon.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img26.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img26.png){:class="img-600"}{: data-lightbox="gallery"}

2. Copy and paste the following command into the terminal to initialize the Docker and NVIDIA Container toolkit installation. Lab support files will also be copied to the desktop.

   ```bash
   sudo /etc/init.d/docker_install.sh
   ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img27.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img27.png){:class="img-600"}{: data-lightbox="gallery"}

3. When prompted for a password, type your lab password and then press Enter.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img28.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img28.png){:class="img-600"}{: data-lightbox="gallery"}

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img29.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img29.png){:class="img-600"}{: data-lightbox="gallery"}

4. After a few minutes, the lab support files will appear on the desktop. These will be used in a later section of the hands-on-lab experience.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img30.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img30.png){:class="img-100"}{: data-lightbox="gallery"}

5. In terminal, copy and paste the following command and press Enter.

   ```bash
   cd SwarmUI
   ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img31.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img31.png){:class="img-600"}{: data-lightbox="gallery"}

6. Then run the following command and press Enter to launch SwarmUI.

   ```bash
   bash launch-linux.sh
   ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img32.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img32.png){:class="img-600"}{: data-lightbox="gallery"}

7. The application will launch in a web browser once it has finished loading.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img33.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img33.png){:class="img-900"}{: data-lightbox="gallery"}

&nbsp;

This concludes Task 1. Please proceed to the next task.

&nbsp;

[↑ Back to Top](#)
### Task 2: Using SwarmUI for text-to-image generation (with GPU)

We have preinstalled and setup SwarmUI for this experience.

What we want to demonstrate in this hands-on experience, is the difference in performance you experience when you use a Generative AI application like SwarmUI.

Your environment has been set up in such a way that your VM has been configured with a portion of the NVIDIA GPU installed in the ESXi host where your VM is running. You don’t have the entire GPU dedicated to your instance; you are sharing it with other students.

1. Click the Generate tab at the top of the page. Then navigate to the Models tab in the middle of the page and click the Refresh button.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img34.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img34.png){:class="img-600"}{: data-lightbox="gallery"}

2. The flux-mini model we downloaded for you should be visible. Double-click the model card to load the model.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img35.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img35.png){:class="img-600"}{: data-lightbox="gallery"}

3. Under Core Parameters we need to change Steps to 50 and CFG Scale to 1.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img36.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img36.png){:class="img-400"}{: data-lightbox="gallery"}

4. In the prompt section, copy and paste one of the following prompts and then press the Generate button to start the image generation process.

   ```text
   A realistic landscape painting of a cabin in the mountains, wet on wet oil painting, landscape, mountain lake, by Bob Ross.
   ```

   OR


   ```text
   Profile of sad Socrates, full body, high detail, dramatic scene, Epic dynamic action, wide angle, cinematic, hyper-realistic, concept art, warm muted tones as painted by Bernie Wrightson, Frank Frazetta.
   ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img37.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img37.png){:class="img-600"}{: data-lightbox="gallery"}

5. During the first generation, the model will begin to load into VRAM. Once complete, the image generation will begin.

6. The image generation can be monitored on the right side of the screen. Subsequent image generations will be faster since we have already preloaded the model into memory.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img38.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img38.png){:class="img-600"}{: data-lightbox="gallery"}

7. When the image generation completes, click on the image to open it in full resolution. Click on the image again to return.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img39.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img39.png){:class="img-600"}{: data-lightbox="gallery"}

8. Feel free to experiment with different settings and be creative with your image descriptions to generate unique results.

9. To see the impact on GPU utilization while Stable Diffusion generates images, open a new Terminal session. Right-click on the Terminal and select New Window. Enter the following command to monitor GPU activity:

   ```bash
   nvtop
   ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img40.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img40.png){:class="img-600"}{: data-lightbox="gallery"}

10. To increase the workload and generate multiple images, under Core Parameters set the Images option to 2. This will instruct the utility to create 2 images sequentially.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img41.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img41.png){:class="img-300"}{: data-lightbox="gallery"}

11. Before pressing the Generate button again, arrange your windows so you can see both SwarmUI and the GPU utilization data in the Terminal simultaneously. This setup will help you observe the GPU's performance in real-time as images are being generated.

12. Press the Generate button again to execute the generation process with your new settings.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img42.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img42.png){:class="img-900"}{: data-lightbox="gallery"}

13. SwarmUI places significant demands on the GPU, leveraging its parallel processing capabilities to perform the complex calculations required for image generation. Monitoring GPU performance is crucial for understanding how efficiently the model runs and for identifying potential bottlenecks. By keeping an eye on GPU utilization, memory usage, temperature, and power consumption, you can ensure that your system is running optimally and take steps to manage and mitigate any issues that arise.

&nbsp;

This concludes Task 2. Please proceed to the next task.

&nbsp;

[↑ Back to Top](#)
### Task 3: (*Optional*) Using SwarmUI for text-to-image generation (without GPU)

 We can really showcase the benefit of adding a GPU to help accelerate your AI Workload by rerunning the above steps but only leveraging this Systems CPU resources. No GPU!

1. Go back to the Server tab and then click on the Backends tab.

2. Click the Pencil icon and edit the ExtraArgs field to only have the following:

   ```bash
   --cpu
   ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img43.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img43.png){:class="img-400"}{: data-lightbox="gallery"}

3. Click Save and wait for the backend to restart.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img44.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img44.png){:class="img-600"}{: data-lightbox="gallery"}

4. Now, go back to the Generate tab. Have a try at re-running some of your previous prompts to see how much longer they take to Generate an image. How long did it take? Yep, you guessed it! Over 45mins for a single image on CPU only.
Feel free to click the Red X next to the generate button when you get tired of waiting as this is the last step in the section.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img45.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img45.png){:class="img-600"}{: data-lightbox="gallery"}

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img46.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img46.png){:class="img-200"}{: data-lightbox="gallery"}

&nbsp;

This concludes Section 2. Please proceed to the next section.

&nbsp;

[↑ Back to Top](#)
## Section 3: Create your own RAG enabled AI Assistant

Natural Language Processing AI with Retrieval-Augmented Generation (RAG) – Modifying responses with your own information.

Develop and deploy end-to-end AI to power natural language processing for:

- Agentic AI

- Text-to-Speech Generation

- Retrieval-Augmented Generation

To drive enterprise implementations of natural language processing such as speech AI, HPE designed the ultra-scalable HPE ProLiant DL380a Gen12 server. Together with NVIDIA H200 NVL GPUs and the full suite of NVIDIA AI Enterprise tools, this is a great AI platform for running large language models used by the financial services and manufacturing sectors as well as customer service across a range of industries.

Retrieval-Augmented Generation (RAG) is the process of optimizing the output of a large language model, so it references an authoritative knowledge base outside of its training data sources before generating a response.

Large Language Models (LLMs) are trained on vast volumes of data and use billions of parameters to generate original output for tasks like answering questions, translating languages, and completing sentences. They are however a snapshot in time.

RAG extends LLMs to specific domains or an organization's internal knowledge base, all without the need to retrain the model. It is a cost-effective approach to improving LLM output, so it remains relevant, accurate, and useful in various contexts.

In this lab, we will install and use Open WebUI. Open WebUI is an extensible, feature-rich, and user-friendly self-hosted AI platform designed to operate entirely offline. It supports various LLM runners like Ollama, vLLM and OpenAI-compatible APIs, with built-in inference engine for RAG, making it a powerful AI deployment solution.

### Task 1: Installing Open WebUI

Our first set of tasks is to download and install Open WebUI bundled with Ollama for Docker. This installation method uses a single container image that bundles Open WebUI with Ollama, allowing for a streamlined setup via a single command. To get started, follow the steps below.

1. From a new Terminal session, copy and paste the following docker run command to start the Open WebUI installation script.

   ```bash
   docker run -d -p 3000:8080 --gpus=all -v ollama:/root/.ollama -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:ollama
   ```
   This docker run command sets up a highly available, GPU-accelerated container for the open-webui application, configured to use the host's network and persist data via a mounted volume.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img47.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img47.png){:class="img-600"}{: data-lightbox="gallery"}

2. If asked, type your lab password and press Enter.

3. After a few minutes, the installation will complete. There are two additional steps to enable the environment for use. Return to your Lab station’s Ubuntu desktop to complete the first time setup.

4. In the Chromium browser, navigate to the following URL: http://127.0.0.1:3000/

5. Click on the Get Started button at the bottom of the page.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img48.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img48.png){:class="img-600"}{: data-lightbox="gallery"}

6. On first startup, you are required to create an Admin account. Use the info below to create the Admin account.

   Name:
   ```text
   Admin
   ```
   Email:
   ```text   
   admin@hpe.com
   ```
   Password:
   ```text
   hpe123
   ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img49.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img49.png){:class="img-400"}{: data-lightbox="gallery"}

7. At the “What’s New in Open WebUI” information screen. Click on the Okay, Let’s Go! button.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img50.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img50.png){:class="img-600"}{: data-lightbox="gallery"}

8. Click on the User icon on the top right hand side of the window then select Settings.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img51.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img51.png){:class="img-600"}{: data-lightbox="gallery"}

9. Click on Admin Settings in the lower left corner.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img52.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img52.png){:class="img-600"}{: data-lightbox="gallery"}

10. Now click on the Models link in the Admin Panel and then click the Manage Models icon.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img53.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img53.png){:class="img-600"}{: data-lightbox="gallery"}

11. In the Pull a model from Ollama.com field, type the following model name and then click on the Download icon.

    ```text
    gemma3:4b
    ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img54.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img54.png){:class="img-600"}{: data-lightbox="gallery"}

    > ℹ️ **More Info**
    >
    >{: .small-space}
    >
    > Ollama models like gemma3:4b are advanced AI large language models designed to understand and generate human-like text. They are typically based on state-of-the-art architectures such as transformers and are trained on vast amounts of diverse text data. These models can perform various natural language processing tasks including text generation, summarization, translation, question answering, and more. They are often deployed via APIs, allowing easy integration into different applications and services. Ollama models aim to provide scalable, customizable, and high-performance solutions for a wide range of industries and use cases.
    The "4B" in "gemma3:4b" denotes that the model has 4 billion parameters. Parameters are the components of a model that are learned from the training data, and having more parameters typically means the model has greater capacity to learn and represent complex patterns in the data.


12. Monitor the status of the download.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img55.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img55.png){:class="img-600"}{: data-lightbox="gallery"}

13. A green notification should appear letting you know the model was successfully downloaded. You can close the Manage Models window.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img56.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img56.png){:class="img-600"}{: data-lightbox="gallery"}

&nbsp;

This concludes Task 1. Please proceed to the next task.

&nbsp;

[↑ Back to Top](#)
### Task 2: Using Open WebUI

1. Now that you have downloaded a model, click on the New Chat icon in the left navigation.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img57.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img57.png){:class="img-600"}{: data-lightbox="gallery"}

2. In the text box that says, “How can I help you today?”, copy and paste the following question and press Enter.

   ```text
   What is the weight of the HPE DL380a Gen12?
   ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img58.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img58.png){:class="img-600"}{: data-lightbox="gallery"}

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img59.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img59.png){:class="img-600"}{: data-lightbox="gallery"}

3. The response may vary but will almost always be incorrect. In the next section of the lab, we will work to increase the LLM’s accuracy when asked questions about the HPE DL380a Gen12 using RAG.

&nbsp;

This concludes Task 2. Please proceed to the next task.

&nbsp;

[↑ Back to Top](#)
### Task 3: Retrieval-Augmented Generation (RAG) Modifying responses with your own information

Retrieval-Augmented Generation (RAG) is the process of optimizing the output of a large language model, so it references an authoritative knowledge base outside of its training data sources before generating a response.

Large Language Models (LLMs) are trained on vast volumes of data and use billions of parameters to generate original output for tasks like answering questions, translating languages, and completing sentences. They are however a snapshot in time.

RAG extends LLMs to specific domains or an organization's internal knowledge base, all without the need to retrain the model. It is a cost-effective approach to improving LLM output, so it remains relevant, accurate, and useful in various contexts.

Open WebUI allows you to upload your own documents into a knowledge base that the LLM can then access. This is useful for summarizations, data visualization, and RAG. That knowledge base can then be accessed by all the users or restricted to a certain group of users.

In the following steps of this lab, you will deploy an AI Assistant with RAG capabilities.

1. First we need to set the way Open WebUI will chuck the data we give it. With RAG, chunking is the process of splitting large documents into smaller, meaningful segments (chunks) so they can be efficiently indexed, retrieved, and used as context for a LLM. Click on the User Icon in the lower left corner of the browser. Then click on Admin Panel.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img60.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img60.png){:class="img-600"}{: data-lightbox="gallery"}

2. Click on the Settings link and then click on Documents.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img61.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img61.png){:class="img-600"}{: data-lightbox="gallery"}

3. Change the Chunk Size to 256. Then click on Save.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img62.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img62.png){:class="img-600"}{: data-lightbox="gallery"}

4. Click on the Workspace icon in the left navigation, then click on Knowledge.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img63.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img63.png){:class="img-600"}{: data-lightbox="gallery"}

5. Click on the + New Knowledge button.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img64.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img64.png){:class="img-600"}{: data-lightbox="gallery"}

6. Copy and paste the text below into the two text boxes, then change the Visibility from Private to Public and click Create Knowledge.

   ```text
   HPE ProLiant Compute Gen12 Servers
   ```

   ```text
   Configuration details and specifications for HPE ProLiant Compute Gen12 Servers
   ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img65.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img65.png){:class="img-400"}{: data-lightbox="gallery"}

7. Now, click the Add Content icon and the click Upload files.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img66.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img66.png){:class="img-600"}{: data-lightbox="gallery"}

8. In the Open Files window, navigate to the Desktop and select both HPE ProLiant Compute DL380a Gen12 QuickSpecs files (.md and .pdf) and click Open.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img67.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img67.png){:class="img-600"}{: data-lightbox="gallery"}

9. Open WebUI will begin to chunk the data in the files. This process should take less than a minute and can process in the background. Please continue to the next step.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img68.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img68.png){:class="img-400"}{: data-lightbox="gallery"}

10. Now we can begin to create our RAG enabled AI Assistant. Click on the Models link and then click + New Model.
    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img69.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img69.png){:class="img-600"}{: data-lightbox="gallery"}

11. Use the information below for the Model Name, Base Model (From), and Description fields.

    Model Name:
    ```text
    ChatHPE
    ```
    Base Model (From):
    ```text
    gemma3:4b
    ```
    Description:
    ```text
    A helpful technical support assistant with knowledge on HPE ProLiant Compute.
    ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img70.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img70.png){:class="img-600"}{: data-lightbox="gallery"}

12. Open the System Prompt.txt file located on the Desktop.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img71.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img71.png){:class="img-300"}{: data-lightbox="gallery"}

13. Copy and paste the contents of the file into the System Prompt field.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img72.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img72.png){:class="img-900"}{: data-lightbox="gallery"}

14. Open WebUI allows you to add entire collections or selected files from a collection to the AI assistant’s knowledge base. Click on Select Knowledge and the click on both QuickSpecs files to add them into the knowledge base.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img73.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img73.png){:class="img-500"}{: data-lightbox="gallery"}
15. Under the Capabilities section, uncheck the box next to Web Search and Image Generation and then click on Save & Create.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img74.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img74.png){:class="img-600"}{: data-lightbox="gallery"}

16. The AI assistant we created should now be listed under Models. Click on ChatHPE to begin using the assistant.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img75.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img75.png){:class="img-600"}{: data-lightbox="gallery"}

17. On the ChatHPE assistant page, copy and paste the following prompt into the chat box and press Enter.

    ```text
    What is the weight of the HPE DL380a Gen12?
    ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img76.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img76.png){:class="img-600"}{: data-lightbox="gallery"}

18. ChatHPE will respond with the answer along with citations from the source. Click on one of the citations to view the information.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img77.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img77.png){:class="img-600"}{: data-lightbox="gallery"}

19. By viewing the citation, we can quickly verify the answer from the source.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img78.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img78.png){:class="img-600"}{: data-lightbox="gallery"}

20. Try asking ChatHPE the 2 prompts below and verify the answers using the citations it provides.

    ```text
    What does the “a” stand for in DL380a?`
    ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img79.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img79.png){:class="img-600"}{: data-lightbox="gallery"}

    ```text
    What is HPE Compute Ops Management?
    ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img80.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img80.png){:class="img-400"}{: data-lightbox="gallery"}

21. The basic framework for a RAG enabled AI assistant is now set. You can always continue expanding its knowledge base by adding more documents. Next, we will configure a new user and restrict access to the AI assistant. Click the User icon in the lower left corner and then click on Admin Panel.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img81.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img81.png){:class="img-400"}{: data-lightbox="gallery"}

22. To create a new user, click on the + symbol in the top right corner.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img82.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img82.png){:class="img-600"}{: data-lightbox="gallery"}

23. In the Add User form, use the info below to fill in the fields for Name, Email, and Password.

    Name:
    ```text
    Team Member 1
    ```
    Email:
    ```text
    tm1@gmail.com
    ```
    Password:
    ```text
    hpent123
    ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img83.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img83.png){:class="img-400"}{: data-lightbox="gallery"}

24. Next, we will create a user group to set unique permissions for the users. Click on the Groups link, then click on Create Group.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img84.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img84.png){:class="img-600"}{: data-lightbox="gallery"}

25. In the Add User Group form, you can adjust the default permissions for the group. We will set the permissions to ChatHPE in a later step. Copy and paste info below for the Name field and then click Save.

    ```text
    Team Members
    ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img85.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img85.png){:class="img-600"}{: data-lightbox="gallery"}

26. Click on the Pencil icon to the right of the Team Members group to add users.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img86.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img86.png){:class="img-600"}{: data-lightbox="gallery"}

27. In the Edit User Group form, click on Users and then check the box for Team Member 1.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img87.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img87.png){:class="img-600"}{: data-lightbox="gallery"}

28. Click on the General link and then click Save to save the group.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img88.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img88.png){:class="img-600"}{: data-lightbox="gallery"}

29. In the next steps, we will change the permissions for ChatHPE to allow access to the Team Member group. Click on the Workspace icon in the left navigation, then click on the . . . to the right of ChatHPE. Click Edit from the dropdown menu.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img89.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img89.png){:class="img-600"}{: data-lightbox="gallery"}

30. On the ChatHPE edit page, click on Access.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img90.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img90.png){:class="img-600"}{: data-lightbox="gallery"}

31. From the Access Control form in the Select a group dropdown, click on Team Members and then click the X.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img91.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img91.png){:class="img-400"}{: data-lightbox="gallery"}

32. Scroll down to the bottom of the ChatHPE edit page and click on Save & Update.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img92.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img92.png){:class="img-600"}{: data-lightbox="gallery"}

33. In the next steps, we will sign out of our admin account and sign back in with user account. Click on the User icon in the lower left corner and then click on Sign Out.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img93.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img93.png){:class="img-300"}{: data-lightbox="gallery"}

34. Enter the following login details and then click on Sign in.

    User:
    ```text
    tm1@gmail.com
    ```
    Password:
    ```text
    hpent123
    ```

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img94.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img94.png){:class="img-400"}{: data-lightbox="gallery"}

35. You will now be signed into the Team Member 1 account. This user account will be preloaded with the ChatHPE AI assistant and will not have access to any other models or knowledge bases.

    [![]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img95.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/AI-Inferencing/img95.png){:class="img-600"}{: data-lightbox="gallery"}

&nbsp;

This concludes Section 3. Please proceed to the Summary.

&nbsp;

[↑ Back to Top](#)
## Summary

For this HOL you experienced three main AI technology areas all running locally on HPE ProLiant Compute.

You experienced Vision AI using a solution called Vaidio running on the HPE DL320 Gen11. For text-to-image generation we ran SwarmUI. For natural language processing we used Open WebUI to create a RAG enabled AI assistant.

The servers used for the last two exercises were 2x ProLiant DL380 Gen12 with 2x NVIDIA L40s GPUs each.

&nbsp;

This concludes the hands-on lab experience.
