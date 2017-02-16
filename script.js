(function() {
  'use strict';
  function ajaxRequest(type, path) {
    var req = new XMLHttpRequest();
    req.open(type, path);
    req.send();
    req.onload = function() {
      if(req.readyState === 4 && req.status === 200) {
        return updateDOM(JSON.parse(req.responseText));
      } else {
        return req;
      }
    }
  };

  function updateDOM(returnedJSON) {
    var quote = document.querySelector('.subtitle');
    var author = document.querySelector('.author');
    var rand = Math.floor(Math.random()*returnedJSON.quotes.length);
    quote.innerHTML = returnedJSON.quotes[rand].quote;
    author.innerHTML = returnedJSON.quotes[rand].author;
  }
  ajaxRequest('GET', './quotes.json');
})();
