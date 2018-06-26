$(function () {
    // //Données dures à remplacer par les données envoyées dans le POST 
    // appNom = "Ki";
    // user = "Nils Langen";
    // userId = 2;
    // admin = true;
    // team = "AT MMA";
    // teamId = 7;
    // role = "pilote";
    // apiKey = "86834038aa3d";
    // qubAdress = "http://azr-cds-lemans-01.sodifrance.fr";
    // kiAdress = "http://azr-cds-lemans-01.sodifrance.fr:8080/kiback/";

    // initQubHeader(appNom, user, userId, admin, team, teamId, role, apiKey, qubAdress, kiAdress);

    $('.multsel').select2();

    //Datemask dd/mm/yyyy
    $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' });

    //open/close control-sidebar on window resize
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

  });
  //Function to the css rule
  function checkSize() {
    if ($(window).width() <= 768) {
      if ($("body").hasClass("control-sidebar-open")) {
        $("body").removeClass("control-sidebar-open");
      }

    } else {
      if (!$("body").hasClass("control-sidebar-open")) {
        $("body").addClass("control-sidebar-open");
      }
    }
  }