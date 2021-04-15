class ShippingCartPage {

    private proceedToCheckout: string
    private termsAndConditions: string

    constructor() {
        this.proceedToCheckout = ".button[name='processCarrier']"
        this.termsAndConditions = "#cgv"
    }

    public processCarrier(): void {
        cy.get(this.proceedToCheckout).click()
    }

    public termsAndConditionsBox(): void {
        cy.get(this.termsAndConditions).click()
    }
}
export { ShippingCartPage }
