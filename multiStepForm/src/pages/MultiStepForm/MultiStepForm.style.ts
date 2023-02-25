import { StylesType } from "../../theme/type";

const styles: StylesType<"root" | "content"> = {
  root: {
    maxWidth: 800,
    p: 1,
    backgroundColor: ({ palette }) => palette.grey[100],
    margin: "auto",
  },
  content: {
    
    // width: "fit-content",
    display: "flex",
  },
};

export default styles;
