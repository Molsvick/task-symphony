// Function that call the api
function apiCall() {
    cy.request({
        method: 'GET',
        url: 'https://api.publicapis.org/entries'
    }).then(({ status , body }) => {
        expect(status).to.eq(200);
        cy.writeFile(
            'cypress/fixtures/backend/responseApi.json', body
        );
    })
}

export {apiCall}