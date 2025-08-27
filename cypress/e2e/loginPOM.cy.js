import loginPage from "../support/pageObjects/loginPage";
import loginData from "../fixtures/loginData.json";


describe("OrangeHRM Login Feature", () => {
  // TC_001 - Login dengan username "Admin" (kapital) dan password valid
  it("TC_001 - Login valid dengan username huruf depan kapital", () => {
    
    loginPage.visitPage()
    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.validPassword)
    loginPage.interceptLogin()
    loginPage.clickLoginBtn()
    loginPage.verifyIntercept()
    loginPage.assertionLogin()
  });
});
