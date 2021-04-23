import { MenuContentPage } from "../page/index"
import { ShoppingCartPage } from "../page/index"
import { ShippingCartPage } from "../page/index"
import { LoginPage } from "../page/index"
import { PaymentStep } from "../page/index"
import { AdressStep } from "../page/index"
import { ProductsListPage } from "../page/index"



describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let shoppingCartPage: ShoppingCartPage;
  let shippingCartStep: ShippingCartPage;
  let loginPage: LoginPage;
  let paymentStep: PaymentStep;
  let adressStep: AdressStep;
  let productsListPage: ProductsListPage;
  let expectedMessage: string;
  let email: string;
  let password: string;

  before(() => {
    menuContentPage = new MenuContentPage()
    shoppingCartPage = new ShoppingCartPage()
    shippingCartStep = new ShippingCartPage()
    loginPage = new LoginPage()
    paymentStep = new PaymentStep()
    adressStep = new AdressStep()
    productsListPage = new ProductsListPage()
    expectedMessage = "Your order on My Store is complete.";
    email = "aperdomobo@gmail.com"
    password = "WorkshopProtractor"
  })

  it("then should be bought a t-shirt", () => {

    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()
    menuContentPage.AddToCart()
    productsListPage.checkoutItemsInTheCar()
    shoppingCartPage.goToPayment()
    loginPage.typeUser(email)
    loginPage.typePassword(password)
    loginPage.submitLoginCredentials()
    adressStep.confirmAdresses()
    shippingCartStep.termsAndConditionsBox()
    shippingCartStep.processCarrier()
    paymentStep.selectPaymentMethod()
    paymentStep.confirmTheOrder()
    paymentStep.validateConfirmationPaymentMessage(expectedMessage)
    paymentStep.signOutFromPaymentStep()


  });
});
