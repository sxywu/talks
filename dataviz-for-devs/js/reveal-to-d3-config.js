/* global d3 */

var pt = pt || {};

pt.slideIdToFunctions = {
  'about-us': {
    'init': function() {
      pt.aboutUs.init();
    },
    4: () => {
      d3.select('#about-us .writeup img').style('opacity', 1);
    },
    5: () => {
      d3.select('#about-us .writeup img').style('opacity', 0.5);
    }
  },
  'code-flowers-svg': {
    init: () => {
      pt.codeFlowers.init();
    },
    '-1': () => {
      pt.codeFlowers.timeline.tweenTo('one');
    },
    0: () => {
      pt.codeFlowers.timeline.tweenTo('one+=' + pt.codeFlowers.duration);
    },
    1: () => {
      pt.codeFlowers.timeline.tweenTo('two+=' + pt.codeFlowers.duration);
    },
    2: () => {
      pt.codeFlowers.timeline.tweenTo('three+=' + pt.codeFlowers.duration);
    },
    3: () => {
      pt.codeFlowers.timeline.tweenTo('five');
    },
    4: () => {
      pt.codeFlowers.timeline.tweenTo('five+=' + (pt.codeFlowers.duration / 2));
    }
  },
};

function removeSVGs() {

}//removeSVGs
