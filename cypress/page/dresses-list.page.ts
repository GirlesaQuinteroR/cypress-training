class DressesListPage {

    private dressItem: string;
    private dressName: string;
    private dressesTab: string;

    constructor(){
      this.dressItem = ".product-container"
      this.dressName = `${this.dressItem} .product-name`
      this.dressesTab = ".sf-with-ul[title='Dresses']"
    }

    goToDressesMenu(){
      cy.get(this.dressesTab).click({multiple: true, force: true})
    }

    getDressProducts(){
      console.log(cy.get(this.dressItem))
      return cy.get(this.dressItem)
    }

    validateItemsNumber(itemsNumber: number){
      cy.get(this.dressItem).should("have.length", itemsNumber)
    }

    validateItemsNames(names: string[]){
      cy.get(this.dressName).each((item, index) => {
        cy.wrap(item).should("contain.text", names[index])
      })
    }

  }

  export {DressesListPage}
