$(document).ready(function(){

      showTweets();

      $("body").on("click", "a", function(){
        var userName = $(this).text().substring(1);
        showTweets(userName);
      });

      $('#newTweets').on('click', function(){
        showTweets();
      });
      
      function showTweets(userName) {
          if (arguments.length < 1) {
            $('.tweets').empty();
            var homeTweetsLength = (streams.home.length)-1;
            for (var i = homeTweetsLength; i > 0; i--) {
                var tweet = streams.home[i];
                var tweetTag = $('<a></a>');
                var tweetDate = $('<p><p');
                var tweetMessage = $('<span></span>');

                tweetTag.text('@' + tweet.user);
                tweetDate.text("- " + jQuery.timeago(tweet.created_at));
                tweetMessage.text(tweet.message);

                
                tweetTag.appendTo($('.tweets'));
                tweetDate.appendTo($('.tweets'));
                tweetMessage.appendTo($('.tweets'));
              }
          }
          else{
            $('.tweets').empty();
            var userTweetsLength = (streams.users[userName].length)-1;
            for (var i = userTweetsLength; i > 0; i--){
                var tweet = streams.users[userName][i];
                var tweetTag = $('<a></a>');
                var tweetDate = $('<p><p');
                var tweetMessage = $('<span></span>');

                tweetTag.text('@' + userName);
                tweetDate.text("- " + jQuery.timeago(tweet.created_at));
                tweetMessage.text(tweet.message);

                tweetTag.appendTo($('.tweets'));
                tweetDate.appendTo($('.tweets'));
                tweetMessage.appendTo($('.tweets'));
            }

          }
      }
      
      for(var i = 0; i < window.users.length; i++){
        $('<a></a>').text('@' + users[i]).appendTo($('.followers'));
      }



    });