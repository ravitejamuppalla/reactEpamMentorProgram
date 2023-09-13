import { fireEvent, render, screen } from "@testing-library/react";
import APP_CONSTANTS from "../AppConstants";
import SearchForm from "../components/header/SearchForm";
import userEvent from "@testing-library/user-event";

describe("Counter Test Validation", () => {
  it("Test that a click event on decrement button decrements the displayed value", async () => {
    const searchInPutHandler = jest.fn();

    render(
      <SearchForm
        defaultSearch="Avengers"
        searchTextData={searchInPutHandler}
      ></SearchForm>
    );
    let searchButtonTextBox = screen.getByPlaceholderText(
      /what do you want to watch\?/i
    );
    userEvent.type(searchButtonTextBox, "Avengers");
    expect(searchButtonTextBox).toBeTruthy();
    expect(searchButtonTextBox.value).toBe("Avengers");
    await userEvent.click(
      screen.getByRole("button", {
        name: /search/i,
      })
    );
    expect(searchInPutHandler).toHaveBeenCalled();
    userEvent.type(searchButtonTextBox, "Avengers{enter}");
    expect(searchButtonTextBox.value).toBe("Avengers");
    expect(searchInPutHandler).toHaveBeenCalled();
  });
});
