try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');
  require('bootstrap');
  require('jquery.easing');
  require('owl.carousel');
  require('counterup/jquery.counterup.min');
  window.Typed = require('typed.js');

} catch (e) {
  console.log('errore durante la compilazione: ' + e);
}

require('./language');
require('./main');
