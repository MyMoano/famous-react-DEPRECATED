'use strict';

var ImageSurface = require('famous/surfaces/ImageSurface');
var createComponent = require('../../createComponent');
var Renderable = require('../core/Renderable');

var ImageMixin = {
  createFamousNode: function() {
    return new ImageSurface();
  },
  formatProps: function(props, origProps) {
    props.content = origProps.src;
    return props;
  },
  setOptions: function(props) {
    this.getFamous().setOptions(props);
  }
};

module.exports = createComponent('Image', Renderable, ImageMixin);
