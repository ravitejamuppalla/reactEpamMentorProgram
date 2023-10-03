describe("Sorting  filter functionlity ", () => {
  it("Sort by Default Release Date Filter ", () => {
    cy.visit("http://localhost:3000/");

    cy.xpath("//*[contains(@class,'MoviesItems_movieYear')]").then(($els) => {
      const unsortedItems = Array.from($els, (el) => el.innerText);
      const sortedItems = unsortedItems.slice().sort();
      expect(unsortedItems, "Items are sorted").to.deep.equal(sortedItems);
    });
  });
  it("Sort by  Title Filter ", () => {
    cy.visit("http://localhost:3000/");

    cy.xpath("//select").select("Title");

    cy.xpath("//*[contains(@class,'MoviesItems_movieTitle')]").then(($els) => {
      const unsortedItems = Array.from($els, (el) => el.innerText);
      const sortedItems = unsortedItems.slice().sort();
      expect(unsortedItems, "Items are sorted").to.deep.equal(sortedItems);
    });
  });
});
