describe('Registro en el sistema', () => {
  it('Crear un nuevo usuario', () => {
    const user = 'user' + Math.floor(Math.random() * 1000000);
    const password = 'pass' + Math.floor(Math.random() * 1000000);
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/signup',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: user,
        password: password
      }

    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

   it('Crear un usuario ya existente', () => {

    cy.fixture('validUser').then((users) => {

      users.forEach((user) => {
        cy.request({
          method: 'POST',
          url: 'https://api.demoblaze.com/signup',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            username: user.username,
            password: user.password
          }
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('errorMessage', 'This user already exist.');
        });
      });
    });
  });
});
