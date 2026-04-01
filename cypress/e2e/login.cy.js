describe('Ingreso en el sistema', () => {

  it('Iniciar sesión con credenciales correctas', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      headers: { 'x-api-key': 'pro_641d62af50df59490a1dfed6d12256be03bac7bb8d88e64e61668caef3f522e3' },
      body: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  it('Iniciar sesión sin el campo contraseña', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      failOnStatusCode: false,
      headers: { 'x-api-key': 'pro_641d62af50df59490a1dfed6d12256be03bac7bb8d88e64e61668caef3f522e3' },
      body: {
        email: "eve.holt@reqres.in"
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq("Missing password");
    });
  });

   it('Iniciar sesión con usuario no existente', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      failOnStatusCode: false,
      headers: { 'x-api-key': 'pro_641d62af50df59490a1dfed6d12256be03bac7bb8d88e64e61668caef3f522e3' },
      body: {
        email: "riberaguli@gmail.com",
        password: "cityslicka"
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq("user not found");
    });
  });


  it('Iniciar sesión sin el campo email', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      failOnStatusCode: false,
      headers: { 'x-api-key': 'pro_641d62af50df59490a1dfed6d12256be03bac7bb8d88e64e61668caef3f522e3' },
      body: {
        password: "cityslicka"
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq("Missing email or username");
    });
  });
});