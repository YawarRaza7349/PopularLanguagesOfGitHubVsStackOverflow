"use strict";
importScripts("workers_shared.js");

// Main page sends empty string to start worker
self.addEventListener("message", function() {
    languages.forEach(function(lang) {
        ajaxGetJson("https://api.stackexchange.com/tags/" + lang.replace("#", "%23")+ "/info?site=stackoverflow", function(data) {
            if(data.items && data.items[0] && data.items[0].count) {
                self.postMessage(lang + ":::" + data.items[0].count);
            }
        });
    });
});
