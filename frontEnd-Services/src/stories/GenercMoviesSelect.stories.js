import GenercMoviesSelect from "../components/movies/GenercMoviesSelect";
import { action } from "@storybook/addon-actions";
import { Outlet } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

import storeDetails from "../store/index";
// import {
//   reactRouterOutlet,
//   reactRouterParameters,
//   withRouter,
// } from "storybook-addon-react-router-v6";
import { Provider } from "react-redux";
export default {
  title: "Components/GenreSelect",
  decorators: [(story) => <Provider store={storeDetails}>{story()}</Provider>],
  // decorators: [
  //   withRouter,
  //   (story) => <Provider store={storeDetails}>{story()}</Provider>,
  // ],
  component: GenercMoviesSelect,

  tags: ["autodocs"],
  parameters: {
    // reactRouter: reactRouterParameters({
    //   routing: reactRouterOutlet(<Outlet></Outlet>),
    // }),
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
