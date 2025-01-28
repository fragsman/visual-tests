/// <reference types="cypress" />

describe("Dummy suite",()=>{

    //I had to create this to make Applitools work. If I have only 1 test the cy.visit() will refuse to work for some reason.
    //I added the browser filter to get the test ignored.
    it("Dummy test", ()=>{
        cy.visit("/")
        cy.contains("Forms").click()
        cy.contains("Form Layouts").click()
    })
})