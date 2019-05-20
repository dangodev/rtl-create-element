import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

test("NotFound page", async () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("title")).toHaveTextContent("Hello CodeSandbox");
});
