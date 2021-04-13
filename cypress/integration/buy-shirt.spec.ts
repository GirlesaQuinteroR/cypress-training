import { MenuContentPage } from "../page/index"
import { ShoppingCartPage } from "../page/index"
import { ShippingCartPage } from "../page/index"
import { LoginPage } from "../page/index"
import { PaymentStep } from "../page/index"
import { AdressStep } from "../page/index"
import { ProductsListPage } from "../page/index"

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
