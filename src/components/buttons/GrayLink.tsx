import { Link } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

const GrayLink = ({ children, href }: Props) => {
  return (
    <Link
      variant="buttonT3"
      underline="hover"
      href={href}
      sx={{
        color: "button.linkGrayFg",
        "&:hover": {
          color: "button.linkGrayFgHover",
        },
        "&:active": {
          color: "button.linkGrayFgPressed",
        },
      }}
    >
      {children}
    </Link>
  );
};

export default GrayLink;
