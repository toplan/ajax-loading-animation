# ajax-loading-animation
a simple ajax loading animation for jquery and Zepto

# Simple Usage

must include `jQuery` or `Zepto` file and `ajax-loading.js`

```html
<script src="/path/to/ajax-loading.js"></script>
<script type="text/javascript">
  //init: automatic monitoring ajax events
  $.loading({
     imgPath : '/path/to/loading/gif'
  });
  //enable and disable listening ajax events
  $.loading.ajax(true);//enable
  $.loading.ajax(false);//disable

  //manual show the loading view
  $.loading.open();//not close
  $.loading.open(1000);//auto close view after 1 seconds

  //manual close the loading view
  $.loading.close();

</script>
```
**tip:**please used `loading()` method to init view before use `open()` or `close()` method.

# More

```html
<script type="text/javascript">
   //init
   $.loading({
        //wrap div
        //set the loading html wrap tag id
        id         : 'ajaxLoading',
        //wrap tag z-index
        zIndex     : '1000',
        //wrap tag background
        background : 'rgba(0, 0, 0, 0.7)',
        //min show time
        minTime    : 200,
        //wrap tag border-radius
        radius     : '4px',

        //loading img/gif
        imgPath    : '/assets/img/img.gif',

        //loading text
        tip        : 'loading...',
        //text font size
        fontSize   : '14px',
        //text font color
        fontColor  : '#fff'
   });
</script>
```
