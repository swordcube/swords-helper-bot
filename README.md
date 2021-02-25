# Sword's Helper
Source code for Sword's Helper on discord

<p><a title="Invite" href="https://discord.com/oauth2/authorize?client_id=766645902491648010&scope=bot&permissions=805314622" target="_blank" rel="noopener">Invite</a></p>
<p><a title="Download" href="https://github.com/swordcube/swords-helper-bot/releases" target="_blank" rel="noopener">Download the source code</a></p>

<h2><strong>Setup Instructions<br /></strong></h2>

<h2>Preparing the bot</h2>
<h3>you'll need the following items:</h3>
<ul>
<li>Discord.js 12.5.1+</li>
<li>Visual Studio Code/Windows Command Prompt/Linux Terminal</li>
<li>The latest release of node.js (recommended 12.16.1)</li>
<li>A bot created from Discord's Developer Portal</li>
</ul>
<h3>Setting up the bot before starting it up</h3>
<ol>
<h2><strong>VS Code Instructions<br /></strong></h2>
<li>Open Visual Studio Code</li>
<li>Open the bot's folder</li>
<li>Click on terminal on top of the screen</li>
<li>Click "New Terminal"</li>
<li>Type in "npm install discord.js" and press enter. After that's done, Type in "npm install pm2". it will install all the important parts for the bot to work.</li>
<li>Go to the discord developer portal and select a bot</li>
<li>Go to the bots section and click "Copy Token"</li>
<li>Go back to Visual Studio Code and go to conf/config.json</li>
<li>Replace the token (in quotes) with your bots token</li>
</ol>
<h2><strong>Command Prompt/Linux Terminal Instructions<br /></strong></h2>
<li>Open the bot's folder</li>
<li>Right click anywhere and click "Open in Terminal" or cd to the directory in Command Prompt.</li>
<li>Type in "npm install discord.js" and press enter. After that's done, Type in "npm install pm2". it will install all the important parts for the bot to work.</li>
<li>Go to the discord developer portal and select a bot</li>
<li>Go to the bots section and click "Copy Token"</li>
<li>Go to config.json</li>
<li>Replace the token (in quotes) with your bots token</li>
</ol>
<h3>Starting the bot</h3>
<ol>
<li>If you haven't opened the terminal or closed it, reopen it and cd back to the directory index.js is in.</li>
<li>Type in pm2 start index.js --watch</li>
<li>Wait a second</li>
</ol>
<p>Check Discord and if the bot is online, then you are ready to go!</p>
<p>If you see an error and the bot shutting down or the bot does nothing, please check the token in conf/config.json. if you put the token in and you still receive an error. please check all the packages or report it to our staff.</p>
<p>&nbsp;</p>
<p><strong>Keep the terminal open. To safely shut down the bot, type in "pm2 stop index.js"</strong></p>
<p>&nbsp;</p>
<p>And thats how you set it up!<br /></p>
<p>&nbsp;</p>
