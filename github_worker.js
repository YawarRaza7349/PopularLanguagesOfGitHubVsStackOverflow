"use strict";
importScripts("workers_shared.js");

var index = 0;

// Can't make more than 20 requests a minute, so use setTimeout to space them out evenly enough.
function getGithubData() {
    ajaxGetJson("https://api.github.com/search/repositories?access_token=ba6e81c8ae87a07e2d96b2f4002bd109bcc56df3&q=+language:" + languages[index].replace("#", "%23"), function(data) {
        self.postMessage(languages[index] + ":::" + data.total_count);
        ++index;
        if(index < languages.length) {
            setTimeout(getGithubData, 3050);
        }
    });
}

// Main page sends empty string to start worker
self.addEventListener("message", getGithubData);
