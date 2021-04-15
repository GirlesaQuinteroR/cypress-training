class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string
    private AddToCartButton: string

    constructor() {
        this.tShirtMenu = '#block_top_menu > ul > li:nth-child(3) > a';
        this.menuContentPageURL = 'http://automationpractice.com/'
        this.AddToCartButton = "[title='Add to cart'][data-id-product='1']";
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }

    public AddToCart(): void {
        cy.get(this.AddToCartButton).click()
    }

}
export { MenuContentPage }
