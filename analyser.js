(function(global) {
  'use strict';

  var analyser = {
    init: function(numberOfBins, audioCtx, source) {
      this.theAnalyser = audioCtx.createAnalyser();
      this.theAnalyser.fftSize = numberOfBins * 2;
      this.theAnalyser.smoothingTimeConstant = 0.2;

      source.connect(this.theAnalyser);
    },
    analyze: function() {
      var dataArray = new Uint8Array(this.theAnalyser.frequencyBinCount);
      this.theAnalyser.getByteFrequencyData(dataArray);

      return dataArray;
    },
    setDestination: function(destination) {
      this.theAnalyser.connect(destination);
    }
  };

  global.analyser = analyser;
})(window);