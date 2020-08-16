# Halco Personal Website 
You can find the website here: 
https://halco.se

## Reason for projectand chioice of tools
I wanted to continue my 5-year old **new year-new website tradtion**. This time I wanted to write a **fast, but flexible website that allowed me to use as elegant and well-written code as possible**. This meant using Reacts "never write the same code twice"-philiosohopy with how it utilises components. Since this portfolio-website would include many items with similair structures (projects, jobs etc.) this fitted nicely to ensure the code was elegantly and smartly written. Since I still wanted to focus on speed and did not need Reacts more advanced dynamic functionality **(I only needed to use functional components and React Hooks)**, it landed on me using [Gatsby](https://www.gatsbyjs.com/), a React-based open source static site generator framework. 

## Architecture
With using Gatsby, I used a **[JAMStack](https://jamstack.org/) architecture** which gave me a lot more flexibility and advantages. Definetely the way I would build websites moving forward since I also have the option to add a headlesss CMS to mimic a Wordpress-setup.

## Styling
For this, I wanted to use a new kind of styling I hadn't used before, more specifically CS-in-JS, **[Emotions](https://emotion.sh/docs/introduction) styled components. This gave me speed and scoping advantages** and is definetely something I will keep using after this.

## Hosting/Network Routing
I used a similair routing setup as last year, where I needed to host it in such a way that **1. its easy to deploy continuously** and **2. take advantage of the sites speed to achive the goal of nearly instant loading.** Problem #1 was solved by hosting it with **Netlify and continious deployment** with automatic deployment connected to the master branch. Netlify was also well-documented and integrated with Gatsby which made it an easy choice.

As for Problem #2 it wasnt as straight forward. I wanted to handle everything from AWS, but since no big cloud provider sells .se domain names (halco.se for ex.) I had to go via a web hotel, Loopia. However, their loading times were not acceptable to me and I had to look for a work-around. What I did was the following:
1. Bought the domain name halco.se from Loopia. 
2. Deploy Gatsby files to the Netlify hosting server which comes with a URL.
2. Transfered the domain names admin-rights to AWS Route 53.
3. Changed from Loopias to Netlifys name servers.
3. Netlify DNS will automatically point halco.se to my deployed files.

You can find the website here: 
https://halco.se
