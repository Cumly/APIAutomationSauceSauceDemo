describe('Ingreso en el sistema', () => {

   it('Iniciar sesión con credenciales correctas', () => {

    cy.fixture('validUser').then((users) => {

      users.forEach((user) => {
        cy.request({
          method: 'POST',
          url: 'https://api.demoblaze.com/login',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            username: user.username,
            password: user.password
          }
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.include('Auth_token');
        });
      });
    });
  });
  
  it('Iniciar sesión con credenciales incorrectas', () => {

    cy.fixture('invalidUser').then((users) => {

      users.forEach((user) => {
        cy.request({
          method: 'POST',
          url: 'https://api.demoblaze.com/login',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            username: user.username,
            password: user.password
          }
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('errorMessage');
          expect([
                    'Wrong password.',
                    'User does not exist.'
                ]).to.include(response.body.errorMessage);
        });
      });
    });
  });
});
