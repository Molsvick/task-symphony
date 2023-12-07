function compare() {
    const comparator = "Authentication & Authorization";
    cy.fixture('../fixtures/backend/responseApi.json').then((fixture) => {
        var count = 0;
        var array = [];
        // iterate over each element in the array
        for (var i = 0; i < fixture.entries.length; i++) {
            // look for the entry with a matching category
            if (fixture.entries[i].Category == comparator) {
                expect(fixture.entries[i].Category).to.eq("Authentication & Authorization");
                count = count + 1;
                array = array.concat(i);
                
                // if we found, then we count it
            }
        }
        cy.log('We found ',count,' categories with the content : ',comparator);
        cy.log('The elements that have the category Authentication & Authorization are :');
        for (var i = 0; i < array.length; i++) {cy.log(array[i]);};
    })
}
export { compare }