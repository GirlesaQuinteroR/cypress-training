class LoginPage {

    private email: string
    private password: string
    private signInBtn: string

    constructor() {
        this.email = "#email"
        this.password = "#passwd"
        this.signInBtn = "#SubmitLogin"
    }

    public typeUser(user : string): void {
        cy.get(this.email).type(user)
    }
    public typePassword(psw : string): void {
        cy.get(this.password).type(psw)
    }
    public submitLoginCredentials(): void {
        cy.get(this.signInBtn).click()
    }
}
export { LoginPage }
