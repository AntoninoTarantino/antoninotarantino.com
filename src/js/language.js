
let dictionary = {
  "english": {
    "_hello": "Hello",
    "_italian": "Italian",
    "_english": "English",
    "_typedHome": "Infrastructure, Automations, Operations",
    "_name": "Name: ",
    "_profile": "Profile: ",
    "_about0": "About me",
    "_about1": "Technology enthusiast across all its aspects. <br />System operations and automations. Design, support and maintenance of software and infrastructures. <br />",
    "_about2": "AWS advanced user, expert Linux user (Debian and Slackware).<br />Open Source contributor.<br />Disaster prevention and incident supervisor.<br />",
    "_about3": "Italian and English speaker.<br />Comfortable in small and big multi-cultural teams.",
    "_services": "Services",
    "_sysops": "System Operations",
    "_infra": "Infrastructure",
    "_monitoring": "Monitoring",
    "_service1": "Automatic CI\CD pipelines builder. Tests automator. Constant software and infrastructure maintainer. Networking troubleshooter.",
    "_service2": "Scalable, resilient legacy infrastructures. Serverless and containerazed solutions.",
    "_service3": "Application and infrastructure monitoring. Automatic registration of new, scaled targets. Disasters recognition and triggers to start mitigating the damage. Integration with alerting systems.",
    "_member0": "SysAdmin with an eye on the past and another on the future. Command line lover and automation promoter.",
    "_member1": "Developer, devOps, AWS architect, musician and gardener. He can also fix your washing machine. A true liquid.",
    "_member2": "UX, marketing and relationships responsible. Visionary and rhetoric. Ask him anything about colossal movies.",
 },
  "italian": {
    "_hello": "Ciao",
    "_italian": "Italiano",
    "_english": "Inglese",
    "_typedHome": "Infrastrutture, Automazioni, Operazioni",
    "_name": "Nome: ",
    "_profile": "Profilo: ",
    "_about0": "Su di me: ",
    "_about1": "Nel mondo dell'informazione, in tutti i suoi aspetti.<br />Informatico insediato in operazioni di sistema, design, supporto e manutenzione di software e infrastrutture.<br />",
    "_about2": "Utente avanzato AWS, utente Linux esperto (Debian e Slackware).<br />Contribuente nel mondo open source, utente di tutti i suoi frutti.<br />Consulente nella prevenzione di disastri e incidenti informatici.<br />Supervisore dell'investigazione quando si inciampa nella sfortuna.<br />",
    "_about3": "English speaker.<br />Comodo in piccoli e grandi team, internazionali e multi-culturali.",
    "_services": "Servizi",
    "_sysops": "Operazioni di Sistema",
    "_infra": "Infrastrutture",
    "_monitoring": "Monitoraggio",
    "_service1": "Creazione di infrastrutture IaaC. Installazioni automatizzate CI/CD. Aggiornamenti di sicurezza con automazione.",
    "_service2": "Infrastrutture economiche scalabili, resilienti e sempre disponibili anche attraverso soluzioni serverless e containerizzate dove possibile.",
    "_service3": "Monitoraggio intelligente dell'applicazione e dell'infrastruttura. Registrazione automatica dei nuovi target. Riconoscimento di disastri e notifiche/chiamate.<br />Integrazione con Slack, OpsGenie, PagerDuty.",
    "_member0": "SysAdmin, con un occhio verso la storia e l'altro verso il futuro ed una voglia di matta di automatizzare tutto.",
    "_member1": "Sviluppatore, devOps, architetto AWS, musicista e giardiniere. Saprebbe anche aggiustarvi la lavatrice. Un vero e proprio liquido.",
    "_member2": "Curatore grafico, del marketing e delle relazioni. Visionario e retorico, saprebbe raccontarvi qualsiasi retroscena di film colossal.",
  }
};

let set_lang = function set_lang (dictionary) {
  $("[data-translate]").html(function () {
    let key = $(this).data("translate");
    if (dictionary.hasOwnProperty(key)) {
      return dictionary[key];
    }
  });
};


let typed = null;

function textTyped() {
  if ($('.text-slider').length == 1) {
    let typed_strings = $('.text-slider-items').html();
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


