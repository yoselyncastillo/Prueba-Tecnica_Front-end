import React from "react";
import { render, screen } from "@testing-library/react";
import { useFetchUsers } from "../src/hooks/useFetchUsers";
import { BrowserRouter } from "react-router-dom";
import { UserPage } from "../src/pages/UserPage";

jest.mock("../src/hooks/useFetchUsers");

describe("<UserPage/>", () => {
  const currentUser = {
    avatar_url: "https://avatars.githubusercontent.com/u/15987317?v=4",
    followers: 1666,
    following: 823,
    id: 15987317,
    login: "juandc",
    name: "Juan David Castro",
    public_repos: 80,
  };

  test("should render user", () => {
    (useFetchUsers as jest.Mock).mockReturnValue({
      currentUser: currentUser,
      isLoading: false,
      error: "",
      getUserDetails: jest.fn(),
    });
    render(<UserPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(currentUser.followers)).toBeTruthy();
    expect(screen.getByText(currentUser.following)).toBeTruthy();
    expect(screen.getByText(currentUser.login)).toBeTruthy();
    expect(screen.getByText(currentUser.name)).toBeTruthy();
    expect(screen.getByText(currentUser.public_repos)).toBeTruthy();
  });
  test("should loading message ", () => {
    (useFetchUsers as jest.Mock).mockReturnValue({
      currentUser: null,
      isLoading: true,
      error: "",
      getUserDetails: jest.fn(),
    });
    render(<UserPage />, { wrapper: BrowserRouter });
    expect(screen.getByText("Cargando datos del usuario...")).toBeTruthy();
  });
  test("should show error ", () => {
    (useFetchUsers as jest.Mock).mockReturnValue({
      currentUser: null,
      isLoading: false,
      error: "Error al buscar usuario",
      getUserDetails: jest.fn(),
    });
    render(<UserPage />, { wrapper: BrowserRouter });
    expect(screen.getByText("Error al buscar usuario")).toBeTruthy();
  });
});
