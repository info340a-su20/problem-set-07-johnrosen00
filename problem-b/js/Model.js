'use strict';

import allTweets from "./uw_ischool_tweets";

let tweets = allTweets.map(
    (item) => {
        return {
            text:item.text,
            timestamp:Date.parse(item.created_at)
        }
    }
);



export function getRecentTweets(){
    tweets.sort(
        (a, b) => {
            return b.timestamp - a.timestamp;
        }
    )
    
    return tweets.slice(0,5);
}

export function searchTweets(query) {
    return tweets.filter(
        (item) => {
            return item.text.toLowerCase().indexOf(query.toLowerCase()) >= 0;
        }
    )
}