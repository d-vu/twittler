$(document).ready(function(){
      var $body = $('body');
      //$body.html('');

      $('#newTweets').on('click', function(){
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          var timeStamp = formatTimestamp(tweet.created_at);
          $tweet.text('@' + tweet.user + ': ' + tweet.message + ' - ' + tweet.created_at );
          $tweet.appendTo($body);
          index -= 1;
        };
      });
      
      function formatTimestamp(tweetCreationTime){
        var year = tweetCreationTime.getFullYear();
        var month = formatMonth(tweetCreationTime.getMonth());
        var day = tweetCreationTime.getDay();
        //var hour = tweetCreationTime.getHour();
        var formatedDate = month + " " + day + ", " + year;
        return formatedDate;
      }

      function formatMonth(monthIndex){
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[monthIndex];
      }

      var index = streams.home.length - 1;
      while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        var timeStamp = formatTimestamp(tweet.created_at);
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ' - ' + tweet.created_at );
        $tweet.appendTo($body);
        index -= 1;
      }

    });