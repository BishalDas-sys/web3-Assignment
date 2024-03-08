import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MainPage from "../app/page";
import ProductCard2 from "../components/ProductCard";

test("renders ProductCard", () => {
  render(<ProductCard2 />);
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  );
  expect(asFragment()).toMatchSnapshot();
});

// ErrorBoundary component to catch and handle errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or perform additional actions here
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error occurred during rendering.</div>;
    }

    return this.props.children;
  }
}
