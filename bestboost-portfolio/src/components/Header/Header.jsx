import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { HeaderWrapper } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
