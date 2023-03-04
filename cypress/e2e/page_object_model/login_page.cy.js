export class login
{
user_name(username)
{
  cy.xpath("//input[@id='email-login']").type(username);  
}
user_password(password)
{
  cy.xpath("//input[@id='pass-popup']").type(password);  
}
login_button()
{
  cy.get("#btn-social-login-authentication").click()
}

}