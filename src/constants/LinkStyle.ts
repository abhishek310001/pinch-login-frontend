import Colors from "./Colors";
import Font from "./Font";
import FontSize from "./FontSize";

const primary = {
  fontFamily: Font["poppins-bold"],
  color: Colors.text,
  textAlign: "center",
  fontSize: FontSize.medium,
  textDecorationLine: "underline",
};

const secondary = {
  fontFamily: Font["poppins-semiBold"],
  color: Colors.text,
  textAlign: "center",
  fontSize: FontSize.small,
  textDecorationLine: "underline",
};

export default {
  primary,
  secondary,
};
