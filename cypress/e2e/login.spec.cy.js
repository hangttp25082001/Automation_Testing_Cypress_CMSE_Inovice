describe('Test case 1: Login', () => {
  it('Failed as not fill username', () => {
    cy.visit('http://192.168.100.198:8020/');
    // cy.get('[name="username"]').click().type('');
    cy.get('[name="password"]').click().type('123456');
    cy.get('.btn-login').click()
    cy.get ('.error-message').should('be.text', 'Tài khoản không được để trống');
  })
  it('Failed as not fill password', () => {
    cy.visit('http://192.168.100.198:8020/');
    cy.get('[name="username"]').click().type('0971548787');
    // cy.get('[name="password"]').click().type('');
    cy.get('.btn-login').click()
    cy.get ('.error-message').should('be.text', 'Mật khẩu không được để trống');
  })
  it('Failed as not corect username or password', () => {
    cy.visit('http://192.168.100.198:8020/');
    cy.get('[name="username"]').click().type('0971548787');
    cy.get('[name="password"]').click().type('123');
    cy.get('.btn-login').click()
    cy.get ('.error-message').should('be.text', 'Tài khoản hoặc mật khẩu không đúng');
  })
  it('Failed as not exist account', () => {
    cy.visit('http://192.168.100.198:8020/');
    cy.get('[name="username"]').click().type('0548787');
    cy.get('[name="password"]').click().type('123');
    cy.get('.btn-login').click()
    cy.get ('.error-message').should('be.text', 'Tài khoản không tồn tại');
  })
  it('Sucessfull', () => {
  cy.visit('http://192.168.100.198:8020/');
  cy.clearCookies();
  cy.get('[name="username"]').click().type('0971548787');
  cy.get('[name="password"]').click().type('123456');
  cy.get('.btn-login').click();
  // cy.get('.error-message').should('be.empty');
  cy.url().should('eq', 'http://192.168.100.198:8020/danh-sach-san-pham');
  });


})