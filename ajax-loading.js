/**
 * Created by toplan on 15/7/11.
 */

(function($){

    $.loading = function (options) {

        var opts = $.extend(
            $.loading.default,
            options
        );

        init(opts);

        var selector = '#' + opts.id;

        $(document).ajaxStart(function(){
            $(selector).show();
        });

        $(document).ajaxComplete(function(){
            setTimeout(function(){
                $(selector).hide();
            }, opts.minTime);
        });

        $(document).ajaxSuccess();

        $(document).ajaxError();
    };

    $.loading.default = {
        //wrap div
        id         : 'ajaxLoading',
        zIndex     : '1000',
        background : 'rgba(0, 0, 0, 0.7)',
        minTime    : 200,
        radius     : '4px',

        //loading img/gif
        imgPath    : '/assets/img/img.gif',

        //loading text
        tip        : 'loading...',
        fontSize   : '14px',
        fontColor  : '#fff'
    };

    function init (opts) {
        //wrap div style
        var wrapCss = 'display: none;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;padding: 8px;text-align: center;vertical-align: middle;';
        var cssArray = [
            'width: 80px',
            'height: 80px',
            'z-index:' + opts.zIndex,
            'background:' + opts.background,
            'border-radius:' + opts.radius
        ];
        wrapCss += cssArray.join(';');

        //img style
        var imgCss = 'margin-bottom:5px;';
        cssArray = [
            'width:40',
            'height:40px'
        ];
        imgCss += cssArray.join(';');

        //text style
        var textCss = ';';
        cssArray = [
            'font-size:' + opts.fontSize,
            'color:'     + opts.fontColor
        ];
        textCss += cssArray.join(';');

        var html = '<div id="' + opts.id + '" style="' + wrapCss + '">'
                  +'<img src="' + opts.imgPath + '" style="' + imgCss + '">'
                  +'<p style="' + textCss + '">' + opts.tip + '</p></div>';

        $(document).find('body').append(html);
    }

})(jQuery||Zepto);
