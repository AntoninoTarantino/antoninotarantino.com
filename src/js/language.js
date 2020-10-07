
let dictionary = {
  "english": {
    "_hello": "Hello",
    "_italian": "Italian",
    "_english": "English",
    "_typedHome": "Antonino Tarantino, Information, Analisys, Infrastructure",

  },
  "italian": {
    "_hello": "Ciao",
    "_italian": "Italiano",
    "_english": "Inglese",
    "_typedHome": "Antonino Tarantino, Informazione, Analisi, Infrastrutture",
  }
};

let set_lang = function set_lang (dictionary) {
  $("[data-translate]").text(function () {
    let key = $(this).data("translate");
    if (dictionary.hasOwnProperty(key)) {
      return dictionary[key];
    }
  });
};


let typed = null;

function textTyped() {
  if ($('.text-slider').length == 1) {
    let typed_strings = $('.text-slider-items').text();
    typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }
}

function switcherFlag(lang){
  if(typed) typed.destroy();
  textTyped();
  let switcher = $('#switchLanguage');
  switch(lang) {
    case 'italian':
      switcher.html('<span class="flag-icon flag-icon-it">');
      break;
    case 'english':
      switcher.html('<span class="flag-icon flag-icon-gb">');
      break;
    default:
      switcher.html('<span class="flag-icon flag-icon-gb">');
  }
}


$(function() {
  "use strict";
  set_lang(dictionary.english);
  switcherFlag('english');

});

$(document).on('click', '.changeLang', function(){
  let language = $(this).data('change-lang');
  if (dictionary.hasOwnProperty(language)) {
    set_lang(dictionary[language]);
  }
  switcherFlag(language);
});


