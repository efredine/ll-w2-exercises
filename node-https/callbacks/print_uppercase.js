let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

require('../http-functions').getHTML(requestOptions, html => {
  console.log(html.toUpperCase());
});