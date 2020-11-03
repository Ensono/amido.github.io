import React from "react";

export const HideNavigation = ({ next, prev }) => {
  React.useEffect(() => {
    if (next) {
      //@ts-ignore
      document.querySelectorAll(
        "div.pagination-nav__item.pagination-nav__item--next>a"
        //@ts-ignore
      ).style.display = "none";
    }
    if (prev) {
      //@ts-ignore
      document.querySelector("div.pagination-nav__item>a").style.display = "none";
    }
  }, []);

  return null;
};
