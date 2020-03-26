# nodejs-basics

### How the web works 

<p align="center">
  <img width="600" height=auto src="https://github.com/anitamiring/nodejs-basics/blob/master/Images/how-the-web-works.png">
</p>

### Create Node JS server - core modules (http)

<p align="center">
  <img width="400" height=auto src="https://github.com/anitamiring/nodejs-basics/blob/master/Images/Core_modules.png">
</p>

### Event loop Node.js 

<p align="center">
  <img width="600" height=auto src="https://github.com/anitamiring/nodejs-basics/blob/master/Images/event-loop.png">
</p>

### JavaScript is single thread

<p align="center">
  <img width="700" height=auto src="https://github.com/anitamiring/nodejs-basics/blob/master/Images/single-thread.png">
</p>

### Basics of Node.js summary 

#### How the web works 
- Client => Request => Server => Response => Client 
#### Program Lifecycle & Event Loop 
- Node.js runs non-blocking JS code and uses an event-drivent code ('Event Loop') for running the logic.
- A Node.js program exits as soon as there is no more event listeners 
- The createServer() never finishes by default
#### Asynchronous Code
- JS code is non-blocking 
- Use callbacks and events 
#### Request & responses 
- Parse request data in chunks (Streams & Buffers) 
#### Node.js & Core Modules
- Node.js comes with some core modules (https, http, fs, path, ...)
- Import via require('module')
#### Module system 
- Import via require('./path') for custom files or require('module') for core and third-party modules
- Export via module.exports 
