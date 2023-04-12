import { SSTConfig } from "sst";
import { MyStack } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "triage-jbrown-nextjsite",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      enableLiveDev: false, // Error: Failed to build function "placeholder"
    });
    app.stack(MyStack);
  },
} satisfies SSTConfig;
