import { MenuContentPage } from "../page/index.js"
import { ShoppingCartPage } from "../page/index.js"
import { ShippingCartPage } from "../page/index.js"
import { LoginPage } from "../page/index.js"
import { PaymentStep } from "../page/index.js"
import { AdressStep } from "../page/index.js"
import { ProductsListPage } from "../page/index.js"

const menuContentPage = new MenuContentPage()
const shoppingCartPage = new ShoppingCartPage()
const shippingCartStep = new ShippingCartPage()
const loginPage = new LoginPage()
const paymentStep = new PaymentStep()
const adressStep = new AdressStep()
const productsListPage = new ProductsListPage()

describe("Buy a t-shirt", () => {

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage()
    productsListPage.goToTShirtMenu()
    productsListPage.checkoutItemsInTheCar()
    shoppingCartPage.goToPayment()
    loginPage.typeUser()
    loginPage.typePassword()
    loginPage.submitLoginCredentials()
    adressStep.confirmAdresses()
    shippingCartStep.termsAndConditionsBox()
    shippingCartStep.processCarrier()
    paymentStep.selectPaymentMethod()
    paymentStep.confirmTheOrder()
    paymentStep.confirmationPaymentMessage()
    paymentStep.signOutFromPaymentStep()
    
    
  });
});
