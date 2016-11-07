let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

require('../http-functions').getHTML(requestOptions, html => {
  console.log(html.split("").reverse().join(""));
});