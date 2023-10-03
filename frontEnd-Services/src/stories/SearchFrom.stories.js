import SearchForm from "../components/header/SearchForm";
import { action } from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/SearchForm",
  component: SearchForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const SmallInputText = {
  args: {
    defaultSearch: "Small Text",
    searchTextData: action("Getting the callback Data from Input"),
  },
};

export const LargeInputText = {
  args: {
    defaultSearch: "Small Text erliernlirfnfelijrnelirejn",
    searchTextData: action("Getting the callback Data from Input"),
  },
};
export const NothingInputText = {
  args: {
    defaultSearch: "",
    searchTextData: action("Getting the callback Data from Input"),
  },
};
