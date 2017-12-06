var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var json = { title : "", rating : ""};

// specify the url here
var url = '';

request(url, function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);

          var title = $('h1[itemprop="name"]').text();
          var rating = $('span[itemprop="ratingValue"]').text();

          var title = title.trim();
          var rating = rating.trim();

          json.title = title;
          json.rating = rating;

          console.log(json.title); 
          console.log(json.rating);

		fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
		    console.log('File successfully written! - Check your project directory for the output.json file');
		})  
      }
});
        