/// <reference types="@applitools/eyes-cypress" />

describe("Visual testing with Applitools", ()=>{

    beforeEach("Open the Eyes", ()=>{
        cy.eyesOpen({
            appName: 'NGX Admin App',
            testName: Cypress.currentTest.title,
        })
    });
    
    it("Making comparisson between two images", ()=>{
        cy.visit("/")
        cy.eyesCheckWindow({
            tag: "Landing page"
        })

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