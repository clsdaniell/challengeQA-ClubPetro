const faker = require('faker-br');

export function randomName() {
  const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  return name;
}

export function randomEmail() {
  const email = `delete.test.automated.${name}@test.com`.trim().toLowerCase();
  return email;
}

export function randomCNPJ() {
  const cnpj = faker.br.cnpj();
  return cnpj;
}

export function randomPhone() {
  const ddds = [
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '21',
    '22',
    '24',
    '27',
    '28',
    '31',
    '32',
    '33',
    '34',
    '35',
    '37',
    '38',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '51',
    '53',
    '54',
    '55',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '71',
    '73',
    '74',
    '75',
    '77',
    '79',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99'
  ];
  const ddd = ddds[Math.floor(Math.random() * ddds.length)];
  const number = faker.phone.phoneNumber('9########');
  return `(${ddd}) 9${number.substring(0, 4)}-${number.substring(4)}`;
}
