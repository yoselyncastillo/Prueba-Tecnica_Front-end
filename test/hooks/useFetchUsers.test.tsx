import { act } from "react";
import { renderHook } from "@testing-library/react";
import { useFetchUsers } from "../../src/hooks/useFetchUsers";
import * as helpers from "../../src/helpers/getUsers";
import { mockUsers } from "../mockData";

jest.mock("../../src/helpers/getUsers", () => ({
  getUsersByUsername: jest.fn(),
  getUserDetailsByUsername: jest.fn(),
}));

describe("Test on useFetchUsers", () => {
  test("should initial data", () => {
    const { result } = renderHook(() => useFetchUsers());
    const { users, isLoading, error, currentUser } = result.current;

    expect(users.length).toBe(0);
    expect(isLoading).toBeFalsy();
    expect(error).toBe("");
    expect(currentUser).toBe(null);
  });

  test("should return users by username", async () => {
    (helpers.getUsersByUsername as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useFetchUsers());

    await act(async () => {
      await result.current.getUsers("juan");
    });

    expect(result.current.users).toEqual(mockUsers);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe("");
  });

  test("should return user detail", async () => {
    (helpers.getUserDetailsByUsername as jest.Mock).mockResolvedValue(
      mockUsers[0]
    );

    const { result } = renderHook(() => useFetchUsers());

    await act(async () => {
      await result.current.getUserDetails("juan");
    });

    expect(result.current.currentUser).toEqual(mockUsers[0]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe("");
  });
});
