$(function () {
    //Données dures à remplacer par les données envoyées dans le POST 
    appNom = "Silia";
    user = "Nils Langen";
    userId = 2;
    admin = true;
    team = "AT MMA";
    teamId = 7;
    role = "pilote";
    apiKey = "f3a7da7e66b0";
    qubAdress = "http://localhost:8000";
    kiAdress = "http://localhost:8080";

    initQubHeader(appNom, user, userId, admin, team, teamId, role, apiKey, qubAdress, kiAdress);

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