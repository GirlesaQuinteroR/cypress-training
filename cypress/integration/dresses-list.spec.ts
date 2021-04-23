import { MenuContentPage, DressesListPage } from "../page/index"


describe("the user navigates to the dresses page should verify that is possible to see the dresses and their names", () => {

  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  })

  it("show the available dresses", () => {

    //Arrange
    const dressesArray = ["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress" ];
    menuContentPage.visitMenuContentPage()

    //Act
    dressesListPage.goToDressesMenu()


    //Assert
    dressesListPage.validateItemsNumber(5)
    dressesListPage.validateItemsNames(dressesArray)

  })
})
