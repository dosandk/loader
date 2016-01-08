### Simple loader

Loader increase counter when show method called and decrease this counter when hide method called.

Example:

```javascript

App.loader.show(); // increase counter to 1
 setTimeout(function () {
     console.error('ajax 1');
     App.loader.hide(); // didn't hide loader, only decrease counter (2 - 1)
 }, 2000);

 App.loader.show(); // increase counter to 2
 setTimeout(function () {
     console.error('ajax 2');
     App.loader.hide(); // this call will hide loader
 }, 3000);
     
 ```
