
## COMMAND-LINE BASICS

(like **REAL** basics)

Ok--so here we're going to learn to talk to the computer so that we can get it to do things for us.  

We do this by typing commands into the "(Shell)[https://en.wikipedia.org/wiki/Unix_shell]", which will interpret these commands (it's a [command-line interpreter](https://en.wikipedia.org/wiki/Command-line_interface)) and then send appropriate instructions to the "[Kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system))" (which you can think of as the very core of the computer--where all the stuff happens).  

To access the shell on your Mac, you open up the Terminal app, which you can find in your `~/Applications/Utilities` folder. You can also hit `command + space` to open up the spotlight search window and start typing in "Terminal" until you see it appear for you to click.

If you like the way your terminal looks (fonts, colors, etc)--cool. If not, hit `command + ,` and you will be able to change anything you like. On our machines, we usually go for dark backgrounds at 80% opacity, for instance. If it will make you happy to do something crazier, then do it.

You should see a prompt, in the form of a line or box that may be flashing (depending on your preferences). This is where you type commands. Go ahead an type in the command `date` and hit return. You should see the date and time. Then try the following series of commands out to get a sense of some of the basic commands you'll find yourself using:
- type `uptime` and hit enter to find out how long your machine has been running since you last powered down or restarted
- enter `echo something` and the terminal should say `something` back to you (in text)
- enter `history` to get a complete list of all the commands you've typed so far
- try `say "I am glad you are learning to code"` and your computer should say something kind to you (turn your volume up to hear it)
- If you make a mistake while typing, you may find yourself trying to use the mouse to click to an earlier point in a line to insert a correction as you would in Microsoft Word.  And you'll find that this doesn't work. You need to either use the forward and back arrow keys, or to hold doing **option** while clicking the mouse to get to where you want to go.
- One very valuable thing to know is that the up-arrow key will go backwards in you command history. Hitting it once will reload the previous command, twice will reload the one before that, and so on. This makes re-entering or slightly tweaking a mis-typed command **much** easier than retyping.

### NAVIGATING THE FILE SYSTEM

Much--**SO much**--of what you'll do in terminal involves navigating the file system (the sort of stuff you do in Finder on your Mac).
- To get started, type `pwd` (print working directory) to find the "path" of your current directory. This will show you the hierarchical list of folders and subfolders that shows (starting at the very root of your drive) where your directory is. The first character of each path will be `/`, which represents the root directory--it's like the place where the trunk of the tree meets the roots, right at the ground.  Everything else sprouts from there.  You'll probably see something like `/Users/llf`--with the `llf` being whatever your username is. This is the same username that shows up with a little circular photo when you log in to your mac.  
- To get a sense of the tree trunk and the branches, type in `cd /` and hit enter.  This will take you to the root of the tree trunk. Next, enter the two commands that you may as well enter EVERY TIME you follow one of the steps in this section:
  - Enter `ls` to see what's there.
  - Enter `pwd` to see where you are.  
This will help you get a better "pseudo-spatial" sense of where you're located, because without the cues offered by your Mac's GUI (Graphical User Interface), it can sometimes be difficult to know where you are.
- Now that you're in the root folder, let's find our way back to your own individual User folder, which is where all of YOUR stuff is going to be.  Enter `cd Users` to get into `/Users`, then once in `/Users`,   `cd llf` should get you into `/Users/llf`.
- Once in `/Users/llf`, your `ls` command should show you a bunch of folders you're pretty familiar with: they're the same folders you see frequently in the sidebar of your Mac's Finder. Most of the folders there were put there by Apple. But there's one folder that we in the Learning Lab put there for your use as a member of the codeLab team: "Development". Go ahead and type `cd Development` to get there. A quick `pwd` now should show you `/Users/llf/Development`, which is where you want to go at the beginning of nearly every work session here in the LL.
![ls output in User folder](https://raw.githubusercontent.com/mkuzmick/the-art-of-coding/master/scripting/images/userFolder_ls.png)
![User folder seen in Finder](https://raw.githubusercontent.com/mkuzmick/the-art-of-coding/master/scripting/images/gui_userFolder.png)
- One thing you may be wondering is whether the User folder is secure. Like, now that you know how to get to the `/Users` directory, what's to stop you from `cd`ing into a folder you're not supposed to be able to access? Well try it! You probably noticed that the `ll_master` directory was one of the options



### ECHOING VARIABLES AND COMMANDS
- now type `MYSECRET="I'm learning to code"`. This will actually store the words "I'm learning to code" in the **variable** `MYSECRET`.  You might now THINK the we can find out that variable by typing `echo MYSECRET`.  But if you try this (go ahead, it won't hurt anything), you'll find that it won't echo back `I'm learning to code`, but, rather `MYSECRET`. So what can we do? If you were solving this problem yourself, what would you do? You'd probably want to be able to tell the computer, "look, I don't *literally* want you to echo the words 'MYSECRET'; I want you to give me what `MYSECRET` refers to." While some [mildly amusing vaudeville humor](https://www.youtube.com/watch?v=kTcRRaXV-fg) derives from overly-literal responses to requests, this isn't what we want here. So to let the computer know that we don't want the 'literal' `MYSECRET` back (and [computer science uses the term `literal` here just the way we do](https://en.wikipedia.org/wiki/Literal_(computer_programming))). but rather the **variable** `MYSECRET`, we're going to put a `$` at the front, typing the full command `echo $MYSECRET`. Hopefully you'll hear back `I'm learning to code` from the machine.
- so it's cool that you can add variables to the end of a string of words (or just a "string"), but what if we wanted to insert the date? We might WANT to type `echo "the current date and time are $date"`, right?  This would put together what we learned in the previous step with what we just learned about variables. But this can't work--can you see why? Go ahead and type it. What do you see? The computer is looking for a VARIABLE called `date`, and you haven't defined it yet. If you were to type `date="not really a date"`, you could then go back (up arrow) and re-enter `echo "the current date and time are $date"`, and you would see `the current date and time are not really a date`. So how do we get the behavior we want? In addition to telling the computer not to take the word `date` *literally*, we also need to indicate that `date` here is the **command** `date` and not just a variable. And we'll do this by adding parentheses around date, making the full command `echo "the current date and time are $(date)"`. This should give you the expected behavior.
- note that the `$` and the `()` are somewhat arbitrary. The developers that made the shell could have chosen different symbols. But they needed to use **SOME** sorts of symbols here--there was no other option. And this is why when learning any new language, we need to learn (and rigorously adhere to) its **syntax**.  






### YOU SHOULD NOW BE ABLE TO
1. Open up Terminal.
2. Type some commands.
  - cd ~
  - ls
  - cd Development
  - ls
  - mkdir newDirectory
  - cd newDirectory
  - nano


## YOUTUBE-DL

If you're interested in learning more, check out the [youtube-dl manual](https://github.com/rg3/youtube-dl/blob/master/README.md).



## SCRIPTING

should we do .sh or .js?

pros of shell =
- extra layer of running through node not there.



- abort commands with Control-C

- [bash shell](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) = "Bourne Again Shell"
