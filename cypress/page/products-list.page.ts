class ProductsListPage {
    private tShirtMenu: string;
    private proceedToCheckout: string

    constructor() {
        /*With this selector suggested is possible to have the number 1 as a variable
        to tests more items in the page*/
        this.tShirtMenu = "[title='Add to cart'][data-id-product='1']";
        this.proceedToCheckout = ".btn[title='Proceed to checkout']"
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click({force: true, multiple: true})
        }

    public checkoutItemsInTheCar(): void {
        cy.get(this.proceedToCheckout).click({force: true})
    }

}
export { ProductsListPage }
