(function($) {
    var $grid = $('.grid');
    var $gridItem = $('.grid__item');
    var $activeFilter = $("button[data-filter*='reset']");
    $activeFilter.addClass("active");

    $grid.masonry({
        itemSelector: '.grid__item'
    });

    $('button').click(function() {
        var filter = $(this).data('filter');
        
        if ($(this) === $activeFilter) {
            return 0;
        } else if (filter === 'reset') {
            $activeFilter.removeClass("active")
            $activeFilter = $(this);
            $activeFilter.addClass("active");
            
            $gridItem.appendTo($grid);
        } else {
            $activeFilter.removeClass("active")
            $activeFilter = $(this);
            $activeFilter.addClass("active");
            
            $gridItem.appendTo($grid)
                .css('top', '')
                .not('[data-filter*="' + filter + '"]')
                .remove();
            
        }

        

        $grid.masonry("reloadItems").masonry();
    });

}(jQuery));
