import { useState } from "react";

import { MainRouter } from "./routers";
import { NavigationHeader, Footer, SideBar } from "./components";

export const App = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  return (
    <>
      {/* Navigation */}
      <NavigationHeader handleClickBurgerButton={() => setOpenSideBar(true)} />

      {/* SideBar Navigation */}
      {openSideBar && <SideBar handleClose={() => setOpenSideBar(false)} />}

      {/* Main Content */}
      <main>
        <MainRouter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};
