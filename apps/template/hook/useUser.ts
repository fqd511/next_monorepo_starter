import { useContext } from "react";
import { UserContext } from "@/helper";

export function useUser() {
  const { userState, userDispatch } = useContext(UserContext);

  return {
    ...userState,
    userDispatch,
  };
}
