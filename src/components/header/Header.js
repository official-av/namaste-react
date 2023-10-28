import { LogoComponent } from "./Logo";
import { NavItemsComponent } from "./NavItems";
export const HeaderComponent = () => (
  <nav className="header">
    <LogoComponent />
    <NavItemsComponent />
  </nav>
);

export default HeaderComponent;
