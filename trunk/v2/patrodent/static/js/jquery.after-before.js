(function($) {
    //Config Vars
    $.config = {
        transitionTime : 500,
        imagesZIndex : 10,
        before: 'before',
        after: 'after'
    }
    //The Plugin
    $.fn.hoverAfterBefore = function(config) {
        config = $.extend($.config, config || {});
        if ( this.is("img") ) var images = this;
        else var images = this.find("img"); 
        for(var i=0;i<images.length;i++)
        {
            var img = $(images[i]);
            var src1=img.attr("src");
            var src2=$.beforeUrl(img.attr("src"), config);
            img.before('<div id="afterBefore-' + i + '" style="width:' + img.width() + 'px;height:' + img.height() + 'px;"><img src="' + src1 + '" style="position:absolute;z-index:' + ( config.imagesZIndex + 1 ) + '"/><img src="' + src2 + '" style="position:absolute;z-index:' + config.imagesZIndex + ';"/></div>');
            img.remove();
            $("#afterBefore-"+ i).hover(function(){
                var i = $(this).find("img");
                $(i[0]).fadeOut(config.transitionTime);
                $(i[1]).fadeIn(config.transitionTime);
                $(i[0]).parent().parent().find(".afterBeforeText").html(config.before);
            },function(){
                var i = $(this).find("img");
                $(i[1]).fadeOut(config.transitionTime);
                $(i[0]).fadeIn(config.transitionTime);
                $(i[0]).parent().parent().find(".afterBeforeText").html(config.after);
            });
        }
    };
    //Auxiliar Function
    $.beforeUrl = function(src, config) {
        return src.replace(config.after, config.before);
    }
    $.capitaliseFirstLetter = function(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
})(jQuery);