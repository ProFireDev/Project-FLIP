# Getting the Dev Environment set up

## <u> **Software used in this project:**</u>

- [VS code](https://code.visualstudio.com/)
- [node.js](https://nodejs.org/en/download/)

- [GitHub Desktop](https://desktop.github.com/)
- [Git](https://git-scm.com/downloads)
- [vue](https://vuejs.org/v2/guide/installation.html)
- [Vue CLI](https://cli.vuejs.org/guide/installation.html)

## <u> **Other recommended software:**</u>

* [Microsoft PowerToys](https://github.com/microsoft/PowerToys/releases)
  
* [Windows terminal](https://www.microsoft.com/en-ca/p/windows-terminal/9n0dx20hk701?rtc=1#activetab=pivot:overviewtab)
  
<br>

# Forking this project for yourself

We recommend that you Fork this project for yourself, as well as following the instructions below.

> You can fork the project by hitting the gray button on the top right of the page. labeled `fork`

<br>

# **Installing**

<br>1. Install Github desktop [here](https://desktop.github.com/ "here").

<br>2. Clone the repository to your local computer. - Click on the green code Button 
- Click the "Open with GitHub Desktop" button on the drop-down menu 
- note your browser may prompt you with a button to confirm this, click Open with GitHub Desktop again on this prompt.

<br>

[![cloning the repository part 1 gif](https://media.discordapp.net/attachments/913259753948446720/913273808536883241/install_ins_1.gif?width=720&height=527 "cloning the repository part 1 gif")](http://https://media.discordapp.net/attachments/913259753948446720/913273808536883241/install_ins_1.gif?width=720&height=527 "cloning the repository part 1 gif")

<br>3. Open Github desktop, follow the steps in the GIF to create a new fork for your dev branch. your branch should be named as the name of your account, with a dash after it, followed by Dev. EX: PFD-Dev

<br>

[![Intro to forking and collaborating](https://media.discordapp.net/attachments/913259753948446720/913332772662288414/forking_-_intro_compressed.gif?width=720&height=514 "Intro to forking and collaborating")](https://cdn.discordapp.com/attachments/913259753948446720/913332772662288414/forking_-_intro_compressed.gif "Intro to forking and collaborating")

<br>

4. Finally click "Open in Visual Studio Code" to start working. it is also a good idea to click the " Show in explorer" button. this will make it easy to get to the directory where the repository is located.

<br>

5. Next, we need to get the terminal set up, this step is completely optional, but is recommended. you can install Windows terminal through the Microsoft Store by clicking [here](http://https://www.microsoft.com/en-ca/p/windows-terminal/9n0dx20hk701?SilentAuth=1&wa=wsignin1.0&rtc=1#activetab=pivot:overviewtab "here").

You will do all your work on your local branch. if you wish to merge your work into the main, you will have to open a pull request so it can be reviewed by everyone before being merged. ideally the main should be the "slowest" and most stable branch, having all of the code together in a stable product.

When Pushing your code, there is a branch called **STAGING** this branch is the "fast" branch and is where all the most up-to-date code is. you will always want to merge your work into this branch.

> #### **Do not delete the branch after it has been merged to another branch, you need to keep pushing to it. think of it like your own personal version of the repository.**

<br>

---

<br>

Now that our repository is installed, we need to install the Vue command line tooling. this is super simple and only requires some basic knowledge of NPM and node.

If you haven't already installed Node.js, you can head over to the install page [here](https://nodejs.org/en/download/) and grab the latest version of Node and NPM.

You can see the docs [here](https://vuejs.org/v2/guide/installation.html) for any additional reference needed.

<br>

- open a new Terminal window in VS code or in windows terminal if you prefer.

Vue can be installed with:

    npm install vue

For this project, we will also be installing the command line tooling.

Installing:

    npm install -g @vue/cli

The Vue CLI docs can be found [here](https://cli.vuejs.org/guide/installation.html) for additional reference.

<br>

After installation, you will have access to the `vue` binary in your command line. You can verify that it is properly installed by simply running `vue`, which should present you with a help message listing all available commands.

<br>

You can check you have the right version with this command:

    vue --version

<br>

## <u>Initialize the Web GUI</u>

<br>

Type `ls` to list all files and directories in your project.

Type `cd Vue` to switch to the Vue directory

Now enter `vue ui` to initialize the Vue web UI. It will automatically pull up the web UI in a new window in your default browser.

In the event that it doesn't automatically start and run check the address given in the Terminal window. It should be something like [http://localhost:8000](http://localhost:8000)

**Note:** Once you are done, to kill the server you can just press `CTRL + C` in the terminal window.

<br>

## <u>Congratulations! you have now set up your Dev Environment</u>

<br>

> ### **_Note: this file is subject to change a lot, keep an eye on it_**
