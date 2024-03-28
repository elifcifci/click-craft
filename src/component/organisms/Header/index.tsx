import HamburgerMenuIcon from "@/component/atoms/HamburgerMenuIcon";
import Logo from "@/component/atoms/Logo";
import Navigation from "@/component/molecules/Navigation";

const Header = () => {
  return (
    <header className="bg-zinc-800 h-[80px] flex items-center justify-between relative p-2">
      <Logo />
      <HamburgerMenuIcon />
      <Navigation />
    </header>
  );
};

export default Header;
