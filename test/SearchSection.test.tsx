import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchSection } from "../src/components/SearchSection/SearchSection";

describe("<SearchSection/>", () => {
  const getUsers = jest.fn();

  test("should change input value", () => {
    render(<SearchSection getUsers={getUsers} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: "pedro" } });
    expect(input.value).toBe("pedro");
  });

  test("should show error message when typing a short username", () => {
    render(<SearchSection getUsers={getUsers} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: "yos" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });
    expect(
      screen.getByText("El usuario debe tener al menos 4 caracteres")
    ).toBeTruthy();
  });

  test("should show error message when typing 'iseijasunow'", () => {
    render(<SearchSection getUsers={getUsers} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: "iseijasunow" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });
    expect(
      screen.getByText(
        'El usuario "iseijasunow" no esta disponible para la búsqueda'
      )
    ).toBeTruthy();
  });

  test("should call getUsers function when click search button", () => {
    render(<SearchSection getUsers={getUsers} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const button = screen.getByTestId("search-button");
    fireEvent.input(input, { target: { value: "yose" } });
    fireEvent.click(button);

    expect(getUsers).toHaveBeenCalled();
  });

  test("should call getUsers function when press enter key", () => {
    render(<SearchSection getUsers={getUsers} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: "yose" } });
    fireEvent.keyDown(input, { key: "Enter", keyCode: 13 });

    expect(getUsers).toHaveBeenCalled();
    expect(getUsers).toHaveBeenCalledWith("yose");
  });

  test("shoud search button disabled when username is invalid (short username or reserved word)", () => {
    render(<SearchSection getUsers={getUsers} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: "iseijasunow" } });

    const button = screen.getByTestId("search-button");
    expect(button).toHaveProperty("disabled", true);
  });

  test("shoud search button disabled when username is valid", () => {
    render(<SearchSection getUsers={getUsers} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: "yoselyn" } });

    const button = screen.getByTestId("search-button");
    expect(button).toHaveProperty("disabled", false);
  });
});
