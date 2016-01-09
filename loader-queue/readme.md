### Queue-loader

This loader creates multi loaders in some containers. The call App.loader.show(n) creates
new instance of loader and hide it in case then number of calls App.loader.show(n) === App.loader.hide(n)

Example:

```javascript
// Example 1
App.loader.show();
App.loader.show();
App.loader.show();
App.loader.hide();
App.loader.hide();
App.loader.hide();
/*
    This example generates one loader and hide it, number
    of show method calls equally to number of hide method calls
*/
// Example 2
App.loader.show(3);
App.loader.show(2);
App.loader.show(1);

App.loader.hide(2);
App.loader.hide(3);
App.loader.hide(1);
/*
    This example generates three loaders and hide their, because
    number of show method calls for each queue equally to number of hide method calls
    for each queue
*/
// Example 3
App.loader.show(1);
App.loader.hide(4);
App.loader.hide(5);
App.loader.hide(8);
/*
    This example generates only one loader and did not hide it, because
    does not exist method hide for this queue
*/
 ```
