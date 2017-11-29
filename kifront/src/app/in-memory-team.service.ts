import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryTeamService implements InMemoryDbService {
  createDb() {
    const teams = [
      {
        id: 1,
        name: 'ATG Lybernet',
        createdAt: {
          date: '2017-06-14 09:02:12.000000',
          timezone_type: 3,
          timezone: 'Europe/Berlin'
        },
        pilote: {
          id: 1,
          nom: 'Langen',
          prenom: 'Nils',
          mail: 'nlangen@ihni.fr',
          admin: true,
          active: true,
          bornDate: {
            'date': '1977-09-30 00:00:00.000000',
            'timezone_type': 3,
            'timezone': 'Europe/Berlin'
          },
          jobName: 'Chef d\'Agence',
          equipes_role:
          [
            {
              equipe: {
                id: 1,
                name: 'ATG Lybernet',
              },
              role: 'pilote'
            },
            {
              equipe: {
                id: 2,
                name: 'CDS P9 Recouvrement',
              },
              role: 'utilisateur'
            }
          ]
        },
        users: [
          {
            id: 2,
            nom: 'Thomas',
            prenom: 'Franck',
            username: 'FThomas',
            mail: 'fthomas@ihni.fr',
            admin: false,
            active: true,
            bornDate: {
              'date': '1972-06-15 00:00:00.000000',
              'timezone_type': 3,
              'timezone': 'Europe/Berlin'
            },
            jobName: 'Pilote',
            equipes_role: [
              {
                equipe: {
                  id: 3,
                  name: 'TMA AssurIARD'
                },
                role: 'pilote'
              },
              {
                equipe: {
                  id: 2,
                  name: 'TMA AssurIARD'
                },
                role: 'pilote'
              }
            ]
          },
          {
            id: 1,
            nom: 'Langen',
            prenom: 'Nils',
            mail: 'nlangen@ihni.fr',
            admin: true,
            active: true,
            bornDate: {
              'date': '1977-09-30 00:00:00.000000',
              'timezone_type': 3,
              'timezone': 'Europe/Berlin'
            },
            jobName: 'Chef d\'Agence',
            equipes_role:
            [
              {
                equipe: {
                  id: 1,
                  name: 'ATG Lybernet',
                },
                role: 'pilote'
              },
              {
                equipe: {
                  id: 2,
                  name: 'CDS P9 Recouvrement',
                },
                role: 'utilisateur'
              }
            ]
          }
        ],
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 2,
        name: 'CDS P9 Recouvrement',
        createdAt: {
          date: '2017-06-15 09:31:46.000000',
          timezone_type: 3,
          timezone: 'Europe/Berlin'
        },
        pilote: {
          id: 2,
          nom: 'Thomas',
          prenom: 'Franck',
          username: 'FThomas',
          mail: 'fthomas@ihni.fr',
          admin: false,
          active: true,
          bornDate: {
            'date': '1972-06-15 00:00:00.000000',
            'timezone_type': 3,
            'timezone': 'Europe/Berlin'
          },
          jobName: 'Pilote',
          equipes_role: [
            {
              equipe: {
                id: 3,
                name: 'TMA AssurIARD'
              },
              role: 'pilote'
            },
            {
              equipe: {
                id: 2,
                name: 'TMA AssurIARD'
              },
              role: 'pilote'
            }
          ]
        },
        users: [
          {
            id: 2,
            nom: 'Thomas',
            prenom: 'Franck',
            username: 'FThomas',
            mail: 'fthomas@ihni.fr',
            admin: false,
            active: true,
            bornDate: {
              'date': '1972-06-15 00:00:00.000000',
              'timezone_type': 3,
              'timezone': 'Europe/Berlin'
            },
            jobName: 'Pilote',
            equipes_role: [
              {
                equipe: {
                  id: 3,
                  name: 'TMA AssurIARD'
                },
                role: 'pilote'
              },
              {
                equipe: {
                  id: 2,
                  name: 'TMA AssurIARD'
                },
                role: 'pilote'
              }
            ]
          }
        ],
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 3,
        name: 'TMA AssurIARD',
        createdAt: {
          date: '2017-06-15 09:32:12.000000',
          timezone_type: 3,
          timezone: 'Europe/Berlin'
        },
        pilote: {
          id: 2,
          nom: 'Thomas',
          prenom: 'Franck',
          username: 'FThomas',
          mail: 'fthomas@ihni.fr',
          admin: false,
          active: true,
          bornDate: {
            'date': '1972-06-15 00:00:00.000000',
            'timezone_type': 3,
            'timezone': 'Europe/Berlin'
          },
          jobName: 'Pilote',
          equipes_role: [
            {
              equipe: {
                id: 3,
                name: 'TMA AssurIARD'
              },
              role: 'pilote'
            },
            {
              equipe: {
                id: 2,
                name: 'TMA AssurIARD'
              },
              role: 'pilote'
            }
          ]
        },
        users: [
          {
            id: 2,
            nom: 'Thomas',
            prenom: 'Franck',
            username: 'FThomas',
            mail: 'fthomas@ihni.fr',
            admin: false,
            active: true,
            bornDate: {
              'date': '1972-06-15 00:00:00.000000',
              'timezone_type': 3,
              'timezone': 'Europe/Berlin'
            },
            jobName: 'Pilote',
            equipes_role: [
              {
                equipe: {
                  id: 3,
                  name: 'TMA AssurIARD'
                },
                role: 'pilote'
              },
              {
                equipe: {
                  id: 2,
                  name: 'TMA AssurIARD'
                },
                role: 'pilote'
              }
            ]
          },
          {
            id: 3,
            nom: 'Anquetil',
            prenom: 'Therese',
            username: 'tanquetil',
            mail: 'tanquetil@ihni.fr',
            admin: false,
            active: true,
            bornDate: {
              'date': '1978-06-18 00:00:00.000000',
              'timezone_type': 3,
              'timezone': 'Europe/Berlin'
            },
            jobName: 'Pilote',
            equipes_role: [
              {
                equipe: {
                  id: 3,
                  name: 'TMA AssurIARD'
                },
                role: 'utilisateur'
              }
            ]
          }
        ],
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ];
    return { teams };
  }
}
