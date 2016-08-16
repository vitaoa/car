+ function($) {
    "use strict";
    var applyMedia = function() {
        var _w = $(window).width(),
            _h = $(window).height();
            
//      _h <= 899 && _h >= 768 && ();
//      _h <= 767 && ();
//      _h <= 720 && ();
//      _h <= 667 && ();
    };
    applyMedia();
    $(window).resize(function(){
        applyMedia();
    });
}(jQuery)
