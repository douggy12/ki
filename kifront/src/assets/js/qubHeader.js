/* 
 * @author Douglas Metthey@SodiFrance
 */


//init
//var global


function initQubHeader(appNom, userName, userId, admin, team, teamId, role, apiKey, qubAdress) {
    var teamData;
    var userData;

    $('body').prepend(loadHtml());

    $.ajax({
        method: "GET",
        datatype: "json",
        url: qubAdress + "/api/team/" + teamId,

        data: {
            apikey: apiKey
        }
    }).done(function (data) {

        teamData = data;

    });
    $.ajax({
        method: "GET",
        dataType: 'json',
        url: qubAdress + "/api/user/" + userId,
        data: {
            apikey: apiKey
        }
    }).done(function (data) {
        userData = data;

    });
    $(document).ajaxStop(function () {
        var user = new qubHeader(appNom, userName, userId, admin, team, teamId, role, apiKey, qubAdress);
        user.setTeamData(teamData);
        user.setUserData(userData);

        user.fillHeader();
    });
    function loadHtml() {
        //Problème de croos domain pour le dev à tester en prod
        //        return load(qubAdress + "/qubheader/qubHeader.html");
        var html = '<div class="skin-blue qubHeader"><span class="logo"><span class="logo-lg" id="infoAppName">AppName</span></span><nav class="navbar navbar-static-top" role="navigation"><a href="#" class="sidebar-toggle" data-toggle="dropdown" role="button"><span class="sr-only">Toggle navigation</span></a><ul class="dropdown-menu"><li class="app-header"><p id="infoTeamName" class="pull-left">NomEquipe</p><div class="pull-right"><a href="#" id="btnChTeam" class=""><i class="fa fa-home"></i> Retour</a></div></li><li class="app-body"><ul id="appList" class="app-list"></ul></li><li class="app-footer"><div class="pull-right"><a href="#" class="btn btn-default btn-flat logOut">Déconnexion </a></div></li></ul><div class="navbar-custom-menu"><ul class="nav navbar-nav"><li class="dropdown user user-menu"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="https://conferencecloud-assets.s3.amazonaws.com/default_avatar.png" class="user-image avatar-content" alt="User Image"><span class="hidden-xs infoUserName"> PrenomNomUser !</span></a><ul class="dropdown-menu"><li class="user-header"><img src="https://conferencecloud-assets.s3.amazonaws.com/default_avatar.png" class="img-circle avatar-content" alt="User Image"><p><span class="infoUserName">NomPrenomUser</span> - <span class="infoUserRole">UserRole</span><small>Créé le <span class="infoCreatedAt">dateCrea</span> par <span class="infoCreatedBy">PrenomNomCrea</span></small></p></li><li class="user-footer"><div class="pull-right"><a href="#" class="btn btn-default btn-flat logOut">Déconnexion</a></div></li></ul></li><li><a href="#" class="logOut"><i class="fa fa-power-off"></i></a></li></ul></div></nav></div>';
        return html;
    }

    function switchApp(appUrl, apiKey, user, userId, admin, team, teamId, role, appNom) {
        var $actionForm = $('<form>', { 'action': appUrl, 'method': 'post' }).append(
            formLine('apiKey', apiKey),
            formLine('user', user),
            formLine('id_user', userId),
            formLine('admin', admin),
            formLine('team', team),
            formLine('id_team', teamId),
            formLine('role', role),
            formLine('appName', appNom)
        );
        $actionForm.appendTo($('body')).submit();
    }
    function formLine(name, value) {
        return $('<input>', { 'name': name, 'value': value, 'type': 'hidden' });
    }


    //source Objet
    function qubHeader(appNom, user, userId, admin, team, teamId, role, apiKey, qubAdress) {
        this.appNom = appNom;
        this.user = user;
        this.userId = userId;
        this.admin = admin;
        this.team = team;
        this.teamId = teamId;
        this.role = role;
        this.apiKey = apiKey;
        this.teamData;
        this.userData;
        this.qubAdress = qubAdress;
    }
    qubHeader.prototype = {
        constructor: qubHeader,
        buildHeader: function () {
        },
        fillHeader: function () {
            var self = this;
            $("#infoAppName").html(this.appNom);
            $(".infoUserName").html(this.user);

            $("#infoTeamName").html(this.team);
            $("#btnChTeam").attr('href', this.qubAdress + "/qub/team_table");
            var userRole;

            if (this.admin) {
                userRole = "Administrateur";
            } else {
                userRole = this.role;
            }
            $(".infoUserRole").html(userRole);
            var createdAt = new Date(this.userData.info.createdAt.date);

            $(".infoCreatedAt").html(createdAt.toLocaleDateString());
            var createdBy = (this.userData.info.createdBy ? this.userData.info.createdBy : "admin");

            $('.infoCreatedBy').html(createdBy);
            if (this.admin || this.role === "pilote") {
                $(".user-footer").append('<div class="pull-left"><a href="#" class="btn btn-default btn-flat toIHNI">IHNI</a></div>');
            }

            $("a.toIHNI").attr('href', this.qubAdress + "/qub/ihni/user/");
            $("a.logOut").attr('href', this.qubAdress + "/logout");



            var modules = this.teamData.info.modules;

            $("#appList").html('');

            for (var key in modules) {
                if (modules[key].nom.toUpperCase() !== this.appNom.toUpperCase()) {
                    var appUrl = self.qubAdress + modules[key].url;

                    var $appButton = $("<li appUrl='" + appUrl + "'><button type='button' class='btn btn-primary btn-flat'>" + modules[key].nom + "</button></li>");

                    $("#appList").append($appButton);



                    $appButton.click(function () {
                        var myUrl = $(this).attr('appUrl');
                        switchApp(myUrl, self.apiKey, self.user, self.userId, self.admin, self.team, self.teamId, self.role, self.appNom);
                    });
                }
            }

        },
        setTeamData: function (data) {
            this.teamData = data;
        },
        setUserData: function (data) {
            this.userData = data;
        }
    };
}
;