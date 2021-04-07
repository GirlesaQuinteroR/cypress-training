describe("Buy a t-shirt", () => {

    it("then the t-shirt should be bought", () => {
      cy.visit("http://automationpractice.com/")
      cy.get("#block_top_menu > ul > li:nth-child(3) > a").click()
      cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click()
      cy.get("[style*='display: block;'] .button-container > a").click()
      cy.get(".cart_navigation span").click()

      cy.get("#email").type("aperdomobo@gmail.com")
      cy.get("#passwd").type("WorkshopProtractor")
      cy.get("#SubmitLogin").click()
      cy.get(".cart_navigation > .button > span").click()
      cy.get("#cgv").click()
      cy.get(".button[name='processCarrier']").click()
      cy.get(".bankwire").click()
      cy.get(".button[type='submit']").contains("I confirm my order").click()
      cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete.")

      //Logout to won't have problems in the future repeating the test
      cy.get(".logout[title='Log me out']").click()

    });
  });
