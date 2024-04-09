import HamburgerMenuIcon from "@/component/atoms/HamburgerMenuIcon";
import Logo from "@/component/atoms/Logo";
import Navigation from "@/component/molecules/Navigation";

const Header = () => {
  return (
    <header className="fixed z-[3] top-0 bg-black-darker/[.0] w-[100vw] h-[80px] flex items-center justify-between p-2">
      <Logo />
      <HamburgerMenuIcon />
      <Navigation />
    </header>
  );
};

export default Header;
