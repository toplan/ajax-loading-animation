# ajax-loading-animation
a simple ajax loading animation for jquery and Zepto
[Demo](http://toplan.github.io/loading/)
# Simple Usage

must include `jQuery` or `Zepto` file and `ajax-loading.js`

```html
<script src="/path/to/ajax-loading.js"></script>
<script type="text/javascript">
  //init: automatic monitoring ajax events
  var loading = $.loading();

  //enable and disable listening ajax events
  loading.ajax(true);//enable
  loading.ajax(false);//disable

  //manual show the loading view
  loading.open();//not close
  loading.open(1000);//auto close view after 1 seconds

  //manual close the loading view
  loading.close();

</script>
```

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
        //wrap width
        width      : '85px',
        height     : '85px',

        //loading img/gif
        imgPath    : '/assets/img/img.gif',
        imgWidth   : '45px',
        imgHeight  : '45px',

        //loading text
        tip        : 'loading...',
        //text font size
        fontSize   : '14px',
        //text font color
        fontColor  : '#fff'
   });
</script>
```
