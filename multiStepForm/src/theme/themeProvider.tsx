import { ThemeProvider } from "@mui/system";
import { Children } from "react";
import theme from "../theme/theme";

type Props = {
  children: React.ReactNode;
};

export default function MUltiStepThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
