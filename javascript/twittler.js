$(document).ready(function(){

      $("body").on("click", "a", function(){
        var userName = $(this).text().substring(1);
        showTweets(userName);
      });

      $('#newTweets').on('click', function(){
        showTweets();
      });
      
      function formatTimestamp(tweetCreationTime){
        var year = tweetCreationTime.getFullYear();
        var month = formatMonth(tweetCreationTime.getMonth());
        var day = tweetCreationTime.getDay();
        var hour = tweetCreationTime.getHours();
        var mintue = tweetCreationTime.getMinutes();
        var second = tweetCreationTime.getSeconds();
        if (hour > 12 ){
          hour -= 12;
          second += " PM";
        }
        else{
          second += " AM";
        }
        var formatedDate = month + " " + day + ", " + year + " " + hour + ":" + mintue + ":" + second;
        return formatedDate;
      }

      function formatMonth(monthIndex){
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[monthIndex];
      }

      // function showUserTimeline(userName){
      //   var usersNameTweets = streams.users[userName];
      //   for (var i = 0; i < usersNameTweets.length i++){
          
      //   }
      // }

      function showTweets(userName) {
          if (arguments.length < 1) {
            $('.tweets').empty();
            var homeTweetsLength = streams.home.length-1;
            for (var i = homeTweetsLength; i > 0; i--) {
                var tweet = streams.home[i];
                var tweetTag = $('<a></a>');
                var tweetDate = $('<p><p');
                var tweetMessage = $('<span></span>');

                tweetTag.text('@' + tweet.user);
                tweetDate.text(formatTimestamp(tweet.created_at));
                tweetMessage.text(tweet.message);

                tweetTag.appendTo($('.tweets'));
                tweetDate.appendTo($('.tweets'));
                tweetMessage.appendTo($('.tweets'));
              }
          }
          else{
            $('.tweets').empty();
            var userTweetsLength = streams.users[userName].length-1;
            for (var i = userTweetsLength; i > 0; i--){
                var tweet = streams.users[userName][i];
                var tweetTag = $('<a></a>');
                var tweetDate = $('<p><p');
                var tweetMessage = $('<span></span>');

                tweetTag.text('@' + userName + " - ");
                tweetDate.text("tweeted on " + formatTimestamp(tweet.created_at));
                tweetMessage.text(tweet.message);

                tweetTag.appendTo($('.tweets'));
                tweetDate.appendTo($('.tweets'));
                tweetMessage.appendTo($('.tweets'));
            }

          }
      }
      showTweets();
      

      // }



      // var index = streams.home.length - 1;
      // while(index >= 0){
      //   // var tweet = streams.home[index];
      //   // var $tweet = $('<div></div>');
      //   // $tweet.text('@' + tweet.user + ': ' + tweet.message + ' - ' + formatTimestamp(tweet.created_at) );
      //   // $tweet.appendTo($body);
      //   // index -= 1;

      //   // var tweet = streams.home[index];
      //   // var user = $('<div></div>');
      //   // user.text('@' + tweet.user);
      //   // user.appendTo($('listOfTweets'));
      //   // index -= 1;

      //   var tweet = streams.home[index];
      //   var tweetTag = $('<a></a>');
      //   var tweetDate = $('<p><p');
      //   var tweetMessage = $('<span></span>');

      //   tweetTag.text('@' + tweet.user);
      //   tweetDate.text(formatTimestamp(tweet.created_at));
      //   tweetMessage.text(tweet.message);

      //   tweetTag.appendTo($('.tweets'));
      //   tweetDate.appendTo($('.tweets'));
      //   tweetMessage.appendTo($('.tweets'));

      //   index -= 1;
      // }

      for(var i = 0; i < window.users.length; i++){
        $('<a></a>').text('@' + users[i]).appendTo($('.followers'));
      }



    });