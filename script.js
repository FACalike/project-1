(function() {
  'use strict';
  var req = new XMLHttpRequest();
  var quote = document.querySelector('.subtitle');
  var author = document.querySelector('.author');

  req.onload = function() {
    if(req.readyState === 4) {
      if(req.status === 200){
        var data = JSON.parse(req.responseText);
        quote.innerHTML = data.quoteText;
        author.innerHTML = data.quoteAuthor;
      } else {
        console.log("An error occured");
      }
    }
  }

  req.open('Get', 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en');
  req.send();

})();
