
let dictionary = {
  "english": {
    "_hello": "Hello",
    "_italian": "Italian",
    "_english": "English",

  },
  "italian": {
    "_hello": "Ciao",
    "_italian": "Italiano",
    "_english": "Inglese",
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

function switcherFlag(lang){
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
};

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


