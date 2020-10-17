describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('search with empty field', () => {
    cy.get('#searchbox > .btn').click();
    cy.get('.alert-warning').contains('Please enter a search keyword');  
  });

  it('search with special characteres', () => {
    const querySearch = '!@#@$#!$#$';
    cy.get('#search_query_top').type(querySearch);
    cy.get('#searchbox > .btn').click();
    cy.get('.alert-warning').contains(`No results were found for your search`);  
  });

  it('search a specific item', () => {
    cy.get('#search_query_top').type('Blouse');
    cy.get('#searchbox > .btn').click();  
    cy.get('.right-block > h5 > .product-name').contains('Blouse');  
  });
});