describe('Amazon - Acceso con cookies y cambio de nombre', () => {

  beforeEach(() => {
      cy.visit('https://www.amazon.com/');

      cy.setCookie('session-id', '142-7289587-1511907');
      cy.setCookie('session-token', 'wq1j8wh8x/FM/B9UVbn45wGA3rvEhGsAWlZKfwOPODiIXfGOwnqxkFA7AYDvV+qyr3sTpK+pAmAZNqKtlbJUEl1OtvYp/qHxISIoVftVvXcPeo/Ujrss4mcwMl1wM3tIwK9BU5p0rylZcO2jZu8ukYeG6J705D2wy0RpBekVChjGP4KhBEg5g9BHYR1Wg98Uw6V4W/oBJx22IlvESzrTGwqCzK1HLUCQqXO8a1j1Q/OoSGHkrjcTW3EzsrbRiObvvKDaV6F2AOw1ssSVdeUJMbrMpX8Ds2ccqVPZiFOct9u8HY1lWVv1Vh0aj0k2/96MvKnyP150PY/UP1Jk2go4Q7v5XMAn+siEELFGANvkReRfVFBqGp+jBNv8uY97XzcY');
      cy.setCookie('ubid-main', '130-1100018-8882323');
      cy.setCookie('x-main', 'CZhZYhvJRPC?zr85SMIY0PGpbbHaTVo92hWUyBcdQQqvsMA9alKJ7ZWz@6daCROV');
      cy.setCookie('at-main', 'Atza|IwEBIA0NL7j8y2NGTZ9tR7ovZTo12SbszdYcOgAbqJh2XqO8snm2bffOHzxPfG-pjY8Rw9vhgXPoqAtucvC_zxPA4iJ42VV1ONsXffyrHPAs_3S1LLJJF6N6IWOE3vR0ImXb4815sAVT7MYRzWpo_vDe33hmq1FkrYWJqTiqsw6tyfRVYE7cxvy0uWBhhRAyrKzlkmGemHZ9G1MMxTllT7Ay_4zbyCt9Qs4wAVpXPMtgF9Yp2viYn_wxgYtOES8bZY3cLDF-mOZPSYsIk7AnHfYqfXRo');
      
      cy.reload();
  });

  it('Debe poder agregar un iphone', () => {
    cy.get('input#twotabsearchtextbox').should('be.visible').clear().type('iphone 16 pro max 512gb');
    cy.get('input#nav-search-submit-button').should('be.visible').click();
    cy.contains('span', 'I16 ProMax Smartphone Nueva actualización de 12 GB+512 GB/6.99 pulgadas Pantalla 68+108MP Zoom Cámara, acabado de vidrio templado, 7000mAh Android 13 Smartphone (azul)').click();


    cy.wait(4000);
    cy.get('input#add-to-cart-button').should('be.visible').click();

   
  });

});
