// Horizontal Slides
// work page sliding

$(function() {
  // wait for document ready
  // init
  var wipeani = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    // animate to second panel
    .to('#slideContainer', 0.5, { z: -150 }) // move back in 3D space
    .to('#slideContainer', 1, { x: '-25%' }) // move in to first panel
    .to('#slideContainer', 0.5, { z: 0 }) // move back to origin in 3D space
    // animate to third panel
    .to('#slideContainer', 0.5, { z: -150, delay: 1 })
    .to('#slideContainer', 1, { x: '-50%' })
    .to('#slideContainer', 0.5, { z: 0 })
    // animate to forth panel
    .to('#slideContainer', 0.5, { z: -150, delay: 1 })
    .to('#slideContainer', 1, { x: '-75%' })
    .to('#slideContainer', 0.5, { z: 0 });

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: '#scrolling-work',
    triggerHook: 'onLeave',
    duration: '500%'
  })
    .setPin('#scrolling-work')
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(wipeani);
});

// appear left to right

var items = new ScrollMagic.Controller();
var img = new ScrollMagic.Controller();

var sectionAppear = new ScrollMagic.Controller();
var scroll = new ScrollMagic.Controller();

new ScrollMagic.Scene({ triggerElement: '.img-bio' })
  .setClassToggle('.img-bio', 'img-bio-about') // add class toggle
  // .addIndicators() // add indicators (requires plugin)
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

// Scroll rows

$('.js-scroll').each(function() {
  var scrollSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.99
  })
    .setClassToggle(this, 'in')

    .addTo(scroll);
});

$('#main').fullpage({
  easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  scrollingSpeed: 1e3,
  anchors: ['Homepage', 'Biopage', 'Workpage', 'Knowledgepage', 'Contactpage'],
  navigation: true,
  navigationPosition: 'left'
});
