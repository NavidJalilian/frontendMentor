import { StylesType } from "../../theme/type";

// Define the object type
const styles: StylesType<"root" | "form" | "input" | "textarea"> = {
  root: {
    padding: 1,
    color: ({ palette }) => palette.neutral[40],
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    fontSize: 16,
    border: "1px solid gray",
    borderRadius: 4,
    padding: "0.5rem",
    marginBottom: "1rem",
  },
  textarea: {
    fontSize: 16,
    border: "1px solid gray",
    borderRadius: 4,
    padding: "0.5rem",
    marginBottom: "1rem",
  },
};

export default styles;
