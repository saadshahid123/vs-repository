describe("new suite", ()=>

{
it("visit site", ()=>
{
    
cy.visit("https://dev.mawad.com/")
cy.get(".social-login[href='#social-login-popup']").click()
cy.wait(1000)
cy.xpath("//input[@id='email-login']").type("saad.aalogics@gmail.com")
cy.xpath("//input[@id='pass-popup']").type("Admin!23")
cy.get("button[id='btn-social-login-authentication'] span").click()
cy.wait(1000)
cy.get("#search").type("EIM-2277437")
cy.get('.actions > .action').click()
cy.wait(500)
cy.get("img[alt='دريل مطرقة للحفر في الطوب والحديد والخشب ، 13 مم(1/2 بوصة) ، 710 وات، 0-3200 دورة في الدقيقة، 2.1 كجم ']").click()
cy.wait(500)
cy.get("#product-addtocart-button > span").click
//cy.get('.mfp-bg').click()
})
})