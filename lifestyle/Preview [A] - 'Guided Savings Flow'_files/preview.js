/* globals jQuery */

document.addEventListener("DOMContentLoaded", function() {
    jQuery('#page-preview').on('load', function() {
      jQuery('#loading').hide();
    });
  });

jQuery(function($) {

  var preview = {

    init: function() {
      this.switchByHash();
      this.addListeners();
    },

    addListeners: function() {
      var self = this;

      // Listen for changes to the #hash and update the breakpoint
      $(window).on('hashchange', function() {
        self.switchByHash();
      });

      // Add listeners to the buttons
      $('header .breakpoint #mobile-button').on('click', function(e) {
        e.preventDefault();
        self.switchTo('mobile');
      });

      $('header .breakpoint #desktop-button').on('click', function(e) {
        e.preventDefault();
        self.switchTo('desktop');
      });

      // Add the #desktop or #mobile anchor to the variant dropdown links
      $('.variant-dropdown .variant a').on('click', function(e) {
        e.preventDefault();
        window.location.href = $(this).attr('href') + window.location.hash;
      });
    },

    switchTo: function(breakpoint) {
      $('#page-preview-container').attr('class', breakpoint);
      $('.js-device-toggle').removeClass('active');
      $('.js-device-toggle#' + breakpoint + '-button').addClass('active');
      window.location.hash = '#' + breakpoint;

      if ( breakpoint === 'mobile' ) {
        // Attempt to adjust when the Iframe loads - in case it hasn't loaded yet
        $('#page-preview').on('load', this.adjustForScrollbars());

        // Attempt now as well, in case the Iframe is already loaded
        this.adjustForScrollbars();
      }
    },

    switchByHash: function() {
      if ( window.location.hash === '#mobile' ) {
        this.switchTo('mobile');
      } else {
        this.switchTo('desktop');
      }
    },

    adjustForScrollbars: function() {
      var iframe = $('iframe#page-preview');
      var scrollbarWidth = this.getScrollBarWidth();

      // Compensate for scrollbars by making Iframe wider
      iframe.css('width', 320 + scrollbarWidth);
    },

    // From http://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes
    //
    getScrollBarWidth: function() {
      var inner = document.createElement('p');

      inner.style.width = "100%";
      inner.style.height = "200px";

      var outer = document.createElement('div');

      outer.style.position = "absolute";
      outer.style.top = "0px";
      outer.style.left = "0px";
      outer.style.visibility = "hidden";
      outer.style.width = "200px";
      outer.style.height = "150px";
      outer.style.overflow = "hidden";
      outer.appendChild(inner);

      document.body.appendChild(outer);
      var w1 = inner.offsetWidth;
      outer.style.overflow = 'scroll';
      var w2 = inner.offsetWidth;
      if (w1 === w2) {
        w2 = outer.clientWidth;
      }

      document.body.removeChild(outer);

      return (w1 - w2);
    }

  };

  preview.init();

});
