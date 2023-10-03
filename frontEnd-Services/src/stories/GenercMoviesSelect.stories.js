import GenercMoviesSelect from "../components/movies/GenercMoviesSelect";
import { action } from "@storybook/addon-actions";
import { Outlet } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import {
  reactRouterOutlet,
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
export default {
  title: "Components/GenreSelect",
  component: GenercMoviesSelect,
  decorators: [withRouter],

  tags: ["autodocs"],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: reactRouterOutlet(<Outlet></Outlet>),
    }),
    layout: "centered",
  },

  argTypes: {
    sortByDefault: {
      control: "select",
      options: ["Release Date", "Title"],
    },
  },
};

export const GenercSelectData = {
  args: {
    onSelect: action("Select the Genre Selected Data"),
    SortControlData: action("Sorting Control Callback"),
    sortByDefault: {
      control: { type: "select", options: ["primary", "secondary"] },
    },
  },
};
