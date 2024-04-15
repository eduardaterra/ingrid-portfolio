import Link from "next/link";
import styled from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styled.header}>
      <Link href={"/"} style={{ all: "unset" }}>
        <p className={styled.title}>
          <b>ingrid martins | </b>
          branding & storytelling
        </p>
      </Link>
    </div>
  );
};

export default Header;

