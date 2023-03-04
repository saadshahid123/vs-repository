///<reference types="cypress"/>
import { login } from "./page_object_model/login_page.cy"
describe("new suite", ()=>

{
it("visit site", ()=>
{
    
cy.visit("https://dev.mawad.com/")
cy.get(".social-login[href='#social-login-popup']").click()
cy.wait(1000)
const lv=new login();
lv.user_name("saad.aalogics@gmail.com")
lv.user_password("Admin!23")
cy.wait(1000)
lv.login_button()  //clicking ogin button
cy.wait(1000)
cy.get("#search").type("EIM-2277437") //search product pn serch bar
cy.get('.actions > .action').click() //clicik on search button 
cy.wait(1000)
cy.get(".product-image-photo[src='https://dev.mawad.com/media/catalog/product/cache/7b71efe032e5419bb4949052b5e842a4/1/u/1u4hxqo_7tqoetczlbbuxugv.jpg']").click() 
cy.wait(1000)
cy.get("#product-addtocart-button > span").click //add to cart product 
cy.get("div[class='custom-mini-cart'] i[class='mbi mbi-bag2']").click()
cy.wait(2000)
cy.visit("https://dev.mawad.com/checkout/cart/")
})
 
})