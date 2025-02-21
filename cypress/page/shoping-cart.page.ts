class ShoppingCartPage {

    private proceedToCheckout: string

    constructor() {
        this.proceedToCheckout = ".btn[title='Proceed to checkout']"
    }

    public goToPayment(): void {
        cy.get(this.proceedToCheckout).click({multiple: true, force: true})
    }
}
export { ShoppingCartPage }
