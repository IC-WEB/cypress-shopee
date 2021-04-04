import ShopeePage from "../pages/ShopeePage";
import Carousel from '../components/Carousel';

describe('KBank Open Page', () => {
  before(() => {
    cy.visit(Cypress.env('shopee_url'));
    ShopeePage.waitPage();
  });

  it('should be have H1 tag once', () => {
    cy.isOnlyOne('h1', 'บัตรเครดิตกสิกรไทย-ช้อปปี้')
  });

  it('should click popup action on carousel', () => {
    Carousel.clickOpenPopup('.sc-special .cards .card', 'รับโค้ดส่วนลดสูงสุด 1,200 บาท');    
  });

  it('should click outside popup', () => {
    Carousel.clickClosePopup('.mfp-container');
  });

  it('should click previous and next arrow carousel', () => {});

  it('Should font family Kanit', () => {
    ShopeePage.fontFamily('.global-section.sc-benefits .sc-heading');
  });

  
});
