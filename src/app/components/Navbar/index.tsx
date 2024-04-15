import Header from "../Header";
import Menu from "../Menu";
import styled from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styled.container}>
      <Header />
      <Menu />
    </div>
  );
};

export default Navbar;

