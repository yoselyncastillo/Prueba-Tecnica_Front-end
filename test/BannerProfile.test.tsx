import React from "react";
import { render, screen } from "@testing-library/react";
import { BannerProfile } from "../src/components";

describe("Test on BannerProfile", () => {
  const currentUser = {
    avatar_url: "https://avatars.githubusercontent.com/u/15987317?v=4",
    followers: 1666,
    following: 823,
    id: 15987317,
    login: "juandc",
    name: "Juan David Castro",
    public_repos: 80,
    html_url: "https://github.com/juandc",
  };

  test("should render data correctly", () => {
    render(<BannerProfile user={currentUser} />);

    expect(screen.getByText(currentUser.followers)).toBeTruthy();
    expect(screen.getByText(currentUser.following)).toBeTruthy();
    expect(screen.getByText(currentUser.login)).toBeTruthy();
    expect(screen.getByText(currentUser.name)).toBeTruthy();
    expect(screen.getByText(currentUser.public_repos)).toBeTruthy();
  });

  test("should redirect to the correct GitHub URL on button click", () => {
    render(<BannerProfile user={currentUser} />);
    const { href, target } = screen.getByRole("link", {
      name: /Ver en Github/i,
    }) as HTMLAnchorElement;
    expect(href).toBe(currentUser.html_url);
    expect(target).toBe("_blank");
  });
});
