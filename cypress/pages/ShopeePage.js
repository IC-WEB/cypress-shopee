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
}
