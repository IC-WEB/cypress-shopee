import ShopeePage from "../pages/ShopeePage";
import Carousel from '../components/Carousel';

describe('KBank Open Page', () => {
  // if you want to display any viewport, you can do and read doc
  // -- https://docs.cypress.io/api/commands/viewport#Examples

  before(() => {
    // cy.viewport('iphone-8');
    cy.visit(Cypress.env('shopee_url'));
    ShopeePage.waitPage();
  });

  it('should be have H1 tag once', () => {
    cy.isOnlyOne('h1', 'บัตรเครดิตกสิกรไทย-ช้อปปี้');
  });

  it('should click popup action on carousel', () => {
    Carousel.clickOpenPopup('.sc-special .cards .card', 'รับโค้ดส่วนลดสูงสุด 1,200 บาท');
  });

  it('should click outside popup', () => {
    Carousel.clickClosePopup('.mfp-container');
  });

  it('Should display item', () => {
    Carousel.showItem('.slick-slider');
  });

  it('Should font family Kanit', () => {
    ShopeePage.fontFamily('.global-section.sc-benefits .sc-heading');
  });

  it('Should click youtube player and hide image cover', () => {
    ShopeePage.playVideoYoutube('.video-title', '#youtube-embed-poster');
  });

  it('Should click tab for registor', () => {
    ShopeePage.stepClicking('.tab-rv', 5);
  });

  it('Should be submit credit card', () => {
    ShopeePage.submitCreditCard();
  });

  it('Should display Faq and click', () => {
    ShopeePage.setFaqTabsClick('#faqs', '#faqs .accordion-group .accordion', 6);;
  });;
});
