describe("Test the counter button by increment and decrement buttons ", () => {
  it("increment and decrement the counter ", () => {
    cy.visit("http://localhost:3000/");
    let IncrementLocator = cy.xpath("//*[text()='Increment']");
    let decrementLocator = cy.xpath("//*[text()='Decrement']");
    for (let i = 1; i <= 10; i++) {
      IncrementLocator.click();
      cy.get("[id='counterCount']").should("have.text", i);
    }
    for (let i = 10 - 1; i >= 1; i--) {
      decrementLocator.click();
      cy.get("[id='counterCount']").should("have.text", i);
    }
  });
});
