import { useEffect } from "react";
import { useLocation } from "react-router";

const BASE_TITLE = "Frosty Filters";

export function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title = location.pathname.includes("/edit-image/")
      ? `Editing Image - ${BASE_TITLE}`
      : `Gallery - ${BASE_TITLE}`;
  }, [location]);

  return null;
}
