import { useCookies } from "react-cookie";

export const useUserCookie = () => {
  const [userCookie, setCookie, removeCookie] = useCookies(["seel_user"]);

  const user = userCookie.seel_user ?? null;

  const setUserCookie = (user) => {
    setCookie("seel_user", JSON.stringify(user), {
      path: "/",
      maxAge: 60 * 60 * 24 * 1, // 1 day
      secure: true,
      sameSite: "strict",
    });
  };

  const removeUserCookie = () => {
    removeCookie("seel_user", { path: "/" });
  };

  return { user, setUserCookie, removeUserCookie }
};
