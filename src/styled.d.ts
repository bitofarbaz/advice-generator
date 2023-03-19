// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dark: {
        text: string;
        primary: string;
        background: string;
        cardBackground: string;
      };
    };
  }
}
