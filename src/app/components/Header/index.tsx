import Link from "next/link";
import styled from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styled.header}>
      <Link
        href={"/"}
        style={{
          all: "unset",
          display: "inline-flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span className={styled.title}>
          <b>
            <span data-brown className={styled.title}>
              ingrid
            </span>
            <span data-yellow className={styled.title}>
              .
            </span>
            <span data-pink className={styled.title}>
              m{" "}
            </span>
            |
          </b>
        </span>
        <span className={styled.subtitle}>
          redação, branding & storytelling
        </span>
      </Link>
    </div>
  );
};

export default Header;

