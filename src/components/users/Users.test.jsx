import { act, render, screen } from "../../mocks/test-util";
import { fetchUsers } from "../../utils/utils";
import Users from "./Users";

jest.mock("../../utils/utils", () => ({
  fetchUsers: jest.fn(),
})); // Mock the API client methods

describe("Users", () => {
  beforeEach(() => {
    jest.isolateModules(() => {
      fetchUsers.mockResolvedValue([
        "John Doe",
        "Jane Doe",
        "Jack Doe",
        "Jill Doe",
      ]);
    });
  });

  test("renders correctly", async () => {
    await act(() => render(<Users />)); // only use when updating state immediately after render in useEffect
    const textElement = screen.getByRole("heading", {
      level: 1,
      name: "Users",
    });

    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    await act(() => render(<Users />));
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(4);
  });

  test("renders Error message", async () => {
    fetchUsers.mockImplementationOnce(() => Promise.reject("API is down")); // to make the api fail, comment it and the test fails, also this handler applies to this single test
    await act(() => render(<Users />));
    const error = screen.getByText("Error while fetching users");
    expect(error).toBeInTheDocument();
  });
});
