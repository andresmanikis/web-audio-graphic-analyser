(function(global) {
  'use strict';

  var analyser = {
    init: function(numberOfBins, audioCtx, source, destination) {
      this.theAnalyser = audioCtx.createAnalyser();
      this.theAnalyser.fftSize = numberOfBins * 2;
      this.theAnalyser.smoothingTimeConstant = 0.2;

      source.connect(this.theAnalyser);
      this.theAnalyser.connect(destination);
    },
    analyze: function() {
      var dataArray = new Uint8Array(this.theAnalyser.frequencyBinCount);
      this.theAnalyser.getByteFrequencyData(dataArray);

      return dataArray;
    }
  };

  global.analyser = analyser;
})(window);