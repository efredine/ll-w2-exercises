const request = require('request');
const fs = require('fs');
var length = 0;
var byteCount = 0;

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
        console.error(err);
        throw err;
       })
       .on('response', function (response) {
         length = response.headers['content-length'];
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message:', response.statusMessage);
         console.log('Content type:', response.headers['content-type']);
         if(response.statusCode === 200) {
          console.log("Starting download...");
         }
       })
       .on('data', function(chunk){
        byteCount += chunk.length;
        console.log(`${byteCount} of ${length}`);
       })
       .on('end', function(){
        console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));
