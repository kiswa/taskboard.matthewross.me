$(function () {
    var popup = $('#image-popup');

    $('.popup-image').each(function() {
        // Place the caption after the sidebar popup image.
        var link = $(this).closest('a');
        link.after($('<p class="small text-center caption">' + link.attr('data-caption') + '</p>'));

        // Create the popup on click.
        $(this).click(function(e) {
            e.preventDefault();
            popup.removeClass('hidden');

            var href = $(this).attr('href'),
                caption = $(this).attr('data-caption');

            popup.html('<img src="' + href + '">' +
                       '<p class="small text-center">' + caption + '<span class="visible-xs visible-sm">Touch to Close</span><span class="hidden-xs hidden-sm">Click or ESC to Close</span></p>');
            popup.click(function() {
                popup.html('');
                popup.addClass('hidden');
            });
        });
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) { // ESC
            popup.addClass('hidden');
        }
    });

    // Not images related, but don't want another file for this.
    // Scroll to anchors from Page Contents menu
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
                location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    // Close the page contents menu
                    $('#contents').removeClass('open');
                    // Close the navbar menu if in mobile view
                    if ($('.navbar-collapse').hasClass('in')) {
                        $('.navbar-toggle').click();
                    }
                    // Scroll to position
                    $('html,body').animate({
                        scrollTop: target.offset().top - 60
                    }, 500);
                    return false;
                }
            }
        });
    });
});
