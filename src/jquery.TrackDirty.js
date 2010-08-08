/// <reference path="..\sample\script\jquery-1.4.2.js" />

(function ($) {
    /// <param name="$" type="jQuery" />
    var isDirty = "isDirty";
    
    // Add .trackDirty() function
    $.fn.trackDirty = function (settings) {
        var config = {
                className: "dirty",
                classNameTargetCallback: null,
                onDirtyChangeCallback: null,
                updateFormClass: true
            },
            changeCallback = function () {
                var el = this,
                    $el = $(el);
                
                if ($el.data(isDirty) === true)
                    return;

                $el.data(isDirty, true);
                if (config.className) {
                    (config.classNameTargetCallback ? config.classNameTargetCallback.apply(el) : $el)
                        .addClass(config.className);
                    if (config.updateFormClass)
                        $el.parents("form").addClass(config.className);
                }
                if (config.onDirtyChangeCallback)
                    config.onDirtyChangeCallback.apply(el)
            };

        if (settings) $.extend(config, settings);
        
        this.each(function () {
            $(this)
                .filter(":input")
                    .change(changeCallback)
                    .end()
                .find(":input")
                    .live("change", changeCallback)
                    .end();
        });

        return this;
    };
    
    // Add :dirty selector
    $.extend($.expr[":"], {
        dirty: function (a) {
            return $(a).data(isDirty) === true;
        }
    });

})(jQuery);