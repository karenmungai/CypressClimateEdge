describe('Login', function()
{

  it('Login with valid username and password', () => {
        //uncaught exception on the system   
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false

})

//To open two url in the same test
Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
});
  

   //Access the login page and sign up
    cy.visit('http://test.climate-edge.com')

    
   //Assert text on the login page
   cy.contains('Sign In').should('be.visible')
   cy.contains('forgot password?').should('be.visible')

  //Fill in the form with new username and password
    cy.get('body > root > div.layout > div > ng-component > div > div > ce-login-widget > div > div > form > div:nth-child(1) > p > input').type('test@climate-edge.co.uk') //signup with a valid email address
    cy.get('body > root > div.layout > div > ng-component > div > div > ce-login-widget > div > div > form > div:nth-child(2) > p > input').type('Kickoff@2021')  //sign up password
    cy.get('body > root > div.layout > div > ng-component > div > div > ce-login-widget > div > div > form > div.field.is-pulled-right.mg-small > p > input').click() //Press for login
    cy.wait(5000)

    //Verify "Your Services" is on the page
    cy.contains('Your Services').should('be.visible')

    //Logout
    cy.get('body > root > div.layout > div.layout-content > ce-menus-user > div > div > i').click()
    cy.contains('Log out').should('be.visible')
    cy.wait(5000)
    cy.forceVisit("/#/logout")



    //Assert now on the login page
    cy.contains('Sign In').should('be.visible')
    cy.contains('forgot password?').should('be.visible')
  
    //cy.get('body > root > div.layout > div.layout-content > ce-crumbs > div > span > span')
    //cy.contains('Your Services').should('be.visible')
    //cy.contains('Demo').should('be.visible')
    
  })



  })
   