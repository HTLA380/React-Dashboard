import { createContext, useContext, useState } from "react";

interface NavbarContextInterface {
  isSearchBarActive: boolean;
  setIsSearchBarActive: React.Dispatch<React.SetStateAction<boolean>>;
  isSideBarActive: boolean;
  setIsSideBarActive: React.Dispatch<React.SetStateAction<boolean>>;
  DRAWER_WIDTH: number;
}

const NavbarContext = createContext<NavbarContextInterface>({
  isSearchBarActive: false,
  setIsSearchBarActive: () => null,
  isSideBarActive: false,
  setIsSideBarActive: () => null,
  DRAWER_WIDTH: 280,
});

export const NavbarContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSearchBarActive, setIsSearchBarActive] = useState<boolean>(false);
  const [isSideBarActive, setIsSideBarActive] = useState<boolean>(false);
  const DRAWER_WIDTH = 280;

  const value = {
    isSearchBarActive,
    setIsSearchBarActive,
    isSideBarActive,
    setIsSideBarActive,
    DRAWER_WIDTH,
  };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);
