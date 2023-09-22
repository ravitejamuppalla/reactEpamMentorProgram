describe("GenreSelect filter functionlity ", () => {
  it("Documentary Filter ", () => {
    cy.visit("http://localhost:3000/");

    cy.xpath(
      "//*[contains(@class,'Movies_genersSelect')]//*[contains(.,'Documentary')]"
    ).click();

    cy.xpath("//*[contains(@class,'MoviesItems_movieGenercDetails')]").should(
      ($lis) => {
        expect($lis).to.contain("Documentary");
      }
    );
  });
  it("Comedy Filter ", () => {
    cy.visit("http://localhost:3000/");

    cy.xpath(
      "//*[contains(@class,'Movies_genersSelect')]//*[contains(.,'Comedy')]"
    ).click();

    cy.xpath("//*[contains(@class,'MoviesItems_movieGenercDetails')]").should(
      ($lis) => {
        expect($lis).to.contain("Comedy");
      }
    );
  });
  it("Horror Filter ", () => {
    cy.visit("http://localhost:3000/");

    cy.xpath(
      "//*[contains(@class,'Movies_genersSelect')]//*[contains(.,'Horror')]"
    ).click();

    cy.xpath("//*[contains(@class,'MoviesItems_movieGenercDetails')]").should(
      ($lis) => {
        expect($lis).to.contain("Horror");
      }
    );
  });
});
