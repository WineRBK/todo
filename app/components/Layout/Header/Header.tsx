import Logo from "./Logo.svg";

const Header = (): JSX.Element => {
  return (
    <header className={"bg-[#0D0D0D] h-[200px] w-full flex justify-center"}>
      <Logo className="mt-[72px]" />
    </header>
  );
};

export default Header;
