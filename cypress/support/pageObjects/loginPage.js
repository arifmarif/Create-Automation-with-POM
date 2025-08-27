class loginPage{
  visitPage(){
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }
  inputUsername(username){
    cy.get('input[name="username"]').type(username);
  }
  inputPassword(password){
    cy.get('input[name="password"]').type(password);
  }
  interceptLogin(){
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("Login");
  }
  clickLoginBtn(){
    cy.get('button[type="submit"]').click();
  }
  verifyIntercept(){
    cy.wait("@Login");
  }
  assertionLogin(){
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  }
}

export default new loginPage()