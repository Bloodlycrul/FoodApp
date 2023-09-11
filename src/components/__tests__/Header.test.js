import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Context/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("It has all the header Test Case", () => {
  it("Should load header component with the Home Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //Asseration
    const homeButton = screen.getByText("Home");
    expect(homeButton).toBeInTheDocument();
  });

  it("Should have the cart Item or not", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //   You can use the regex when you use getByText.
    const cartCheck = screen.getByText(/Cart/);

    //   Asserastion

    expect(cartCheck).toBeInTheDocument();
  });

  it("Should check the cart button by text", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const checkCart = screen.getByText("Cart (0 Items)");

    expect(checkCart).toBeInTheDocument();
  });
});
