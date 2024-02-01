import { LogoComponent } from "./Logo";
import { NavItemsComponent } from "./NavItems";
export const HeaderComponent = () => (
  <nav className="flex shadow-lg">
    <LogoComponent />
    <NavItemsComponent />
  </nav>
);

export default HeaderComponent;
