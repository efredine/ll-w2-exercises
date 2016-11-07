const httpFunctions = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

httpFunctions.getHTML(requestOptions, console.log);