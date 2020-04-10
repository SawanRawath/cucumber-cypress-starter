

Given('I am on the cucumber website', () => {
    cy.visit('https://cucumber.io/');
});

When('I goto Learn BDD', () => {
    cy.get('.nav-main-toggle').click();
    cy.get(':nth-child(3) > .nav-link').click();
});

Then('I can read about {string}', (keyword) => {
    cy.get('.bg-image-cover > .container > .row > .col-12 > .h5').should('include.text', keyword)
});