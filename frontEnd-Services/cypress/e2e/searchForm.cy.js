describe("Search form functionlity and check the movie list is getting render with that title or not ", () => {
  it("search filter with avenegrs name and check the filters", () => {
    cy.visit("http://localhost:3000/");
    let inputSearch = cy.xpath(
      "//*[contains(@class,'SearchForm_input_Section')]//input"
    );
    inputSearch.type("Avengers");
    let searchButton = cy.xpath(
      "//*[contains(@class,'SearchForm_input_Section')]//button"
    );
    searchButton.click();
    let movieList = cy.xpath("//*[contains(@class,'MoviesItems_movieTitle')]");

    cy.xpath("//*[contains(@class,'MoviesItems_movieTitle')]").should(
      ($lis) => {
        expect($lis).to.contain("Avengers");
      }
    );
  });
  it("search filter with Different name and check the filters", () => {
    cy.visit("http://localhost:3000/");

    cy.xpath("//*[contains(@class,'SearchForm_input_Section')]//input").type(
      "RaviTeja"
    );

    cy.xpath(
      "//*[contains(@class,'SearchForm_input_Section')]//button"
    ).click();

    cy.xpath("//*[contains(@class,'Movies_errorFailure')]").should(
      "be.visible"
    );
  });
});
