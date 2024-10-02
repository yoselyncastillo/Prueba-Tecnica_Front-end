import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchPage } from "../src/pages";
import { useFetchUsers } from "../src/hooks/useFetchUsers";
import { BrowserRouter } from "react-router-dom";
import { mockUsers } from "./mockData";

jest.mock("../src/hooks/useFetchUsers");
jest.mock('react-chartjs-2', () => ({
  Bar: () => null
}));

describe("<SearchPage/>", () => {
  test("should render users", () => {
    (useFetchUsers as jest.Mock).mockReturnValue({
      users: mockUsers,
      isLoading: false,
      error: "",
      getUsers: jest.fn(),
    });
    render(<SearchPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(mockUsers[0].name)).toBeTruthy();
    expect(screen.getByText(mockUsers[1].name)).toBeTruthy();
    expect(screen.getByText(mockUsers[2].name)).toBeTruthy();
  });
  test("should show error ", () => {
    (useFetchUsers as jest.Mock).mockReturnValue({
      mockUsers: null,
      isLoading: false,
      error: "Error en api",
      getUsers: jest.fn(),
    });
    render(<SearchPage />, { wrapper: BrowserRouter });
    expect(screen.getByText("Error en api")).toBeTruthy();
  });
});
