import "styled-components";

import { dark } from "../../global/theme/dark";

declare module "styled-components" {
  type ThemeType = typeof dark;

  interface DefaultTheme extends ThemeType {}
}
