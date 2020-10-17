import ContactPage from '../support/pageobject/Contact/ContactPage';

describe('Contact', () => {
  const contactPage = new ContactPage();

  beforeEach(() => {
    contactPage.visit();
  });

  it('Fill anyone input', () => {
    contactPage.button();
    contactPage.messageError('Invalid email address.');
  });

  it('Fill with invalid email', () => {
    contactPage.subject("1");
    contactPage.email("email.email.com");
    contactPage.ordeReference("23445344");
    contactPage.button();
    contactPage.messageError("Invalid email address");
  });

  it('Fill with valid email', () => {
    contactPage.subject("1");
    contactPage.email("email@email.com");
    contactPage.ordeReference("23445344");
    contactPage.message("Lorem ipsum");
    contactPage.button();
    contactPage.messageSuccess("Your message has been successfully sent to our team.");
  });
});