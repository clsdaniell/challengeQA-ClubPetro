const util = require('../support/util');

describe('Basic User interactions', () => {
  beforeEach(() => {
    cy.visit('https://www.clubpetro.com');
  });

  it('Click navBar', () => {
    cy.get('#w-dropdown-toggle-0 > :nth-child(2)').click();

    cy.get('#w-dropdown-list-0 > [href="/sobre"]').should('be.visible');
    cy.get('#w-dropdown-list-0 > [href="/jobs"]').should('be.visible');
  });

  it(`Redirect -> 'Quem Somos'`, () => {
    cy.get('#w-dropdown-toggle-0 > :nth-child(2)').click();

    cy.get('#w-dropdown-list-0 > [href="/sobre"]').click();

    cy.url().should('be.equal', 'https://www.clubpetro.com/sobre');
  });

  it('Dealer text', () => {
    cy.visit('https://www.clubpetro.com/sobre');

    cy.contains('Feito de revendedor para revendedor').should('be.visible');
  });

  it('CEO image', () => {
    cy.visit('https://www.clubpetro.com/sobre');

    cy.get('.image-28').should('exist');
  });

  it(`Video -> 'O que é o ClubPetro?'`, () => {
    cy.visit('https://www.clubpetro.com/sobre');

    cy.get('.embedly-embed').scrollIntoView().should('exist');
  });

  it('Copyright text', () => {
    cy.visit('https://www.clubpetro.com/sobre');

    cy.get('.button-2').scrollIntoView();

    cy.contains(
      '© 2022 ClubPetro. Todos os direitos reservados. Política de Pivacidade'
    ).should('be.visible');
  });

  it('Redirection to Contacts Page', () => {
    cy.get(
      '.navbar-scroll > .container-54 > .nav-menu-2 > [href="https://postos.clubpetro.com/"][style="max-width: 940px;"]'
    )
      .invoke('removeAttr', 'target')
      .click({ force: true });

    cy.url().should('be.equal', 'https://postos.clubpetro.com/');
  });

  it('Fill out fields and submit form', () => {
    const name = util.randomName();
    const cnpj = util.randomCNPJ();
    const email = util.randomEmail();
    const phone = util.randomPhone();

    cy.visit('https://postos.clubpetro.com');

    cy.get('#cnpj').type(cnpj);
    cy.get('#nome_completo').type(name);
    cy.get('#email').type(email);
    cy.get('#telefone_com_ddd').type(phone);
    cy.get('#qual_a_sua_relação_com_postos').select('Dono(a) ou Diretor(a)');
    cy.get('#lp-pom-button-214').click();
    cy.get('.iframeWrapper__yCVOH2 > iframe').should('be.visible');
  });
});
