/// <reference path="jquery-1.4.2.js" />
/// <reference path="..\..\src\jquery.TrackDirty.js" />
/// <reference path="jquery.easing.1.2.js" />

$(function () {

    // Wire-up code samples
    $("p.code-sample").before("<a class=\"show-link\" href=\"#\" title=\"Show the code example\">show example</a>");

    $("a.show-link").click(function (e) {
        e.preventDefault();
        var el = $(this);
        el.next().toggle("fast", function () {
            el.text(el.text() == "show example" ? "hide example" : "show example");
        });
        return false;
    });

    $("form").trackDirty({
        classNameTargetCallback: function () {
            return $(this).parents("li");
        },
        onDirtyChangeCallback: function () {
            $("#animateDirty").get(0).disabled = false;
        }
    });

    $("#animateDirty")
        .click(function () {
            $(":dirty")
                .animate({ marginLeft: 100 }, "fast")
                .animate({ marginLeft: 0 }, "slow", "easeOutBounce");
        });
});