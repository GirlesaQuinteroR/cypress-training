class LoginPage {

    private email: string
    private password: string
    private signInBtn: string

    constructor() {
        this.email = "#email"
        this.password = "#passwd"
        this.signInBtn = "#SubmitLogin"
    }

    public typeUser(): void {
        cy.get(this.email).type("aperdomobo@gmail.com")
    }
    public typePassword(): void {
        cy.get(this.password).type("WorkshopProtractor")
    }
    public submitLoginCredentials(): void {
        cy.get(this.signInBtn).click()
    }
}
export { LoginPage }