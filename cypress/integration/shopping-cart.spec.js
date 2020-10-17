describe('Shopping cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check shopping cart is empty', () => {
    cy.get('.ajax_cart_no_product').contains('(empty)');
  });

  it.only('Add one item in the cart', () => {
    cy.get('.ajax_cart_no_product').contains('(empty)');
  });
});