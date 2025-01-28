## Visual Tests with Cypress and AppliTools
This is a very simple demonstration on how we can make visual testing with Cypress and AppliTools web service

### Get Started
- Install Git and Clone this Repo
- Install NPM
- Install VS Code (or any IDE of your choice)
- Install project dependencies. In a 📟 type npm install --force
- Install Cypress. In a 📟 and type npm install cypress --save-dev --force

### This example will work with _ngx-admin-app_ repo. So, install this before continue.

Once you have installed _ngx-admin-app_ do the following in that repo:
- Start Main App server. In a 📟 type npm start

Go back to this repo and do the following
- Run the tests. In a new 📟 type npx cypress open and choose any test to run


Reference 📟 => Terminal

## How does AppliTools work?
This repo will contain a simple test for demonstration. 

When doing visual testing you will basically take screenshots of the desired pages and then you will run the test against AppliTools web service. In my example I have an account already linked via the API key defined in applitools.config.js. As that key is private you won't see anything. You have to get yours from the User Menu > My API key and write it in that file.

Once the test run for the first time and takes one or more screenshots. Those screenshots will be taken as the starting point and AppliTools will understand them as the Accepted screenshot and layout design.

On the second run all the new screenshots will be compared against the ones on the first run. If in a real life scenario something needs to be changed and the new screenshot should be taken as the Accepted one you will just simply 👍 (thumbs up) inside the run and then 💾 (save) the new configuration.

Within the run you can enter to the details and use many features inside it, for example you can ignore certain regions that you know it might change. Or for example you can ignore with the "Layout" function, meaning that the AI will obvserve changes in the elements positions and not the text. You can also use color ignore, etc.

You can also set all those ignore parameters directly from the source code. That is up to you. Read AppliTools documentation for that.