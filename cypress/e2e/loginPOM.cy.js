import loginPage from "../support/pageObjects/loginPage";
import loginData from "../fixtures/loginData.json";


describe("OrangeHRM Login Feature", () => {
  // TC_001 - Login dengan username "Admin" (kapital) dan password valid
  it("TC_001 - Login valid dengan username huruf depan kapital", () => {
    
    //Visit website 
    //cy.visit("https://opensource-demo.orangehrmlive.com/");
    loginPage.visitPage()

    //Input username
    //cy.get('input[name="username"]').type("Admin").should("have.value","Admin");
    loginPage.inputUsername()
    
    //Input password
    //cy.get('input[name="password"]').type("admin123");
    loginPage.inputPassword()

    //intercept
    /*cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("Login");*/
    loginPage.interceptLogin()

    //click login
    //cy.get('button[type="submit"]').click();
    loginPage.clickLoginBtn()

    //Memverifikasi intercept
    //cy.wait("@Login");
    loginPage.verifyIntercept()

    //assertion login
    //cy.url().should("include", "/dashboard");
    //cy.contains("Dashboard").should("be.visible");
    loginPage.assertionLogin()
  });

  /* TC_002 - Login dengan username dan password salah
  it("TC_002 - Login invalid dengan username dan password salah", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin1");
    cy.get('input[name="password"]').type("admin1234");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });*/
});
