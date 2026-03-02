---
layout: page
title: "Lab Website Local Development and Publishing Guide"
sitemap: false
noindex: true
permalink: /install-instructions/
---


This guide explains how to set up your local development environment to build, edit, and publish updates to the **hpelabs.github.io** lab website.

It walks you through installing the required tools (Git and Docker) on a Windows machine, running the website locally using a Docker-based Jekyll environment, previewing your changes in real time, and publishing updates to GitHub.

Once configured, you will be able to:

- Clone the repository locally
- Preview lab guide changes instantly
- Edit content using VS Code
- Publish updates to the public website

The setup only needs to be completed once. After that, your workflow will be limited to pulling updates, editing content, and pushing changes.

## Installation Guide

### 1. Install Required Software

* Install **VS Code**: [https://code.visualstudio.com/docs/?dv=win64user](https://code.visualstudio.com/docs/?dv=win64user)
* Install **Git for Windows**:
  [https://github.com/git-for-windows/git/releases/download/v2.53.0.windows.1/Git-2.53.0-64-bit.exe](https://github.com/git-for-windows/git/releases/download/v2.53.0.windows.1/Git-2.53.0-64-bit.exe)
* Install **Docker Desktop for Windows** (make sure the **WSL option** is enabled during installation):
  [https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-win-amd64](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-win-amd64)

> **Restart your laptop** when prompted.


### 2. First Docker Launch

After restarting:

* Docker will automatically install **WSL** if it is not already installed.
* When Docker starts:

  * Accept the license agreement.
  * Skip the registration step.
  * Wait for the Docker engine to fully start.



### 3. Clone the Repository and Start Docker

1. Open **VS Code**.
2. Open a terminal inside VS Code (`View → Terminal`).
3. Navigate to the folder where you want to clone the website.
4. Run the following commands in **the VS Code terminal**:

    ```bash
    git clone https://github.com/hpelabs/hpelabs.github.io.git .

    docker build -t myjekyll:latest .

    docker run --rm -it -p 4000:4000 -p 35729:35729 -v "${PWD}:/srv/jekyll" myjekyll:latest
    ```

    [![]( {{ site.baseurl }}/assets/images/instructions/image-5.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/instructions/image-5.png){:class="img-800"}{: data-lightbox="gallery"}

    > **Tip:** Running Docker in the VS Code terminal keeps your workflow in a single environment and allows you to see logs and errors immediately.



### 4. Access the Website Locally

Once the Docker container is running, open your browser and go to [http://localhost:4000](http://localhost:4000)

You can now browse a live copy of the website locally.


> ⚠️ **Troubleshooting**
>
>{: .small-space}
>
> If the website does not load, replace `${PWD}` in the `docker run` command with the full path to your cloned repository, for example: `C:\Users\YourName\hpelabs.github.io`

### 5. Configure Git for GitHub

Before you can push edits, Git must be configured with your GitHub credentials.

> **Important:** Make sure you have shared your GitHub username with me so I can add you as a collaborator.

> **Note:** If you do not yet have a GitHub account, create one using your HPE email address.

#### Configure Git

Run the following commands in the VS Code terminal:

```bash
git config --global user.name "<github_user>"
git config --global user.email "<github_email>"
```

#### Run a first Push to force the authentication

After configuring Git, you can run a git push:

```bash
git push
```

A window will appear prompting you to authenticate with GitHub. Follow the instructions.

### 6. Sync Your Local Repository

Before editing, make sure your local repository is up to date:

```bash
git pull origin main
```

* This fetches the latest changes from GitHub and merges them into your local branch.

> **Tip:** Always pull before starting new edits to avoid conflicts.

You can also use **VS Code Source Control**:

1. Open the **Source Control** panel (`Ctrl + Shift + G`).
2. Click the **… → Pull** (or **Sync Changes** if you have local commits).

    [![]( {{ site.baseurl }}/assets/images/instructions/image-2.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/instructions/image-2.png){:class="img-600"}{: data-lightbox="gallery"}


### 7. Edit Your Lab Guide

* Open the markdown file of your lab guide, or create a new one using an existing guide as a template.
* Make the necessary edits to update or add your content.

> **Tip:** Each time you press **CTRL + S** (or **File** > **Save**), the website will automatically refresh in your browser.



### 8. Publish Your Changes Using VS Code Source Control

1. **Open Source Control** (`Ctrl + Shift + G`).
2. **Stage Your Changes**

   * Click the **+** icon next to individual files, or
   * Click **+ (Stage All Changes)** at the top.

3. **Provide a Commit Message**

   * Enter a meaningful commit message (e.g., "Updated COM Zero-Touch lab guide screenshots")

4. **Commit and Push Your Changes to GitHub**

   * Click **Commit & Push**.
   * Authenticate with GitHub if prompted.

    [![]( {{ site.baseurl }}/assets/images/instructions/image-3.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/instructions/image-3.png){:class="img-600"}{: data-lightbox="gallery"}

    > **⚠️ Remember**
    >
    >{: .small-space}
    >
    > Always pull the latest changes before editing and commit/push frequently.


[↑ Back to Top](#)



## Folder Structure

### Lab Guide Markdown Location

Lab guides must be created in `\_posts\<date>-<lab-title>.md`

Where:

- `<date>` format: `YYYY-MM-DD`
- `<lab-title>`: lab title **without spaces** (use -  instead)
- Example `\_posts\2026-02-16-PowerShell-COM-Zero-Touch.md`

    [![]( {{ site.baseurl }}/assets/images/instructions/image-1.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/instructions/image-1.png){:class="img-100pct"}{: data-lightbox="gallery"}

### Image Storage

All lab guide images must be stored in `\assets\images\HOLs\<lab-name>\`

> **Note:** Create a new `<lab-name>` folder in `\assets\images\HOLs\` for each lab guide to organize all related images. Use a clear, descriptive name that matches your lab guide title (e.g., `COM-ZeroTouch` for "HPE Compute Ops Management Zero-Touch Automation").

Example folder structure:
```text
\assets\images\HOLs\
                ├── COM-ZeroTouch\
                │   ├── banner.jpg
                │   ├── image1.png
                │   └── image2.png
                └── Proliant-Security\
                    └── ...
```


[↑ Back to Top](#)

## Markdown Edition

Markdown is a lightweight markup language used to format the lab guides on this website. It uses simple text-based syntax to create headings, lists, links, and formatted text that renders beautifully in a browser.

> ⚠️ **Markdown is Sensitive to Indentation**
>
>{: .small-space}
>
> Proper indentation is critical in Markdown. Incorrect spacing can break formatting, cause lists to fail, or prevent code blocks from rendering. Always pay careful attention to:
> - Spaces before list items (use consistent spacing: typically 2 or 4 spaces for nested lists)
> - Indentation within blockquotes and nested structures
> - Line breaks between different block elements
>
> When in doubt, preview your changes in the live browser to catch formatting issues immediately.


### Markdown Style Guide 

Follow these rules when editing lab guides:

- Use **heading levels 1-6** (`#` to `######`) with the following conventions for lab guides:

    | Level | Syntax | Usage |
    |-------|--------|-------|
    | H1 | `# text` | **Steps and top-level sections** — one per step (e.g., `# Task 1 - Install`) or top-level post-step sections (e.g., `# Summary`, `# Want more?`) |
    | H2 | `## text` | Tasks within a step (e.g., `## Step 1 - Onboard a server`) |
    | H3–H6 | `### text` … | Sub-sections within a task |

    > 💡 The page title is rendered automatically from the front matter `title:` field — do not add it as a `#` heading in the body.

    Example structure:

    ```text
    # Task 1 - Onboarding devices
    ## Step 1 - Onboard one server
    ## Step 2 - Set device location and tags

    # Task 2 - Configure settings
    ## Step 1 - Apply firmware policy
    ```

    - The table of contents is automatically generated by Jekyll from the headings in your page.

      [![]( {{ site.baseurl }}/assets/images/instructions/image-7.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/instructions/image-7.png){:class="img-900"}{: data-lightbox="gallery"}

- Use bullet points (`-` or `*`) for lists; use numbered lists (`1.`, `2.`) for sequential steps.

    ```text
    1. The first step is to install the library on your Windows virtual machine.
    2. Type `Y` when prompted and press Enter to continue with the installation
    ```

- Use **bold** for UI elements, file names, and important terms using `**text**`.

- Use **code blocks** (triple backticks ```` ``` ````) for commands and code snippets. Specify the language type: ```` ```bash ```` , ```` ```powershell ```` , ```` ```text ```` , or ```` ```yaml ````.

    - Supported language types: `bash`, `shell`, `powershell`, `text`, `yaml`, `json`, `markdown`, `python`, `javascript`, `typescript`, `html`, `css`, `xml`. If a language isn’t recognized, use `text` as fallback.
    - Syntax:
        
        <pre><code>
        ```bash
        git clone https://github.com/example/repo.git
        ```
        </code></pre>   

- Use **inline code** (backticks ````` `text` `````) for variables, paths, and terminal commands within text. For example: `$variable`

- Use **blockquotes** (`>`) for tips, warnings, and important notes.
    - Add emojis for visual clarity, see [Emoji Reference Guide](#-emoji-reference-guide):
        - ⚠️ for warnings
        - ℹ️ for information
        - 💡 for tips
        - ✅ for success/checkmarks
        
    - For better line break rendering in blockquotes, use `{: .small-space}`:
        
        ```markdown
        > ⚠️ **Important note**
        >
        >{: .small-space}
        >
        > Your content here with proper spacing.
        ```     
        
        [![]( {{ site.baseurl }}/assets/images/instructions/image-6.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/instructions/image-6.png){:class="img-100pct"}{: data-lightbox="gallery"}

- Use **underline** for emphasis on critical terms (e.g., <u>IMPORTANT</u>).
    - In standard Markdown, there is no native underline syntax. However, you can use `**<u>IMPORTANT</u>: Please note...**` to return **<u>IMPORTANT</u>: Please note...**

- Always add back to top links before each level 1 or 2 heading using: `[↑ Back to Top](#)`

    [![]( {{ site.baseurl }}/assets/images/instructions/image-9.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/instructions/image-9.png){:class="img-800"}{: data-lightbox="gallery"}

- To add a line across the page, you can use: `***`, it will display like:

    [![]( {{ site.baseurl }}/assets/images/instructions/image-8.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/instructions/image-8.png){:class="img-100pct"}{: data-lightbox="gallery"}

- Table can be defined using:

    ```text
    | Team Name & Number | HPE iLO7 FQDN | Username | Default Factory Password |
    |---|---|---|---|
    | **Team-01** | hol1-ilo.local | Administrator | whatever |
    | **Team-02** | hol2-ilo.local | Administrator | whatever |
    | **Team-03** | hol3-ilo.local | Administrator | whatever |
    ```
    Output:

    | Team Name & Number | HPE iLO7 FQDN | Username | Default Factory Password |
    |---|---|---|---|
    | **Team-01** | hol1-ilo.local | Administrator | whatever |
    | **Team-02** | hol2-ilo.local | Administrator | whatever |
    | **Team-03** | hol3-ilo.local | Administrator | whatever |


- Always include photos with proper formatting when inserting images (see "[Adding Images in Markdown](#-adding-images-in-markdown)" section).

[↑ Back to Top](#)

### Step Progress Badge

Each numbered step in a lab guide can display a **step progress badge** showing the step number and an estimated reading/completion time.

The badge is placed **directly below** the `# Task N` heading using:

```markdown
# Task 6 - Configuration of Compute Ops Management

<p class="step-meta">(Task 6 of 12) ⏱️ ~9 min</p>
```

Which renders as a styled badge like:

[![]( {{ site.baseurl }}/assets/images/instructions/image-10.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/instructions/image-10.png){:class="img-100pct"}{: data-lightbox="gallery"}

**Important rules:**

- The `<p class="step-meta">` element **must immediately follow** the `# Task N` heading with no blank line between them.
- The static time value (e.g., `~9 min`) you write in the markdown serves as a **fallback** when JavaScript is disabled.
- The time is **automatically recalculated** at page load based on the word count of the step section (at 140 words/minute). You do not need to manually maintain an accurate value.
- Use the format `(Task X of Y) ⏱️ ~N min` to keep badge styling consistent across all lab guides.


[↑ Back to Top](#)

### Adding Images in Lab Guides

Always use the following format when inserting images

(includes border styling, zoom capability, and size control):

```markdown
[![]( {{ site.baseurl }}/assets/images/HOLs/COM-ZeroTouch/image7.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/COM-ZeroTouch/image7.png){:class="img-500"}{: data-lightbox="gallery"}
```

Supported Image Sizes in {:class="img-xxx"}:

- `img-300`
- `img-400`
- `img-500`
- `img-600`
- `img-700`
- `img-800`
- `img-900`
- `img-100pct` (full width)


[↑ Back to Top](#)

### Mandatory Markdown Metadata (Front Matter)

The first section of every lab guide markdown file must contain metadata.

This section is mandatory and controls how the website displays your lab.

```yaml
---
layout: post
title: "HPE Compute Ops Management Zero-Touch Automation"
image: /assets/images/HOLs/COM-ZeroTouch/banner.jpg
post_end_promo: <i><b>Continue your journey with more HPE Compute Technical Enablement Hands-on Labs for infrastructure, security, technologies, and solutions.</b></i>
excerpt: Learn to automate HPE server lifecycle management using the HPE Compute Ops Management PowerShell module—from workspace provisioning and device onboarding to policy enforcement, compliance monitoring, and sustainability insights within HPE GreenLake.
room: 1
---
```

Metadata Fields Explained:

- **room**

    At events like **HPE Tech Jam**, lab sessions are typically split across two rooms, each running a different set of labs. The `room` field lets you assign each lab guide to a room so attendees can quickly find the labs available in their room.

    The **homepage** ([https://hpelabs.github.io](https://hpelabs.github.io)) always shows all available labs, while two dedicated room pages show only the labs assigned to that room:

    - **Room 1**: [https://hpelabs.github.io/room-1/](https://hpelabs.github.io/room-1/)
    - **Room 2**: [https://hpelabs.github.io/room-2/](https://hpelabs.github.io/room-2/)

    To assign a lab to a room, set `room: 1` or `room: 2` in its front matter. Leave it empty to keep the lab on the homepage only.

    ```yaml
    room: 1   # Room 1 only
    room: 2   # Room 2 only
    room:     # Not assigned to any room (homepage only)
    ```

- **post_end_promo**
    
    Adds a final promotional line at the end of your lab guide.
    
- **excerpt**
    
    Adds a short introduction displayed on the homepage.
    
- **image**
    
    Banner image displayed:
    
    - In the header of your lab guide
    - On the homepage preview card

    [![]( {{ site.baseurl }}/assets/images/instructions/image-4.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/instructions/image-4.png){:class="img-800"}{: data-lightbox="gallery"}


[↑ Back to Top](#)

### Generating a Banner Image

You can use Google Gemini to generate your own banner image.

Example prompt:

> Generate a photorealistic image of [subject].
> 
> 
> Shot with a DSLR camera, 50mm lens, natural lighting, high dynamic range, ultra-detailed, realistic skin texture, sharp focus.
> 
> Export as JPEG with high compression, optimized for web.
> 
> Target file size under 300 KB and sized 1920 x 1282.
> 

After generation:

- Save the file as `banner.jpg`

- Store it in `\assets\images\HOLs\<lab-name>\`


[↑ Back to Top](#)

### Emoji Reference Guide

Here is a list of Emoji you can use to improve your lab guide:

#### Severity & Status

| Emoji | Meaning / Usage |
|-------|-----------------|
| ⚠️ | Warning, caution, potential risk |
| ⛔ | Forbidden, access denied, not allowed |
| ❌ | Error, failure, invalid action |
| 🛑 | Stop immediately, critical halt |
| ℹ️ | Information, guidance, reference |
| 🔔 | Alert/notification, attention needed |
| 🚧 | Work in progress, maintenance window |
| 📝 | Note, annotation, manual step |

#### General Documentation

| Emoji | Meaning / Usage |
|-------|-----------------|
| ✅ | Completed tasks, success, confirmation |
| 🎯 | Goals, objectives, focus |
| 📌 | Important note, pinned item |
| 💡 | Idea, tip, insight |
| 🔍 | Search, analysis, review |
| 🛠️ | Configuration, troubleshooting |
| 🚀 | Launch, progress, innovation |
| 📂 | Documentation, files |
| 🖥️ | Technical topics, systems |
| 🔒 | Security, privacy, protection |
| ✨ | Tip |

#### Process & Workflow

| Emoji | Meaning / Usage |
|-------|-----------------|
| ⏳ | Pending, waiting, in progress |
| 🔄 | Refresh, retry, synchronization |
| ▶️ | Start, play, begin process |
| ⏹️ | Stop process, end task |
| 📤 | Upload, send, outbound action |
| 📥 | Download, receive, inbound action |
| 🗂️ | Organize, categorize, workflow steps |
| 🔁 | Repeat, loop, recurring process |

[↑ Back to Top](#)
