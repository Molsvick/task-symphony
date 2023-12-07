export class Utility {
    getBaseUrl () {
        let env = Cypress.env('ENV');
        if (env = 'Testing')
        return ('https://www.saucedemo.com/')
    }
}