"use strict";
// Wrapper for a GET request returning JSON.
function ajaxGetJson(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "json";
    request.addEventListener("load", function() {
        callback(request.response);
    });
    request.send();
}
var languages = ["ActionScript", "Bash", "C", "C#", "C++", "CSS", "Clojure", "CoffeeScript", "Erlang", "Haskell", "Java", "JavaScript", "Lisp", "Lua", "Objective-C", "PHP", "Perl", "Python", "Ruby", "Scala", "Scheme"];
