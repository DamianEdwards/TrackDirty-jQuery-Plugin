/// <reference path="jquery-1.4.2.js" />

(function ($) {

    onDirtyChangeCallback: null,
                updateFormClassName

    $.fn.trackDirty = function (settings) {
        /// <param name="settings">
        /// Object literal of settings: 
        /// <para>    className : String</para>
        /// <para>        Class name used for dirty fields, default is 'dirty'. Set to null to disable toggling class on change.</para>
        /// <para>    classNameTargetCallback : function(dirtyElement) { return $(el); }</para>
        /// <para>        Callback used to find the target element to change class name on, default is null.</para>
        /// <para>        Set to null to target changed element directly.</para>
        /// <para>        Should return a jQuery collection containing the element you want to update the class name of.</para>
        /// <para>    onDirtyChangeCallback : function(dirtyElement) { }</para>
        /// <para>        Callback that is called whenever a field is marked as dirty, i.e. changed the first time.</para>
        /// <para>    updateFormClass</para>
        /// <para>        A boolean indicating whether to update the class name of the parent form when a field is marked as dirty.</para>
        /// </param>
        /// <returns type="jQuery" />

        return this;
    };

})(jQuery);