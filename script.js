(function() {
  'use strict';
  var req = new XMLHttpRequest();
  var quote = document.querySelector('.subtitle');
  var author = document.querySelector('.author');

  req.onload = function() {
    if (req.readyState === 4) {
        var data = JSON.parse(req.responseText);
        var rand = Math.floor(Math.random()*data.quotes.length);
        quote.innerHTML = data.quotes[rand].quote;
        author.innerHTML = data.quotes[rand].author;
      } else {
        console.log("An error occured");
      }
    }
  req.open('GET', './quotes.json');
  req.send();

})();
