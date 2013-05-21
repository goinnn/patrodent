(function ($) {
    "use strict";
    //Config Vars
    $.config = {
        transitionTime : 500,
        imagesZIndex : 10,
        before: 'before',
        after: 'after'
    };
    //The Plugin
    $.fn.swapImages = function (config) {
        var images, i;
        config = $.extend($.config, config || {});
        if (this.is("img")) {
            images = this;
        } else {
            images = this.find("img");
        }
        var getBeforeImage = function (event) {
            var i = $(event.target).parent().find("img");
            if (event.type !== "click") {
                $(event.target).parent().data("timestamp", new Date().getTime());
            }
            $(i[0]).fadeOut(config.transitionTime);
            $(i[1]).fadeIn(config.transitionTime);
            $(i[0]).parent().parent().find(".afterBeforeText").html(config.before);
            event.stopPropagation();
            return false;
        };
        var getAfterImage = function (event) {
            var i = $(event.target).parent().find("img");
            if (event.type !== "click") {
                $(event.target).parent().data("timestamp", new Date().getTime());
            }
            $(i[1]).fadeOut(config.transitionTime);
            $(i[0]).fadeIn(config.transitionTime);
            $(i[0]).parent().parent().find(".afterBeforeText").html(config.after);
            event.stopPropagation();
            return false;
        };
        for (i = 0; i < images.length; i = i + 1) {
            var img = $(images[i]);
            var src1 = img.attr("src");
            var src2 = $.beforeUrl(img.attr("src"), config);
            img.before('<div id="swapImages-' + i + '" style="width:' + img.width() + 'px;height:' + img.height() + 'px;"><img title="' + img.attr("title") + '" alt="' + img.attr("alt") + '" src="' + src1 + '" style="position:absolute;z-index:' + (config.imagesZIndex + 1) + '"/><img title="' + img.attr("title") + '" alt="' + img.attr("alt") + '" src="' + src2 + '" style="position:absolute;z-index:' + config.imagesZIndex + ';"/></div>');
            img.remove();
            $("#swapImages-" + i).hover(getBeforeImage, getAfterImage);
            $("#swapImages-" + i).click(function (ev) {
                var swapImages = $(ev.target).parent();
                var timestampNow = new Date().getTime();
                var timestampImg = swapImages.data("timestamp");
                if (timestampImg === undefined || timestampNow - timestampImg > 100) {
                    if ($(ev.target).parent().find("img")[0] === $(ev.target)[0]) {
                        getBeforeImage(ev);
                    } else {
                        getAfterImage(ev);
                    }
                }
            });
        }
    };
    //Auxiliar Function
    $.beforeUrl = function (src, config) {
        return src.replace(config.after, config.before);
    };
    $.capitaliseFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
})(jQuery);
