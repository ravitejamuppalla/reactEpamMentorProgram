import { fireEvent, render, screen } from "@testing-library/react";
import APP_CONSTANTS from "../AppConstants";
import SearchForm from "../components/header/SearchForm";
import userEvent from "@testing-library/user-event";
import GenercMoviesSelect from "../components/movies/GenercMoviesSelect";
import SortControl from "../components/movies/SortControl";

describe("Select the Sorting Validation", () => {
  it("THis Test is covered for sorting functinloity", async () => {
    const onSelect = jest.fn();
    const sortingByHandler = jest.fn();

    render(
      <SortControl
        SortControl={sortingByHandler}
        defaultFilter="Release Date"
      ></SortControl>
    );

    fireEvent.change(getByRole("combobox"), { target: { value: 1 } });
    expect(getByRole("option", { name: /release date/i }).selected).toBeFalsy();
    expect(getByRole("option", { name: /title/i }).selected).toBeTruthy();

    // await userEvent.click(screen.getByRole("button", { name: /documentary/i }));
    // expect(onSelect).toHaveBeenCalled();
    // expect(screen.getByRole("button", { name: /documentary/i })).toHaveClass(
    //   "active"
    // );

    // await userEvent.click(screen.getByRole("button", { name: /Comedy/i }));
    // expect(onSelect).toHaveBeenCalled();
    // expect(screen.getByRole("button", { name: /Comedy/i })).toHaveClass(
    //   "active"
    // );

    // await userEvent.click(screen.getByRole("button", { name: /Horror/i }));
    // expect(onSelect).toHaveBeenCalled();
    // expect(screen.getByRole("button", { name: /Horror/i })).toHaveClass(
    //   "active"
    // );

    // await userEvent.click(screen.getByRole("button", { name: /Crime/i }));
    // expect(onSelect).toHaveBeenCalled();
    // expect(screen.getByRole("button", { name: /Crime/i })).toHaveClass(
    //   "active"
    // );
  });
});
