## Table of Contents
[1.Full App Description](#full-app-description)\
[2.Current Status](#current-status)\
[3.Still to Come](#still-to-come)\
[4. Runbook Documentation](#steps-to-run-on-localhost)

# Full App Description
This is a full stack ReactJS and NodeJS application that I have been working on for the past few weeks. This site is very similar to Travel.com or other travel and booking agency websites that are able to book hotels, flights, rental cars, and more to meet customer travel needs. This is the first personal project I have ever worked on with React and Node where I am using Fecth Hooks and also using Context to keep track of both search and current user data. The current implementation currently has the API built to track the hotels and rooms feature of the page. The page currently supports searching Hotels and Rooms by city and destination and I am currently working on adding the physical booking feature for that before I begin work on the flgihts, rental cars, and other features and searches I plan on making available in this application. 

# Current Status
At this point in time, I have completed most of the Front End/UI Portion of the application and the API build for the hotels and rooms tab of the booking application. It has a search and authentication context that allows you to search hotels by city and keeps login information from page to page.

# Still to Come
The next step for this application is for me to finish the front end and back end functionality to allow customers to search for flights and then rental cars, in a similar fashion to how i completed the hotels portion of the application. In the further future once I have completed all of the functionality for this website, I will connect it to my Data Administrator Dashboard Portal that I created for my Flix-Movie-Streaming application but can be tweaked to support applications like this if needed.
# Travelago-Back-End Local Runbook Documentation.
https://github.com/CodeJunkie97/Travelago-API

# Steps to run on localhost:
1. Clone both this front end repository and the linked back end repository above. You will need both to be running simultaneously for the application to work properly.
2. After you have both cloned, navigate into the back end server repository and the api folder.
3. Once in the API folder in a terminal, run the command 'npm install' to install all of the packages needed to run the backend server.
4. Once the libraries have finished installing, you should then run the command 'npm start' to start the backend development server. From the command terminal, you will recieve two output messages to let you know the backend server is running and that the connection to the database was successful.
5. After you recieve these messages, it is time to switch to the FrontEnd/UI Repository. Once in the FrontEnd/UI Repository in a command terminal, navigate to the travelago folder and again run 'npm install' to install all of the required libraries and 'npm start' to start the front end development server.
6. Once complete your browser should open up a window to the Front End UI running on Port 3000. Access Tokens for the API are currently hardcoded in. If the access token currently in the repository does not work, I have created a guide on how to get a new token. Read the below instructions to obtain an access token and then return to this guide.


# Get New Access Token
