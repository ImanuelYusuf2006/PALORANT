const layersFire = document.querySelectorAll('.layer.fire');

layersFire.forEach(layer => {
  layer.style.setProperty('--hue-rotate', Math.random() * 360 + 'deg');
});