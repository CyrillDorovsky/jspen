There is no import / include / require in javascript, but there are two main ways to achieve what you want :

1 - You can load it with an AJAX call then use eval.

This is the most straightforward way but it's limited to your domain because of the Javascript safety settings, and using eval is opening the door to bugs and hacks.

2 - Add a script tag with the script URL in the HTML.

Definitely the best way to go. You can load the script even from a foreign server, and it's clean as you use the browser parser to evaluate the code. You can put the <script /> tag in the head of the web page, or at the bottom of the body.

Both of these solutions are discussed and illustrated here .

Now, there is a big issue you must know about. Doing that implies that you remotely load the code. Modern web browsers will load the file and keep executing your current script because they load everything asynchronously to improve performances.

It means that if you use these tricks directly, you won't be able to use your newly loaded code the next line after you asked it to be loaded, because it will be still loading.

E.G : my_lovely_script.js contains MySuperObject

var js = document.createElement("my_lovely_script.js");

js.type = "text/javascript";
js.src = jsFilePath;

document.body.appendChild(js);

var s = new MySuperObject();

Error : MySuperObject is undefined
Then you reload the page hitting F5. And it works! Confusing...

So what to do about it ?

Well, you can use the hack the author suggests in the link I gave you. In summary, for people in a hurry, he uses en event to run a callback function when the script is loaded. So you can put all the code using the remote library in the callback function. E.G :

function loadScript(url, callback)
{
    // adding the script tag to the head as suggested before
   var head = document.getElementsByTagName('head')[0];
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;

   // then bind the event to the callback function 
   // there are several events for cross browser compatibility
   script.onreadystatechange = callback;
   script.onload = callback;

   // fire the loading
   head.appendChild(script);
}
Then you write the code you want to use AFTER the script is loaded in a lambda function :

var myPrettyCode = function() {

   // here, do what ever you want

};
Then you run all that :

loadScript("my_lovely_script.js", myPrettyCode);
Ok, I got it. But it's a pain to write all this stuff.

Well, in that case, you can use as always the fantastic free jQuery framework, which let you do the very same thing in one line :

$.getScript("my_lovely_script.js", function(){


   alert("Script loaded and executed.");
   // here you can use anything you defined in the loaded script

});
link|improve this answer
edited Dec 1 '11 at 19:10

Community♦
1
answered Jun 4 '09 at 12:13

e-satis
55.6k27107169
4	  
Nope but somebody that uses something as advanced as Rhino or else wouldn't ask this question. – e-satis Jul 15 '10 at 3:53
5	  
jquery FTW! thanks for that :) – javamonkey79 Feb 21 '11 at 6:47
5	  
Holy crap. What an awesome answer. – Calvin Froedge Aug 14 '11 at 18:51
1	  
Amazing solution! The jQuery one-liner is too easy :) – Alex Aug 29 '11 at 6:03
1	  
Dawn it. I just want to take this way to load jquery.js :( – aXqd Dec 10 '11 at 12:28
