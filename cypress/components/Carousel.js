export default class Carousel {
  static clickOpenPopup(selector, text) {
    cy.get(selector)
      .filter(':contains("' + text + '")')
      .should('be.visible');

    cy.get(selector)
      .filter(':contains("' + text + '")')
      .find('.action a')
      .click({ multiple: true, force: true });
  }

  static clickClosePopup(selector) {
    cy.get(selector).click('topRight', { force: true });
  }

  static showItem() {
    cy.get(selector).should('be.visible').should('have.class', 'slick-active');
  }
}
