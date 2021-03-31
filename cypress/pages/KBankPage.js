export default class KBankPage {
  static pause(ms) {
    cy.wait(ms)
  }

  static logInfo(msg) {
    cy.log(msg)
  }

  static setMobileView() {
    cy.viewport('iphone-x')
  }

  static setTabletView() {
    cy.viewport('ipad-2')
  }

  static setDesktopView() {
    cy.viewport('macbook-13');
  }

  static setLargeDesktopView() {
    cy.viewport(1980, 1080);
  }
};