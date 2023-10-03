import { fireEvent, render, screen } from "@testing-library/react";
import APP_CONSTANTS from "../AppConstants";
import SearchForm from "../components/header/SearchForm";
import userEvent from "@testing-library/user-event";
import GenercMoviesSelect from "../components/movies/GenercMoviesSelect";

describe("Select the Generc Validation", () => {
  it("Test that a click event on Generc and filter according to Generc Values", async () => {
    const onSelect = jest.fn();
    const sortingByHandler = jest.fn();

    render(
      <GenercMoviesSelect
        onSelect={onSelect}
        SortControlData={sortingByHandler}
        sortByDefault="Release Date"
      ></GenercMoviesSelect>
    );

    await userEvent.click(screen.getByRole("button", { name: /documentary/i }));
    expect(onSelect).toHaveBeenCalled();
    expect(screen.getByRole("button", { name: /documentary/i })).toHaveClass(
      "active"
    );

    await userEvent.click(screen.getByRole("button", { name: /Comedy/i }));
    expect(onSelect).toHaveBeenCalled();
    expect(screen.getByRole("button", { name: /Comedy/i })).toHaveClass(
      "active"
    );

    await userEvent.click(screen.getByRole("button", { name: /Horror/i }));
    expect(onSelect).toHaveBeenCalled();
    expect(screen.getByRole("button", { name: /Horror/i })).toHaveClass(
      "active"
    );

    await userEvent.click(screen.getByRole("button", { name: /Crime/i }));
    expect(onSelect).toHaveBeenCalled();
    expect(screen.getByRole("button", { name: /Crime/i })).toHaveClass(
      "active"
    );
  });
});
