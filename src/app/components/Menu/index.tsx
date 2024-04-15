import Link from "next/link";
import styled from "./styles.module.scss";

const siteLinks = [
  { label: "HOME", url: "/" },
  // { label: "sobre mim", url: "/sobre-mim" },
  { label: "trabalhos", url: "/trabalhos" },
  // { label: "contato", url: "/contato" },
];

const Menu = () => {
  return (
    <div className={styled.container}>
      {siteLinks.map((link, index, arr) => {
        return (
          <div key={`${link.label} ${index}`}>
            <Link
              href={link.url}
              key={`${link.label} ${index}`}
              className={`${styled.text} ${styled.link}`}
            >
              {link.label}
            </Link>
            {!(arr.length - 1 === index) && (
              <span className={styled.bullet} key={index}>
                •
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;

