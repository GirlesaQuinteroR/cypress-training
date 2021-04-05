class AdressStep {

    private confirmAdress: string

    constructor() {
        this.confirmAdress = ".cart_navigation > .button > span"
    }

    public confirmAdresses(): void {
        cy.get(this.confirmAdress).click()
    }
}
export { AdressStep }
