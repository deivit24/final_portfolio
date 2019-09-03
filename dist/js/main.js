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
  navigationPosition: 'left'
});
