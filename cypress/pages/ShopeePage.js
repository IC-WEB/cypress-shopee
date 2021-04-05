import KBankPage from './KBankPage';

const sizes = [
  'iphone-5',
  'iphone-7',
  'samsung-s10',
  'samsung-note9',
  'iphone-x',
  'ipad-mini',
  'macbook-13',
  'macbook-15',
];
export default class ShopeePage extends KBankPage {
  static waitPage() {
    KBankPage.pause(1000);
  }

  static fontFamily(selector) {
    cy.get(selector).should('be.visible').should('have.css', 'font-family').and('match', /Kanit/);
  }

  static playVideoYoutube(selector, hideSelector) {
    cy.get(selector).click();
    cy.get(hideSelector).should('have.css', 'display', 'none');
  }

  static stepClicking(selector, items) {
    cy.get(selector).should('be.visible');
    cy.get(`${selector} > a`).should('have.length', items);
  }

  static submitCreditCard() {
    // Load from /fixtures/shopee.json
    cy.fixture('shopee').then(data => {
      cy.get('#naMobileNo').type(data.mobile);
      cy.get('#naConfirmMobileNo').type(data.cfMobile);
      cy.get('#naEmail').type(data.email);
      cy.get('#naEmail').tab({ shift: true });
      cy.get('#naCitizenId').type(data.citizenId);
      cy.get('#applyNextButton > a').click();
      cy.wait(500);

      cy.get('[data-for="naCareer"] span.select2').click();
      cy.get('[data-for="naCareer"] .select2-container--open .select2-results__options')
        .contains(data.career)
        .click();
      cy.get('#naSalary').type(data.salary);

      cy.get('[data-for="naProvince"] span.select2').click();
      cy.get('[data-for="naProvince"] .select2-container--open .select2-results__options')
        .contains(data.province)
        .click();

      cy.get('[data-for="naAmphoe"] span.select2').click();
      cy.get('[data-for="naAmphoe"] .select2-container--open .select2-results__options')
        .contains(data.amphoe)
        .click();

      cy.get('[data-for="naCallbackPeriod"] span.select2').click();
      cy.get('[data-for="naCallbackPeriod"] .select2-container--open .select2-results__options')
        .contains(data.callbackPeriod)
        .click();

      cy.contains('ส่งข้อมูล').click();
      cy.wait(1000);
      cy.location('href').should(
        'include',
        'https://www.kasikornbank.com/th/Apply/CreditCard/Pages/CC_Detail_thankyou.aspx?offerd_card=KCC_SHOPEE',
      );

      cy.get('.desc.text-20.c-white').contains('ขอบคุณค่ะ');
      cy.get('#backStepBtn').click();
    });
  }

  static setFaqTabsClick(selector, accordion, items) {
    cy.get(selector).should('be.visible');
    cy.get(accordion).should('have.length', items);
    cy.get(accordion).click({ multiple: true, force: true });
  }
}
