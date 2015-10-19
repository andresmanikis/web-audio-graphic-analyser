(function(global) {
  'use strict';

  var app = {
    start: function(provideSource) {
      var NUMBER_OF_BINS = 32;

      app.audioCtx = new global.AudioContext();
      app.analyser = global.analyser;
      var visualizator = global.visualizator;

      provideSource(app.audioCtx, function(source) {
        visualizator.init(NUMBER_OF_BINS, document.querySelector('#bars'));
        app.analyser.init(NUMBER_OF_BINS, app.audioCtx, source, app.audioCtx.destination);

        setInterval(function() {
          visualizator.draw(app.analyser.analyze());
        }, 50);
      });
    },
    enableSoundOutput: function() {
      app.analyser.setDestination(this.audioCtx.destination);
    }
  };

  global.app = app;
})(window);