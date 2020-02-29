/*
Exercise 3
Create the following folder/file structure:
/ex_3
  |-- index.js
Init an NPM project inside the ex_3 folder
Use ex_3 as project name
Read the logplease module documentation and learn to use it
Install the logplease module as dev dependency
Configure the start script so it runs index.js
*/
let logger = require('logplease');
let logger1 = logger.create('NodeBC');
logger1.debug('This is a debug message');
logger1.info('Hello information, how may I help you?');
let logger2 = logger.create('another file');
logger2.warn('I have a bug in my code');
logger2.error('Oh shart we have a problem');
