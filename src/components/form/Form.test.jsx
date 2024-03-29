import user from "@testing-library/user-event";
import { render, screen } from "../../mocks/test-util";
import { createPost } from "../../utils/utils";
import Form from "./Form";

jest.mock("../../utils/utils", () => ({
  // mocking the available async functions
  createPost: jest.fn(),
}));

describe("Form", () => {
  beforeEach(() => {
    jest.isolateModules(() => {
      createPost.mockResolvedValue({
        id: 1,
        name: "John Doe",
        email: "johndoe@me.com",
      });
    });
  });

  test("renders correctly", async () => {
    render(<Form />);
    const textElement = screen.getByRole("heading", {
      level: 1,
      name: "Form",
    });
    expect(textElement).toBeInTheDocument();
  });

  test("renders error message", async () => {
    render(<Form />);
    user.setup();
    const nameInput = screen.getByRole("textbox", {
      name: "Name",
    });
    const emailInput = screen.getByRole("textbox", {
      name: "Email",
    });
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    await user.click(submitButton);

    const nameError = screen.getByText("Name is required");
    const emailError = screen.getByText("Email is required");

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
  });

  test("calls an API", async () => {
    render(<Form />);
    user.setup();

    const nameInput = screen.getByRole("textbox", {
      name: "Name",
    });
    const emailInput = screen.getByRole("textbox", {
      name: "Email",
    });
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });

    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "johndoe@me.com");
    await user.click(submitButton);

    expect(createPost).toHaveBeenCalledTimes(1);
    const nameError = screen.getByText("Name is required");
    const emailError = screen.getByText("Email is required");

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
  });
});
