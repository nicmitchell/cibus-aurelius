## Description
Catalog your favorite dishes to cook with pictures, descriptions, and recipes. Integrated with Firebase for data and storage.

Demo: https://cibus-aurelius.herokuapp.com

## Background
The movie was "Once Upon A Time In Mexico". The character played by Johnny Depp was CIA Sheldon Sands. He was the arbitor of Pork Pibil and would assassinate any cook whose dish was too good and upset the balance. 

The bonus features of the DVD showed Robert Rodriguez demonstrating how to make that dish. It has subsequently become one of my favorite meals to make. He also advocated learning how to make a handful of dishes really well and making a menu for people who visit. This app was inspired by that idea of creating a menu for visitors.

This project was created as a simple way for me to catalog the things I like cooking and to present a menu to visitors. 

## Features
Uses React, React Router, React Bootstrap, Redux, Firebase data, storage, and authorization

## Installation/Configuration
- `npm install`
- Create your Firebase project
- Put Firebase credentials as env variables in `.env.example` (remove '.example')
- Create the same environment variables wherever you are deploying (Heroku, etc)
- Create Firebase storage project
- Enable Github authentication with Firebase
- Setup Firebase security rules (see firebase-rules.txt)
- Uses `create-react-app`, so do what you want with the build step
- Or `npm deploy` for easy push to Heroku

## Features To Integrate
- Auto select upcoming meals for the week
- Add additional auth methods (Facebook, email, etc)
- Better image handling (currently only 1000px wide work best)
- Distraction animation while loading

## Screenshots
![Home](http://imgur.com/l8nvgzP)
![Grid](http://imgur.com/591d9iT)
![Single](http://imgur.com/lGFIOkH)
