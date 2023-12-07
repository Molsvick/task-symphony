import DataText from "../fixtures/users/users.json";
const account = DataText.accounts[5];


describe('UI Test', () => {
    beforeEach(() => {
        cy.login(account.user, account.password);
    });

    it(`Check button that sort is A to Z`, () => {
        cy.get('[class="active_option"]').should('have.text', 'Name (A to Z)');
    })

    it(`Check that the items are sort Z to A`, () => {
        cy.get('[data-test="product_sort_container"]').select(1);
        cy.get('[class="active_option"]').should('have.text', 'Name (Z to A)');
    })
})