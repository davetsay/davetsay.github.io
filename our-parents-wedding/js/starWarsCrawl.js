
/*
 * 2013 by Tim Pietrusky
 * timpietrusky.com
 * Thanks Tim Pietrusky
 */
var StarWars = (function() {
  
  /* 
   * Constructor
   */
  function StarWars(args) {
    // Context wrapper
    this.el = $(args.el);
    console.log("this:", this);
    console.log("args:", args);
    console.log("el:", this.el);
    // Audio to play the opening crawl
    this.audio = this.el.find('audio').get(0);
    
    console.log("audio", this.audio);
    // Start the animation
    this.start = this.el.find('.start');
    console.log("start", this.start);
    // The animation wrapper
    this.animation = this.el.find('.animation');
    
    // Remove animation and shows the start screen
    this.reset();

    // Start the animation on click
    this.start.on('click', $.proxy(function() {
      console.log("clicked");
      this.start.hide();
      this.audio.play();
      this.el.append(this.animation);
    }, this));
    
    // Reset the animation and shows the start screen
    $(this.audio).on('ended', $.proxy(function() {
      console.log("ended");
      this.audio.currentTime = 0;
      this.reset();
    }, this));
  }
  
  /*
   * Resets the animation and shows the start screen.
   */
  StarWars.prototype.reset = function() {
    this.start.show();
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };

  return StarWars;
})();

$(function() {
  new StarWars({
    el : '.starwars'
  });
});
