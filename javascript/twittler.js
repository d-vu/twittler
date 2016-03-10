$(document).ready(function(){

      $("body").on('click', "a", function(){
        var taco = $(this).text().substring(1);
        console.log(taco);
        alert(taco + '?!?!?');
      });

      $('#newTweets').on('click', function(){
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var user = $('<div></div>');
          user.text('@' + tweet.user);
          user.appendTo($('listOfTweets'));
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
        // var tweet = streams.home[index];
        // var $tweet = $('<div></div>');
        // $tweet.text('@' + tweet.user + ': ' + tweet.message + ' - ' + formatTimestamp(tweet.created_at) );
        // $tweet.appendTo($body);
        // index -= 1;

        // var tweet = streams.home[index];
        // var user = $('<div></div>');
        // user.text('@' + tweet.user);
        // user.appendTo($('listOfTweets'));
        // index -= 1;

        var tweet = streams.home[index];
        var tweetTag = $('<a></a>');
        var tweetDate = $('<p><p');
        var tweetMessage = $('<span></span>');

        tweetTag.text('@' + tweet.user);
        tweetDate.text(formatTimestamp(tweet.created_at));
        tweetMessage.text(tweet.message);

        tweetTag.appendTo($('.tweets'));
        tweetDate.appendTo($('.tweets'));
        tweetMessage.appendTo($('.tweets'));

        index -= 1;
      }

    });