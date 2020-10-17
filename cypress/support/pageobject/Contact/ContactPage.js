const element = require('./elements').ELEMENTS;

class Contact {
  visit() {
    cy.visit('/index.php?controller=contact');
  }

  subject(type) {
    cy.get(element.subject).select(type);
  }

  email(value) {
    cy.get(element.email).type(value);
  }

  ordeReference(order) {
    cy.get(element.orderReference).type(order);
  }

  fileUpload(file) {
    cy.get(element.attachFile).click(file);
  }

  message(text) {
    cy.get(element.message).type(text);
  }

  button() {
    cy.get(element.button).click();
  }

  messageSuccess(message) {
    cy.get(element.messageSuccess).contains(message);
  }

  messageError(message) {
    cy.get(element.messageError).contains(message);
  }
}

export default Contact;