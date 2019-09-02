// appear left to right

// BLURB STUFF
var items = new ScrollMagic.Controller();

$('.item-left').each(function() {
  var itemSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7,
    duration: '99%'
  })
    .setClassToggle(this, 'items-appear')
    .addIndicators()
    .addTo(items);
});

$('.item-right').each(function() {
  var itemSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7,
    duration: '99%'
  })
    .setClassToggle(this, 'items-appear')
    .addIndicators()
    .addTo(items);
});

// Full Page JS

new fullpage('#main', {
  autoScrolling: true,
  anchors: ['HomePage', 'BioPage', 'KnowledgePage', 'ContactPage', 'WorkPage'],
  navigation: true,
  navigationPosition: 'left'
});
