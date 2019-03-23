/* global d3 */

var pt = pt || {};

pt.slideIdToFunctions = {
  'filmflowers-code': {
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
