'use strict';

export function printTweets(tweets){
    //in: array of tweet objects (text, timestamp)
    if(tweets.length == 0){
        console.log("No tweets found");
    }

    tweets.forEach(
        (item) => {
            let date = new Date(item.timestamp);
            //format:
            //- "I am the tweet text" (10/31/2017, 3:40:01 AM)
            console.log("- \"" + item.text + "\" (" + date.toLocaleString("en-US") + ")");
        }
    )

}