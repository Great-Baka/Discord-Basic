# Discord.JS-Basic
In this repo, I am writing a basic tutorial in how to create a discord bot. In this we
will be using discordJS v13.10.2.

# Useful-Links
* Discord Dev Portal: https://discord.com/developers/applications
* Discord Guide: https://discordjs.guide/

# Requirements
To start off there will be a few things that you will need:
* An IDE, I recommend [Visual Studio Code](https://code.visualstudio.com/download/).
* [NodeJS](https://nodejs.org/en/download/)

# Initialisation
To start off with you will need to login or register an account on the [Discord Developer Portal](https://discord.com/developers/applications).
Once you've done that, you should see something similar to this:

![image](https://user-images.githubusercontent.com/119116489/204100665-75a9aecd-d7c3-4737-b9a7-aeecc26fa700.png)

You will need to click `New Application`, in which you will be greeted with a pop-up asking you to name the application, give it a name and click the promt to say you agree with the Terms of Service and Policy then click create.

![image](https://user-images.githubusercontent.com/119116489/204101173-88259fe8-4cc7-4828-8f83-b53854281c65.png)

Once created you will be met with information about the application. On this page you can change the name, photo and add a description. You will also see some 
important information, that being the `Application ID` and `Public Key`. You dont need to worry too much about those for the moment but I wouldn't go 
around telling people them.

![image](https://user-images.githubusercontent.com/119116489/204101737-f40e484a-66fa-4e97-b65a-013a962d14df.png)

On the left you will see an button called `Bot`, press that and you will see a near empty page with a button that say `add bot`, press that and then press the second one that shows and then there you have it. You have added your bot to the application.

**_WARNING! There is some very important information here that you do not want to share to anyone_**

To save time later, if you scroll down a little you will see some switches. If you wish your bot to be public then leave that switched on otherwise switch it off(which I recommend until you have finished the bot to a point that you feel can be released), there are 3 others called: 
* Presence IntentServer 
* Members IntentMessage 
* Content Intent
Switch all 3 of them on.

Before we can carry on, let's switch over to discord and set up our test enviornment. On the left side of the screen, as you will know, are the servers and groups you are currently in. If you're like me and is in a fair amount of servers, the scroll to the very bottom until you see `add a server`. from there press `Create My Own`>`For me and my friends`. Name and add a photo, or dont (you can change it all later).

![image](https://user-images.githubusercontent.com/119116489/204102771-4e038406-6769-4f0d-b221-c185be71b13b.png)

Ok, now that we have created our server let's go back to the `developer portal`. Click on `OAuth2` then `URL Generator`. You will see a box filled with alot of options, for the purpose of this we will only need to tick `Bot`. Afterwards underneath another box with alot of options will appear, despite not being best practice as these options gives your bot power to do things in the server, we will tick `Administrator`. Best practice would be to only select the options you need.

![image](https://user-images.githubusercontent.com/119116489/204103339-2ef971c6-77fc-4d27-a804-3007d321a6a6.png)


