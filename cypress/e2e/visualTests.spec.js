/// <reference types="@applitools/eyes-cypress" />

describe("Visual testing with Applitools", ()=>{

    beforeEach("Open the Eyes", ()=>{
        cy.eyesOpen({
            appName: 'NGX Admin App',
            testName: Cypress.currentTest.title,
        })
    });
    
    it("Controlling the landing page and forms page", ()=>{
        cy.visit("/")
        //I'll take a screenshot of the Landing page so everytime AppliTools run this it detects if there are any changes.
        cy.eyesCheckWindow({
            tag: "Landing page"
        })

        //I'll take a screenshot of the Form Layouts page so everytime AppliTools run this it detects if there are any changes.
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()
        cy.eyesCheckWindow({
            tag: "Form page"
        })
    });

    afterEach("Close the Eyes", ()=>{
        cy.eyesClose()
    })
})