import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryUserService implements InMemoryDbService {
  createDb() {
    const users =
      [
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
          nbEnfants: 2,
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
            ],
          equipes_old: [
            1,3
          ]
        },
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
          nbEnfants : 1,
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
          ],
          equipes_old: [
            1
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
          nbEnfants : 4,
          jobName: 'Pilote',
          equipes_role: [
            {
              equipe: {
                id: 3,
                name: 'TMA AssurIARD'
              },
              role: 'utilisateur'
            }
          ],
          equipes_old: [
            3
          ]
        }
      ];
    return { users };
  }
}
