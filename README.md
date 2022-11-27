# Discord.JS-Basic
In this repo, I am writing a basic tutorial in how to create a discord bot. In this we
will be using discordJS v13.10.2, and will be using both javascript and typescript in windows 10.

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

You will need to click `New Application`, in which you will be greeted with a pop-up asking you to name the application, give it a name and click the prompt to say you agree with the Terms of Service and Policy then click create.

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

Scroll to the bottom, and youll see a URL. copy and paste that into a new tab, select the server you want to add the bot to, then make sure all the permissions are ticked then press `authorise` and do the capture. When you finish you should get a notification telling you that your bot has been added. Look in your server and it should be there.

# Coding your bot
There are still some little bits we need to do before we code the bot, but the main parts are pretty much done. Now lets create a folder where the brain of the bot will be, this can be named anything you want but I would recommend naming it the same as the name of your bot. Next open your command prompt and navigate to the folder.
first we initialise with node:
```nodejs
npm init -y
```
Then we install Discord.js:
```nodejs
npm i discord.js@13.10.2
```
(We use the above as we want to use version 13.1)

Next we will install typescript (**note, if you do not wish to use typescript then you dont need to worry about this step**)
```nodejs
npm install -g typescript
```
Finally we will need to install dotenv:
```nodejs
npm i dotenv
```

Once those are done, open up VS Code and then click and drag the folder your bot lives in, into the right side of the program. It should ask you if you wish to add a new folder to the workspace, click add.
Right-click the folder name and press `New File`, and name it `index.ts` (or `index.js` if youre using javascript instead of typescript), and also crete a new file 
called `.env`. Open the `.env` file and type `TOKEN=`, this is where your discord token will be saved. This discord token is very important and you absolutly do not want this to be leaked, so do not share the token and add this `.env` to your '.gitignore` (if you are using version control).

![image](https://user-images.githubusercontent.com/119116489/204105648-cd85993e-ba9b-4ded-aac6-3e831e4cb27a.png)

Now we will get the token as we haven't got it yet. Go back to the `dev portal` in your browser and go back to the `bot` tab from before. To the right of the icon and below the bots username you will see a button labeled `Reset Token` then confirm that you want to reset, then click `Copy` and go past it in the `.env` file, after the `TOKEN=` and leave no space.

![image](https://user-images.githubusercontent.com/119116489/204106185-16066179-67fa-439c-80b8-40a0985c9c1b.png)
![image](https://user-images.githubusercontent.com/119116489/204106284-d4388338-efcd-4b88-985c-fc6716806eff.png)

Now open up the index.ts/index.js and lets import our dependancies. For this we only need 3, as this isn't going to be a big bot. We need to import discordJS, Intents and dotenv.

in `typescript` it you would import them like this:
```ts
import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import 'dotenv/config'
```
in `javascript` you would import them like this:
```js
const Discord = require('discord.js');
const { Client, Intents} = require('discord.js');
const dontenv = require('dotenv');
dontenv.config();
```

In this tutorial, thats the only real difference between typescript and javascript, the rest of the code will work in either format, but I will be sticking to index.ts. Ok now that we have imported what we need, we now to to start a discord client and set-up our intents. Note that intents have changed in discordJS v14, and if you have installed the right discordjs version, then you shouldn't get any errors. If you do, check to make sure that you have `DiscordJS V13` or go back onto the `dev portal` and make sure your bot has the intents ticked. But if you have followed this then you shouldn't have an error with the intents.

To create the client we will write this:

```ts
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
})
```

Now we have the client made, we will now create an async function to write to the console when the bot starts, despite there being other uses the main one is to indicated that your bot is running. The code for this is:

```ts
client.on('ready', async () => {
    console.log('Yawns *stretches*..... I dont want to wake up just yet')
})
```
You can change the message in the console log to anything you want.

If we start the bot now with either: `ts-node index.ts` (for typescript) or `node index.js` (for javascript), it will fail to start and throw you some errors. This is because we haven't logged our bot in. In order to do this, at the bottom of the file we will write 
```ts
client.login(process.env.TOKEN)
```
This fetches the token you put in the `.env`. This is to keep your bot token secure and cant be read, and it saves you from hard coding in the token making it very easy for people to steal.

now if you try and running your bot, it should display the console log and your bot will come online in discord. But its pretty much just an empty shell, like a deer in headlights it's alive but no one is home. Now we will add some functionality, in this we won't be dwelling with slash commands but will in another repo (whenever I get around to doing it). We need the bot to act on something through a message command, so pretty much the bot looks at every message sent and if the message sent is identicle to a command we have wrote then it'll do something.

we start with this (and make sure it is above the ```ts client.login()``` as that needs to always be at the bottom, after all the functionality):

```ts
client.on('messageCreate', (message) => {
 
})
```
