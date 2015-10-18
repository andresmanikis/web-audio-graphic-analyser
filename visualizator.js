(function(global) {
  'use strict';

  var visualizator = {
    init: function(numberOfBins, element) {
      var i;

      this.numberOfBins = numberOfBins;
      element.innerHTML = this.generateHtml(numberOfBins);

      this.bars = [];
      for (i = 1; i <= numberOfBins; i++) {
        this.bars.push(document.querySelector('ul li:nth-child(' + i + ')'));
      }
    },
    generateHtml: function(numberOfBins) {
      var html = '';
      var i;
      html += '<ul>';
      for (i = 0; i < numberOfBins; i++) {
        html += '<li></li>';
      }
      html += '<li class="height-setter"></li>'; // This one pushes the rest to the bottom.
      html += '</ul>';

      return html;
    },
    draw: function(bins) {
      var i, colorString;
      for (i = 0; i < this.numberOfBins; i++) {
        colorString = 'hsl(' + Math.floor(i * 360 / this.numberOfBins) + ', 100%, 50%)';
        this.bars[i].style =
          'height:' + (bins[i] / 256 * 100) + 'px' +
          ';background-color:' + colorString;
      }
    }
  };

  global.visualizator = visualizator;
})(window);