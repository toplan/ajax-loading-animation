# ajax-loading-animation
a simple ajax loading animation for jquery

# Simple Usage

must include `jquery` file and `ajax-loading.js`

```html
<script src="/path/to/jquery"></script>
<script src="/path/to/ajax-loading.js"></script>
<script type="text/javascript">
  $.loading({
     imgPath : '/path/to/loading/gif'
  });
</script>

# More

```html
<script type="text/javascript">
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
