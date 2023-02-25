import { StylesType } from "../../theme/type";
import IMG from "../../assets/images/bg-sidebar-desktop.svg";

const styles: StylesType<"root"> = {
  root: {
    // maxWidth: 400,
    backgroundImage: "url(" + IMG + ")",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};

export default styles;
