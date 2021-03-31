import ShopeePage from "../pages/ShopeePage";

describe('KBank Open Page', () => {
  before(() => {
    cy.visit(Cypress.env('shopee_url'));
    ShopeePage.waitPage();
  });

  it('should be have H1 tag once', () => {
    cy.isOnlyOne('h1', 'บัตรเครดิตกสิกรไทย-ช้อปปี้')
  });

  it('should click popup action on carousel', () => {
    cy.get('.sc-special .cards .card')
      .filter(':contains("รับโค้ดส่วนลดสูงสุด 1,200 บาท")')
      .should('be.visible');
    // cy.get('.sc-special .cards .card .caption .action a').click({ multiple: true, force: true });
    cy.get('.sc-special .cards .card')
      .filter(':contains("รับโค้ดส่วนลดสูงสุด 1,200 บาท")')
      .find('.action a')
      .click({ multiple: true, force: true });
  });

  it('should click outside popup', () => {
    cy.get('.kcc.popup-revise-02 .mfp-content .mfp-close').click({ force: true });
  });

  
});
