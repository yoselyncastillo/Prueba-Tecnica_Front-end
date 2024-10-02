import { render, screen } from "@testing-library/react";
import { ProfileCardList } from "../src/components/ProfileList/ProfileCardList";
import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { mockUserDetail } from "./mockData";

describe("Test on <ProfileCardList/>", () => {
  test("should receive the login and id property", async () => {
    render(<ProfileCardList user={mockUserDetail} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText(mockUserDetail.login)).toBeTruthy();
    expect(screen.getByText(`ID: ${mockUserDetail.id}`)).toBeTruthy();
  });

  test("should show avatar image correctly", () => {
    render(<ProfileCardList user={mockUserDetail} />, {
      wrapper: BrowserRouter,
    });
    const { src, alt } = screen.getByTestId("avatar-img") as HTMLImageElement;

    expect(src).toBe(mockUserDetail.avatar_url);
    expect(alt).toBe(`${mockUserDetail.login}'s avatar`);
  });
});
