import { StackContext, Api, NextjsSite } from "sst/constructs";

export function MyStack({ stack }: StackContext) {
  new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  new NextjsSite(stack, "site", {
    path: "packages/web",
  });
}
