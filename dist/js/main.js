// Horizontal Slides

// appear left to right

var items = new ScrollMagic.Controller();
var img = new ScrollMagic.Controller();

var sectionAppear = new ScrollMagic.Controller();

new ScrollMagic.Scene({ triggerElement: '.img-bio' })
  .setClassToggle('.img-bio', 'img-bio-about') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(sectionAppear);

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
    triggerHook: 0.3,
    duration: '99%'
  })
    .setClassToggle(this, 'img-appear')
    // .addIndicators()
    .addTo(img);
});

$('#main').fullpage({
  easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  scrollingSpeed: 1e3,
  anchors: ['Home', 'Bio', 'Work', 'Knowledge', 'Contact'],
  navigation: true,
  navigationPosition: 'left'
});
