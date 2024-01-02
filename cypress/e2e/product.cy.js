import Navigation from "../support/pageObject/Navigation";
import ProductInfo from "../support/pageObject/ProductInfo";
import PriceInfo from "../support/pageObject/PriceInfo";
import TabInfo from "../support/pageObject/TabInfo";
import regisData from "../fixtures/regisData.json";
import userData from "../fixtures/userData.json";

// Use the ProductInfo class to get the product link info
const stuff = ProductInfo.getProduct_hoodie();
const price2 = PriceInfo.getPrice2();
const tabdetail = TabInfo.getTabInfoDetail();
const tabInfoAdd = TabInfo.getTabInfoAdd();
const tabReview = TabInfo.getTabReview();
const zoom = ProductInfo.getZoom();
const hero = ProductInfo.getProdInfo();
const detailDesc = ProductInfo.getdetailDesc();
const InfoAddDesc = ProductInfo.getInfoAddDesc();
const ReviewDesc = ProductInfo.getReviewDesc();

describe("Product Test suite", () => {
  beforeEach(() => {
    Navigation.visitHomepage();
    Navigation.visitHoodie();
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    // cy.wait(2000)
  });

  it("Menampilkan nama dan gambar produk tanpa login", () => {
    Navigation.visitHomepage();
    cy.get(stuff).should("contain", "Hero").click();
    //cy.wait(1000);
    cy.get(hero).should("contain", "Hero");
  });

  it("Zoom in/out gambar produk", () => {
    cy.get(zoom).click();
    //cy.wait(1000);
    cy.get(".fotorama__fullscreen-icon").click();
  });

  it("Menampilkan nama, gambar, dan harga produk", () => {
    cy.get(price2).should("contain", "$54.00");
  });

  it("Melihat detail dan informasi produk", () => {
    cy.get(tabdetail).should("be.visible");
    //cy.wait(1000);
    cy.get(tabInfoAdd).click();
    //cy.wait(1000);
    cy.get(tabInfoAdd).should("be.visible");
    //cy.wait(1000);
    cy.get(tabReview).click();
    //cy.wait(1000);
    cy.get(tabReview).should("be.visible");
  });

  it("Mmenambahkan produk ke keranjang", () => {
    cy.get("#option-label-size-143-item-170").click();
    //cy.wait(1000);
    cy.get("#qty").clear();
    cy.get("#qty").type("3");
    //cy.wait(1000);
    cy.get("#option-label-color-93-item-53").click();
    //cy.wait(1000);
    cy.get("#product-addtocart-button").click();
    cy.get(".message-success > div").should("be.visible");
    //cy.wait(500);
  });
});
