// I slightly changed the structure of the data for a few reasons

// The server would never give us fields like `Knows the Joker ?`, it's very unusual.
// And even if it did, we'd probably never use them as titles because of i18n.

// This structure looks much cleaner and simpler

export const _dataSource = [
  {
    id: '34',
    name: 'Joqmo',
    gender: 'female',
    risk: 'BITES',
    hairLength: '6.2000000000',
    iq: '98',
    admissionDate: 'Mon Dec 13 00:00:00 CET 1993',
    lastBreakdown: 'Wed Dec 24 07:14:50 CET 2014',
    yearlyFee: '67035',
    knowsTheJoker: 'true',
    relatives: [
      {
        id: '35',
        relativeId: '1007',
        patientId: '34',
        isAlive: 'true',
        frequencyOfVisits: '29',
        phones: [
          {
            id: '36',
            phoneId: '2008',
            idOfTheRelative: '1007',
            phone: '+(179)-982-0570',
          },
        ],
      },
    ],
  },
  {
    id: '37',
    name: 'Jason',
    gender: 'm',
    risk: 'BITES',
    hairLength: '1.6000000000',
    iq: '91',
    admissionDate: 'Mon Feb 17 00:00:00 CET 1997',
    lastBreakDown: 'Wed Dec 03 03:09:55 CET 2014',
    yearlyFee: '67932',
    knowsTheJocker: 'false',
  },

  {
    id: '38',
    name: 'Julliane',
    gender: 'm',
    risk: 'EVIL_EYE',
    hairLength: '1.0000000000',
    iq: '100',
    admissionDate: 'Wed Aug 05 00:00:00 CEST 1992',
    lastBreakdown: 'Wed Oct 29 12:59:39 CET 2014',
    yearlyFee: '57167',
    knowsTheJoker: 'true',
    relatives: [
      {
        id: '39',
        relativeId: '1043',
        patientId: '38',
        isAlive: 'false',
        frequencyOfVisits: '24',
        phones: [
          {
            id: '40',
            phoneId: '479',
            idOfTheRelative: '1043',
            phone: '+(123)-408--5901',
          },
          {
            id: '41',
            phoneId: '2470',
            idOfTheRelative: '1043',
            phone: '546 765-7237',
          },
        ],
      },
    ],
  },
];
