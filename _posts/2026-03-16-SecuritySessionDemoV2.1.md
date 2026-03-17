---
layout: post
title: "Security Session Demo - HPE ProLiant Compute"
image: /assets/images/HOLs/SecuritySessionDemo/banner.png
post_end_promo: <i><b>Continue your journey with more HPE Compute Technical Enablement Hands-on Labs for infrastructure, security, technologies, and solutions.</b></i>
excerpt: This is a security demonstration of enhanced iLO7 capabilities.
room: 1 # Set to 1 or 2
---

# HPE ProLiant Security

> Live demo Environment – 2026 Security Sessions (TechJam, RSA, Discover)

## Table of Contents

- [The Purpose](#the-purpose)
- [Get Connected](#get-connected)
  - [Procedure:](#procedure)
- [Preferred Starting State](#preferred-starting-state)
- [Thales Cipher Trust Manager (CTM) state before adding devices.](#thales-cipher-trust-manager-ctm-state-before-adding-devices)
- [Current state of iLO7 before adding it to the Thales CTM key manager](#current-state-of-ilo7-before-adding-it-to-the-thales-ctm-key-manager)
- [Show iLO7 encryption status of the various devices used in the Demo](#show-ilo7-encryption-status-of-the-various-devices-used-in-the-demo)

# HPE ProLiant Security Demo – Purpose

## The Purpose

The purpose of this demonstration is to show how to configure an HPE ProLiant Gen12 server with SED‑enabled storage devices and SED‑enabled hard‑drive controllers, and how to connect each of them to an External Key Manager.

During the demonstration, you will connect to the Thales Cypher Trust Manager server and observe a user being created as part of the iLO joining the key manager. You will then see keys being issued as we successfully request a key to enable encryption on the devices.

A challenge in the demonstration environment is that, when you log in to use the equipment, you may find the system in one of two states. The system may already have encryption enabled and be connected to the External Key Manager, or—preferably—you may start with the server not connected to the External Key Manager and none of the devices have encryption enabled.

To illustrate these two states, please review the screen captures of the relevant sections in iLO 7 below.

## Get Connected

You will connect to a Omnissa Horizon environment. With your browser (Chrome recommended) connect to the following URLs based on your present location.

Outside of an HPE office use:  [https://16.103.2.134/](https://16.103.2.134/)

Inside an HPE office use:  [https://10.182.0.33/](https://10.182.0.33/)

Username: RSA_Security

Password: `<email Chris.Powell@hpe.com>`

### Procedure:

1. After clicking one of the links above, you will be presented with the “Your connection isn’t private” prompt, click on Advanced.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG001.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG001.png){:class="img-500"}{: data-lightbox="gallery"}

2. Click on the link to Continue to your IP address. This is not an “unsafe” thing to do in this case.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG012.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG012.png){:class="img-500"}{: data-lightbox="gallery"}

3. At the Horizon client selection screen, choose on the right side of the login box, Omnissa Horizon Web Client.
  
    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG023.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG023.png){:class="img-500"}{: data-lightbox="gallery"}

4. At the Horizon Login screen, enter the username and password listed above and click on Login.
5. When successfully logged in you are presented with a clickable link that launches your demo station. This is where you will work. Make sure you stay within the VPN connection when using a browser. If you connect to a site via your own browser, you will not have a network connection to the lab. You must stay within the Horizon terminal. Click on the HOL_Security Demo Station link.
 
   [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG034.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG034.png){:class="img-500"}{: data-lightbox="gallery"}

6. We are now going to launch some of the demo environment. First, log in to the iLO7 in your HPE Gen12 server. The server is in a pre‑production state, and you will see that warning in the ROM as you use the system. Click on Chrome in your System Tray.
7. After Chrome loads, you will see bookmarked links to the different systems used for the demos. You will see the iLO7 bookmark, the iLO6 bookmark, and of course our Thales server. Click on the iLO7 link.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG044.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG044.png){:class="img-500"}{: data-lightbox="gallery"}

8. Login with Administrator/HPent!123
9. You should be presented with the iLO7 dashboard.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG045.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG045.png){:class="img-500"}{: data-lightbox="gallery"}

10. Now click on the Thales server bookmark named Cipher Trust Manager.
11. If you are presented with another security check, click on the Advanced button to accept the risk and proceed to the safe URL link.
12. You should be presented with a login prompt like the screen shot below.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG046.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG046.png){:class="img-500"}{: data-lightbox="gallery"}

13. Enter the username of Admin/HPent!123 and login to Thales.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG047.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG047.png){:class="img-500"}{: data-lightbox="gallery"}

14. Please log out of the Horizon environment when you are done. To do this, click the three vertical bars on the left side of your VPN connection and navigate to **Log Out**. You can see the three vertical bars in the graphic below.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG048.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG048.png){:class="img-500"}{: data-lightbox="gallery"}

15. You are looking for the section to Log out. Click on the link to successfully log out.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG002.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG002.png){:class="img-500"}{: data-lightbox="gallery"}

This Ends this Section - [↑ Back to Top](#)

## Preferred Starting State

In different sections within iLO7, you can see the various states of “encryption” for the devices installed in the computer. In each of the areas below, we are highlighting each storage controllers starting configuration before encryption capability has been enabled.

You can see each of the controllers in the iLO7 from the Dashboard in the left navigation tree.

1. Select Host.
2. Now select the Hardware card to see the various devices in the system. Please be aware that the server needs to boot, even if that is just to the System Configuration utility, before it will give you a list of all the devices in the computer. This need to be rebooted coupled with the configuration changes we are going to make to the devices, which means rebooting the system must occur before any changes take effect. If you don’t see what you expect, it is most likely that the system needs to be rebooted.
3. Click on the Storage card.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG003.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG003.png){:class="img-500"}{: data-lightbox="gallery"}

4. The screenshot below is the NS204i-u controller. Again, you got here by going to Host -> Hardware -> Storage -> Storage Controllers to see this. Click on View More under the controller to see that the encryption mode is disabled. This is expected because the NS204i-u does not provide any encryption capability at the controller level. In this case Encryption is handled at the storage device level, the 960GB storage devices themselves.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG004.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG004.png){:class="img-500"}{: data-lightbox="gallery"}

5. To see the status of the 960GB storage devices, move down in the screen and click on the logical volume information in the Volumes card. Note that Encrypted is false in volume information, and for each 960GB device the Encryption Status is Unencrypted.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG005.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG005.png){:class="img-500"}{: data-lightbox="gallery"}

6. Now let’s look at the MR416i-p harddrive controller. Again, we return to Host -> Hardware -> Storage -> Storage Controllers and we then click on the MR416i-p information.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG006.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG006.png){:class="img-500"}{: data-lightbox="gallery"}

7. Click on View More to see the encryption area. Note that Encryption Mode is UseLocalKey.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG007.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG007.png){:class="img-500"}{: data-lightbox="gallery"}

8. You can also look at the individual storage devices to see their encryption status. From Host -> Hardware -> Storage -> Storage Drives.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG008.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG008.png){:class="img-500"}{: data-lightbox="gallery"}

9. The next Solution to look at is the External Key Manager that we will use for our demonstration. We are using a Thales Trust Manager system running in our lab.

This Ends this Section - [↑ Back to Top](#)

## Thales Cipher Trust Manager (CTM) state before adding devices.

1. Login into Thales Cipher Trust Manager (192.168.115.10) – Admin/HPent!123.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG009.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG009.png){:class="img-500"}{: data-lightbox="gallery"}

2. Click on Access Management.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG010.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG010.png){:class="img-500"}{: data-lightbox="gallery"}

3. Click on Users – Show that only two users currently exist. We previously created the user called “iLO7-user”.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG011.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG011.png){:class="img-500"}{: data-lightbox="gallery"}

4. Click on Keys – This key was created prior to the demonstration and is named “iLO7-key-master.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG013.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG013.png){:class="img-500"}{: data-lightbox="gallery"}

5. Click on the key itself to reveal the ID Field. This is what is needed by the iLO7 to connect to Thales.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG014.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG014.png){:class="img-500"}{: data-lightbox="gallery"}

6. Copy the ID Field into the clipboard.
7. Optional – In Access Management, click on Groups and explain that the iLO7-user is in the group. You must search for “iLO” to find the group.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG015.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG015.png){:class="img-500"}{: data-lightbox="gallery"}

This Ends this Section - [↑ Back to Top](#)

# HPE ProLiant Security Demo – Demonstration

## Current state of iLO7 before adding it to the Thales CTM key manager

We will start by showing the participants the state of iLO7 before adding it to the Thales CTM key manager for control.

1. Login to iLO77 at 192.168.115.11 – Administrator/HPent!123.
2. From the Dashboard go to Security.
3. Go to Remote Key Manager card

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG016.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG016.png){:class="img-500"}{: data-lightbox="gallery"}

4. Notice that the Servers entry is [Not Set].
5. Hover over the Configuration card.
6. Point out the Account Name – This is derived from the MAC address of the iLO7.
7. Show the iLO7 MAC address – iLO7 Settings -> iLO7 Network Ports -> iLO7 Dedicated Network Port to show the information for the connection.
8. Return to Security -> Remote Key Manager.

This Ends this Section - [↑ Back to Top](#)

## Show iLO7 encryption status of the various devices used in the Demo

1. Login to iLO77 at 192.168.115.11 – Administrator/HPent!123
2. Go to Host -> Hardware -> Storage -> Storage Controllers and note that we have two controllers. The Encryption Mode for both is Disabled.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG017.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG017.png){:class="img-500"}{: data-lightbox="gallery"}

3. Click on the HPE NS204i controller
4. Click on the Logical Volume
5. Click on one of the 960GB physical drives. Point out the Encryption Ability and Status and that moving from unencrypted to encrypted needs to be done before data is written to the drives for use. This is especially important for boot devices like the NS204i.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG018.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG018.png){:class="img-500"}{: data-lightbox="gallery"}

6. Return to the Storage Controllers view and drill down on the HPE MR416i-p.
7. In the Details card click View More. Point out Encryption Mode as currently Disabled

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG019.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG019.png){:class="img-500"}{: data-lightbox="gallery"}

This Ends this Section - [↑ Back to Top](#)

# Configure iLO7 to use Thales CTM

We will now connect our iLO7 to the Thales CTM. Follow the steps to enable this capability.

For the initial creation of this account, iLO7 uses a deployment user account that pre-exists on the key manager with administrator privileges. For more information about the deployment user account, see the key manager documentation.

[HPE Compute Security Reference Guide](https://support.hpe.com/hpesc/public/docDisplay?docId=a00018320en_us&page=GUID-39BD8781-25E7-4E23-8675-5D6246D25BD2.html)

1. Login to iLO77 at 192.168.115.11 – Administrator/HPent!123
2. From the Dashboard go to Security
3. Go to Remote Key Manager card

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG016.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG016.png){:class="img-500"}{: data-lightbox="gallery"}

4. Click in the Edit Servers Pencil icon.
5. Input 192.168.115.10 for Thales Server.
6. Use port 9000 as Primary Key Server Port.
7. Click Update to continue

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG020.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG020.png){:class="img-500"}{: data-lightbox="gallery"}

8. Now click the Pencil icon to edit the Configuration card.
9. Enter the following values –

- Note: you cannot change the Account Name (the MAC address derived value)

- Account Group – ilo-group
- Key Manager Local CA Certificate Name – The value is currently being held in the clipboard (Key ID Field)
- Login Name – Admin
- Password – HPent!123

10. Click Update.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG021.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG021.png){:class="img-500"}{: data-lightbox="gallery"}

11. Click on the Test Connection link.
12. Now, return to the Thales CTM.
13. Click on Users – Show that now three users currently exist. You should see the newly created user called “iLO” with the MAC address appended to “iLO”

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG022.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG022.png){:class="img-500"}{: data-lightbox="gallery"}

- The iLO7 is now set up to manage the key exchange between the key manager and the other devices in the computer. iLO7 uses a unique user account based on its MAC address to communicate with the key manager.

This Ends this Section - [↑ Back to Top](#)

# Configure the MR Controller to request a key from the External Key Manager

We are now going to start using our newly connected external key manager. Follow the steps to get an installed harddrive controller to request an encryption key from the Thales CTM.

1. Login to iLO7 at 192.168.115.11 – Administrator/HPent!123
2. Open the iLO7 Remote Console
3. The server should be on the UEFI System Configuration Menu. If not, reboot the server and get to the UEFI prompt by clicking on `<F9>` at the appropriate time during the computer’s boot cycle.
4. Click on System Configuration

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG024.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG024.png){:class="img-500"}{: data-lightbox="gallery"}

5. Click on Slot 6 HPE MR416i-p Gen11

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG025.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG025.png){:class="img-500"}{: data-lightbox="gallery"}
 
6. Click on Main Menu

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG026.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG026.png){:class="img-500"}{: data-lightbox="gallery"}

7. Move down the list and click Controller Management

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG027.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG027.png){:class="img-500"}{: data-lightbox="gallery"}

8. Move all the way to the bottom of the frame and click on Advanced Controller Management

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG028.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG028.png){:class="img-500"}{: data-lightbox="gallery"}

9. Click on Enable Drive Security

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG029.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG029.png){:class="img-500"}{: data-lightbox="gallery"}
  
10. Choose the External Key Manager (EKM), which is the choice we want, and then click OK. These buttons need to be clicked so that other options become available. By clicking the selection on and off, additional configuration can occur.
11. At the Success banner, you are notified the system needs to restart for the changes to take effect. Click OK to continue

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG030.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG030.png){:class="img-500"}{: data-lightbox="gallery"}

12. Restart the server. Short Cuts -> `<CTRL>``<ALT>``<DEL>` This can take some seconds, please be patient.
13. Return to System Configuration by selecting `<F9>` for System Utilities at boot time.
14. After the server reboots, return to the Thales server to see the key that was issued.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG031.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG031.png){:class="img-500"}{: data-lightbox="gallery"}
  
This Ends this Section - [↑ Back to Top](#)

# Configure the SED Devices to Unlock Encryption via Postman

We will now configure the SED storage devices.

1. Return to the demonstration environment.
2. Open the Postman utility in your System Tray.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG032.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG032.png){:class="img-500"}{: data-lightbox="gallery"}

3. In the My Workspace area, locate the Z-Disk_Encryption section. These are the numbered scripts that will be used to change the SED status of our Storage devices connected to our NS204i-u boot controller.
4. Click on “1-Get Storage Status” to get the status of the storage devices in question.
5. By clicking on the step, you load the script and are ready to then click Send to send the command to the devices.
6. After the command is received, the status of the command is returned. You are looking for 200 OK in the results area.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG033.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG033.png){:class="img-500"}{: data-lightbox="gallery"}

7. We will now take the second step, Local- PATCH Encryption Mode UseLocalKey. Click on the script to make it active and then click Send. This changes the encryption to use a local key. You must reboot for changes to take effect.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG035.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG035.png){:class="img-500"}{: data-lightbox="gallery"}

8. Our next step, Set Encryption Key, sets the keys to be used. Select the step and again click Send to commit the changes. Look for 200 OK to know the steps worked.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG036.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG036.png){:class="img-500"}{: data-lightbox="gallery"}

9. Now return to the iLO7 in the Gen12 system and reboot to the System Configuration utility.
10. Take a tour of the ILO to show that Encryption is now enabled. First, note that the Storage controller is now set to UseLocalKey.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG037.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG037.png){:class="img-500"}{: data-lightbox="gallery"}

11. Click on the controller and then when you “View More” of the information for the NS204i-u, the Logical Volume has the Encrypted value set to True.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG038.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG038.png){:class="img-500"}{: data-lightbox="gallery"}

12. When you drill down on the logical volume, you see that for each device the Encryption Status is Unlocked.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG039.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG039.png){:class="img-500"}{: data-lightbox="gallery"}

- At this point you have completed the demonstration.

This Ends this Section - [↑ Back to Top](#)

# Resetting the security demonstration environment

Hopefully throughout this document we stressed the “before” and “after” nature needed to effectively show this demonstration.

The way you delete the iLO7 from the Thales server is basically the reverse of the steps you took to add the Thales server to iLO7. Go to Security -> Remote Key Manager and then remove the entries we had you add.

1. From the Dashboard go to Security.
2. Go to Remote Key Manager card

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG016.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG016.png){:class="img-500"}{: data-lightbox="gallery"}

3. Edit the Servers card and remove the IP address and the Port information.
4. Edit the Configuration card. Remove the information about the Thales solution.
5. For the MR416i-p harddrive controller, you return to the System Configuration -> Click on the Controller -> Main Menu -> Controller Management -> Advanced Controller Management and then disable drive security. Basically, reversing the steps you took to enable security.
6. Finally, for the 960GB SED devices connected to the NS204i-u controller, from your Postman console, run the final command z-Storage.ResetTo.Defaults, make sure you click Send. This time you should get a “202 Accepted” message.

    [![]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG040.png){: .bordered-image-thin}]( {{ site.baseurl }}/assets/images/HOLs/SecuritySessionDemo/IMG040.png){:class="img-500"}{: data-lightbox="gallery"}

- In all these cases, changes are not made until you reboot the server.

This Ends this Section - [↑ Back to Top](#)

# Summary of what was shown

You performed the following basic steps:

1. You showed the environment before any of the encryption elements were implemented

2. You connected the iLO7 to the Thales CTM

3. You configured a MR416i-p to use an external key manager with a UEFI utility

4. You configured an NS204i-p to a UseLocalKey configuration

5. You unlocked SED enabled NVMe storage devices

6. You restored the environment for the next user

This Ends this Section - [↑ Back to Top](#)

# HPE ProLiant Security Demo – Passwords and logins

Accessing the HPE Compute BU Enablement Environment –

Link to Omnissa Horizon:

Outside of an HPE office:  [https://16.103.2.134/](https://16.103.2.134/)

Inside an HPE office:  [https://10.182.0.33/](https://10.182.0.33/)

Username: RSA_Security

Password: `<email Chris.Powell@hpe.com>`

# Want more?

LEARN MORE AT - HPE Compute Security Reference Guide:

[HPE Compute Security Reference Guide](https://support.hpe.com/hpesc/public/docDisplay?docId=a00018320en_us&page=GUID-39BD8781-25E7-4E23-8675-5D6246D25BD2.html)

