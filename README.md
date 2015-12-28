# jquery-incremental-counter
jQuery plugin incremental counter is a simple counter animated  


![alt text](https://raw.githubusercontent.com/MikhaelGerbet/jquery-incremental-counter/master/doc/images/counter.jpg "jQuery plugin incremental counter")


## Demo

Exemple on [jsfiddle](https://jsfiddle.net/mikhaelgerbet/c9zc6zbw/)



## How to Use?

Incremental counter depends on jQuery. Include them both in end of your HTML code:

```html
<link rel="stylesheet" type="text/css" href="jquery.incremental-counter.css" />
<link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700"> <!-- optional font -->
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.incremental-counter.js" type="text/javascript"></script>
```

Add in your HTML code. The data-value attribute is your final value

```html
<div class="incremental-counter" data-value="1482"></div>
```

then in your code do:

```js
$(".incremental-counter").incrementalCounter();
```

This causes all elements of class incremental-counter to be initialized.



## Install

You can install with [bower](http://bower.io/).


```sh
$ bower install jquery-incremental-counter

```


# License

All code licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php). In other words you are basically free to do whatever you want. Just don't remove my name from the source.

