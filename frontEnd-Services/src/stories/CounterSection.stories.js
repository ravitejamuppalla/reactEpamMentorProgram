import CounterSection from "../components/CounterSection";
import { action } from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Counter",
  component: CounterSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const counterIncrement = {};
