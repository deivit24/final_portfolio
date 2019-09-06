// Horizontal Slides

// appear left to right

var items = new ScrollMagic.Controller();
var img = new ScrollMagic.Controller();

$('.item-left').each(function() {
  var itemSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.9,
    duration: '99%'
  })
    .setClassToggle(this, 'items-appear')
    // .addIndicators()
    .addTo(items);
});

$('.item-right').each(function() {
  var itemSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.9,
    duration: '99%'
  })
    .setClassToggle(this, 'items-appear')
    // .addIndicators()
    .addTo(items);
});
$('.item-up').each(function() {
  var itemSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.9,
    duration: '99%'
  })
    .setClassToggle(this, 'items-appear')
    // .addIndicators()
    .addTo(items);
});
$('.item-down').each(function() {
  var itemSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1,
    duration: '100%'
  })
    .setClassToggle(this, 'scroll-appear')
    // .addIndicators()
    .addTo(items);
});
$('.img-cover').each(function() {
  var imgSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7,
    duration: '99%'
  })
    .setClassToggle(this, 'img-appear')
    // .addIndicators()
    .addTo(img);
});

// Full Page JS

new fullpage('#main', {
  autoScrolling: true,
  anchors: ['Home', 'Bio', 'Work', 'Knowledge', 'Contact'],
  navigation: true,
  navigationPosition: 'left',
  scrollingSpeed: 1000
});

// // babra js
var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(
      this.fadeIn.bind(this)
    );
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

    return $(this.oldContainer)
      .animate({ opacity: 0 })
      .promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */
    $(window).scrollTop(0);
    location.reload(true);
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility: 'visible',
      opacity: 0
    });

    $el.animate({ opacity: 0.5 }, 1000, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  // var tl = new TimelineMax('.screen-swipe-up', 0.5, {
  //   y: '50%',
  //   repeat: 1,
  //   yoyo: true
  // });
  //

  return FadeTransition;
};
Barba.Pjax.start();
