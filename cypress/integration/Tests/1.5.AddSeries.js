describe('Series Button', function()
{

  it('Login and navigate to service page ', () => {
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

  })

  it('Verify series button', ()=>{




    //Press on the view button
    cy.get('body > root > div.layout > div.layout-content > ce-services > div > div > div > div.footer > button').click()

     //Highlight the service in the left column navigation
     cy.contains('#DEM*BC').should('be.visible')
     cy.contains('Demo Service').should('be.visible')

    //Press on the series button
    cy.get('body > root > div.layout > div.layout-content > ce-services > div > div > div > div:nth-child(2) > ce-series-broadcast > div > div.block.is-collapsable > div').click()

  })

  it('Verify form is loaded', () =>{



    //Assert the details on the form
    cy.contains('Name').should('be.visible')
    cy.contains('Description').should('be.visible')
    cy.contains('Send time').should('be.visible')
    cy.contains('Status').should('be.visible')

    //Fill the form

    cy.get('body > root > div.layout > div.layout-content > ce-services > div > div > div > div:nth-child(2) > ce-series-broadcast > div > div.block.is-collapsable > div.body > div > div > input').type('Series Test 6')
    cy.get('body > root > div.layout > div.layout-content > ce-services > div > div > div > div:nth-child(2) > ce-series-broadcast > div > div.block.is-collapsable > div.body > div > div > textarea').type('Series Test Description')
    cy.get('body > root > div.layout > div.layout-content > ce-services > div > div > div > div:nth-child(2) > ce-series-broadcast > div > div.block.is-collapsable > div.body > div > div > div:nth-child(9) > select').type('6')
    cy.get('body > root > div.layout > div.layout-content > ce-services > div > div > div > div:nth-child(2) > ce-series-broadcast > div > div.block.is-collapsable > div.body > div > div > div:nth-child(10) > select').type('15')
    cy.get('body > root > div.layout > div.layout-content > ce-services > div > div > div > div:nth-child(2) > ce-series-broadcast > div > div.block.is-collapsable > div.body > div > div > div:nth-child(14) > select').type('Active')
    cy.get('body > root > div.layout > div.layout-content > ce-services > div > div > div > div:nth-child(2) > ce-series-broadcast > div > div.block.is-collapsable > div.body > div > div > button.button.is-small.is-primary.is-pulled-right').click()
    cy.wait(5000)

    //Assert new series
    cy.contains('Series Test 6').should('be.visible')
    cy.contains('Series Test Description').should('be.visible')
    
    //cy.contains('body > root > div.layout > div.layout-content > ce-services > div > div > div > div:nth-child(2) > ce-series-broadcast > div > div:nth-child(2) > div > div:nth-child(2) > p').should('be.visible','Series Test Description')  


  })



  })
   