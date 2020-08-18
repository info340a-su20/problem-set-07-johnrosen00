'use strict';


import readline from "readline-sync";

import * as model from "./Model";

import {printTweets} from "./View";

export function runSearch() {
    console.log("Here are some tweets by @UW_iSchool");
    printTweets(model.getRecentTweets());

    let query = readline.question("Search tweets, or EXIT to quit: ");
    if(query != "EXIT") {
        let results = model.searchTweets(query);

        printTweets(results);
    }
    
}