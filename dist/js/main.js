var controller = new ScrollMagic.Controller();
var tween = TweenMax.from('#animate', 0.5, {
  autoAlpha: 0,
  scale: 0.7
});

var tween = new ScrollMagic.Scene({
  triggerElement: 'a#top',
  duration: 200,
  triggerHook: 'ovLeave'
})
  .setTween(tween)

  .addTo(controller);

controller.scrollTo(function(newpos) {
  TweenMax.to(window, 0.5, {
    scrollTo: {
      y: newpos
    }
  });
});

$(document).on('click', "a[href^='#']", function(e) {
  var id = $(this).attr('href');
  if ($(id).length > 0) {
    e.preventDefault();
    controller.scrollTo(id);
    if (window.history && window.history.pushState) {
      history.pushState('', document.title, id);
    }
  }
});

// changin link when current
var changeNav = new ScrollMagic.Controller();
// variables for each section
var homeHeight = document.getElementById('home').offsetHeight;
var bioHeight = document.getElementById('bio').offsetHeight;
var knowHeight = document.getElementById('know').offsetHeight;
var contactHeight = document.getElementById('contact').offsetHeight;
var workHeight = document.getElementById('work').offsetHeight;

// home current hover
new ScrollMagic.Scene({
  triggerElement: '#home',
  triggerHook: 0.1,
  duration: homeHeight
})

  .setClassToggle('#home-link', 'newCurrent')
  .addIndicators()
  .addTo(changeNav);

// bio current hover
new ScrollMagic.Scene({
  triggerElement: '#bio',
  triggerHook: 0.1,
  duration: bioHeight
})

  .setClassToggle('#bio-link', 'newCurrent')
  .addIndicators()
  .addTo(changeNav);

// knowledge current hover
new ScrollMagic.Scene({
  triggerElement: '#know',
  triggerHook: 0.1,
  duration: knowHeight
})

  .setClassToggle('#know-link', 'newCurrent')
  .addIndicators()
  .addTo(changeNav);

// contact current hover
new ScrollMagic.Scene({
  triggerElement: '#contact',
  triggerHook: 0.1,
  duration: contactHeight
})

  .setClassToggle('#contact-link', 'newCurrent')
  .addIndicators()
  .addTo(changeNav);

// work current hover
new ScrollMagic.Scene({
  triggerElement: '#work',
  triggerHook: 0.1,
  duration: workHeight
})

  .setClassToggle('#work-link', 'newCurrent')
  .addIndicators()
  .addTo(changeNav);

// appear left to right

// BLURB STUFF
var items = new ScrollMagic.Controller();

$('.item-left').each(function() {
  var itemSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7,
    duration: '85%'
  })
    .setClassToggle(this, 'items-appear')
    .addIndicators()
    .addTo(items);
});

$('.item-right').each(function() {
  var itemSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7,
    duration: '85%'
  })
    .setClassToggle(this, 'items-appear')
    .addIndicators()
    .addTo(items);
});
