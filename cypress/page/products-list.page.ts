class ProductsListPage {

    private proceedToCheckout: string


    constructor() {

        this.proceedToCheckout = ".btn[title='Proceed to checkout']"

    }

    public checkoutItemsInTheCar(): void {
        cy.get(this.proceedToCheckout).click()
    }

}
export { ProductsListPage }
