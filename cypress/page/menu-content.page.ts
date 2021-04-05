class MenuContentPage {
    private menuContentPageURL: string

    constructor() {
        this.menuContentPageURL = "http://automationpractice.com/"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

}
export { MenuContentPage }
