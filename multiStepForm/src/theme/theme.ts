import { PaletteColorOptions, Theme } from "@mui/material";
import { createTheme, SxProps } from "@mui/system";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      20: string;
      40: string;
      60: string;
      80: string;
      100: string;
    };
    blue: {
      100?: string;
      80?: string;
      60?: string;
      40?: string;
    };
    red: {
      main: string;
    };
  }
}
// export type StyleType = Record<"root" | , SxProps<Theme>>;
const theme = createTheme({
  palette: {
    blue: {
      100: "hsl(213, 96%, 18%)",
      80: " hsl(243, 100%, 62%)",
      60: "hsl(228, 100%, 84%)",
      40: "hsl(206, 94%, 87%)",
    },
    red: {
      main: "hsl(354, 84%, 57%)",
    },
    neutral: {
      20: "hsl(231, 11%, 63%)",
      40: "hsl(229, 24%, 87%)",
      60: "hsl(217, 100%, 97%)",
      80: "hsl(231, 100%, 99%)",
      100: "hsl(0, 0%, 100%)",
    },
  },
});
export default theme;
