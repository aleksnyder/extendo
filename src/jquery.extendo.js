(function($){
    jQuery.fn.extend({

        // Plugin Name
        extendo: function(options) {
            // Defaults options are set here
            var defaults = {
                order: "list"
            };
            var options = $.extend(defaults, options);

            return this.each(function() {
                $order = options.order;

                setInterval($.proxy(slide, this), 5000);

                function slide() {
                    if ($order === "list") {
                        var $active = $(this).find('img.active');

                        if ( $active.length == 0 ) $active = $(this).children('img').last();

                        // use this to pull the images in the order they appear in the markup
                        var $next =  $active.next().length ? $active.next() : $(this).children('img').first();

                        $active.addClass('last-active');

                        $next.css({opacity: 0.0})
                            .addClass('active')
                            .animate({opacity: 1.0}, 1000, function() {
                                $active.removeClass('active last-active');
                            });
                    }

                    if ($order === "random") {
                        var $active = $(this).find('img.active');

                        if ( $active.length == 0 ) $active = $(this).children('img').last();

                        // pull the images in random order
                        var $sibs  = $active.siblings();
                        var rndNum = Math.floor(Math.random() * $sibs.length );
                        var $next  = $( $sibs[ rndNum ] );

                        $active.addClass('last-active');

                        $next.css({opacity: 0.0})
                            .addClass('active')
                            .animate({opacity: 1.0}, 1000, function() {
                                $active.removeClass('active last-active');
                            });
                    }
                }

            });

        }
    });
})(jQuery);