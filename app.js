(function(global) {
  'use strict';

  var analyser = global.analyser;
  var visualizator = global.visualizator;

  var NUMBER_OF_BINS = 32;
  var audioCtx = new window.AudioContext();
  var source = audioCtx.createMediaElementSource(document.querySelector('audio'));

  visualizator.init(NUMBER_OF_BINS, document.querySelector('#bars'));
  analyser.init(NUMBER_OF_BINS, audioCtx, source, audioCtx.destination);

  setInterval(function() {
    visualizator.draw(analyser.analyze());
  }, 50);
})(window);