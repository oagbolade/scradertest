import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App";
import axios from "axios";
import { testfetchProducts } from "./../src/actions/actions";
import { Provider } from "react-redux";
import store from "./../src/store";
jest.mock("axios");

test("renders react page", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const linkElement = screen.queryByText(/Scrader Frontend Test/gi);
  expect(linkElement).toBeTruthy();
});

test("api call", () => {
  const URL = `https://d17btosbk6wddi.cloudfront.net/v1/search?q=bag`;

  const data = { data: { user: "agbolade" } };
  axios.get.mockResolvedValue(data);
  testfetchProducts();

  expect(axios.get).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalledWith(URL);
});
