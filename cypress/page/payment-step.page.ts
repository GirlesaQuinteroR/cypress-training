class PaymentStep {

    private paymentMethod: string
    private confirmOrder: string
    private signOutAfterPayment: string
    private confirmationMessage: string

    constructor() {
        this.paymentMethod = ".bankwire"
        this.confirmOrder = ".button[type='submit']"
        this.signOutAfterPayment = ".logout[title='Log me out']"
        this.confirmationMessage = ".cheque-indent"

    }

    public selectPaymentMethod(): void {
        cy.get(this.paymentMethod).click()
    }

    public confirmTheOrder(): void {
        cy.get(this.confirmOrder).contains("I confirm my order").click()
    }

    public validateConfirmationPaymentMessage(msg: string): void {
        cy.get(this.confirmationMessage).contains(msg)
    }

    public signOutFromPaymentStep(): void {
        cy.get(this.signOutAfterPayment).click()
    }

}
export { PaymentStep }
