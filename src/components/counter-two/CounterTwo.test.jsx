import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import user from "@testing-library/user-event";

describe("Counter Two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByRole("heading", {
      level: 1,
      name: "Counter Two",
    });
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async() => {
    const incrementFunc = jest.fn();
    const decrementFunc = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementFunc}
        handleDecrement={decrementFunc}
      />
    );

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementFunc).toHaveBeenCalledTimes(1);
    expect(decrementFunc).toHaveBeenCalledTimes(1);
  });
});
