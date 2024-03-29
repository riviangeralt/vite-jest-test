import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// test("Greet is working", () => {
//   render(<Greet />);
//   const textElement = screen.getByText(/greet/i);
//   expect(textElement).toBeInTheDocument();
// });

/*

the below tests are written for tdd(test driven development)

* Greet should render the text Hello and if a name is passed into
* the component then it should render the text Hello {name}

*/

describe("Greet", () => {

  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a name", () => {
    render(<Greet name="Max" />);
    const textElement = screen.getByText("Hello Max");
    expect(textElement).toBeInTheDocument();
  });

});
