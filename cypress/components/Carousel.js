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

  static showItem(selector) {
    cy.get(selector)
      .find('.slick-track')
      .should($div => {
        expect($div).to.have.length(3);
        const className = $div[0].className;
        console.log(expect(className));
        // expect(className).to.match(/slick-ac/);
      });
  }
}
