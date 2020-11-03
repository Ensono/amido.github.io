import React from "react";

export const HideNavigation = ({ next, prev }) => {
  React.useEffect(() => {
    if (next) {
      //@ts-ignore
      const element = document.querySelector(
        "div.pagination-nav__item.pagination-nav__item--next>a"
      );
      //@ts-ignore
      if (element && element.style) element.style.display = "none";
    }
    if (prev) {
      const element = document.querySelector("div.pagination-nav__item>a");
      //@ts-ignore
      if (element && element.style) element.style.display = "none";
    }
  });

  return null;
};
