import Colors from "./Colors";
import Font from "./Font";
import FontSize from "./FontSize";

const primary: any = {
  fontFamily: Font["poppins-bold"],
  color: Colors.text,
  textAlign: "center",
  fontSize: FontSize.medium,
  textDecorationLine: "underline",
};

const secondary: any = {
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
