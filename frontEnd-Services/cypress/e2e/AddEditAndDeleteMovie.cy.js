describe("Adding , Edit and Delete Functionlity ", () => {
  let addNewMovieTitle = "Automation" + Math.floor(1000 + Math.random() * 9000);

  it("Add New Movie ", () => {
    cy.visit("http://localhost:3000/");

    cy.xpath("//*[contains(@class,'Header_AddMovie')]").click();
    cy.xpath("//input[@id='title']").type("Automation Movie");
    cy.xpath("//*[contains(@class,'Header_AddMovie')]").then(($els) => {
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
