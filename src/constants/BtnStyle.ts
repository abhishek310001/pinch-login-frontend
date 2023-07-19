import Colors from "./Colors";
import Font from "./Font";
import FontSize from "./FontSize";
import Spacing from "./Spacing";

const container = {
  padding: Spacing * 2,
  backgroundColor: Colors.primary,
  marginVertical: Spacing * 3,
  borderRadius: Spacing,
  shadowColor: Colors.primary,
  shadowOffset: {
    width: 0,
    height: Spacing,
  },
  shadowOpacity: 0.3,
  shadowRadius: Spacing,
};
const text = {
  fontFamily: Font["poppins-bold"],
  color: Colors.onPrimary,
  textAlign: "center",
  fontSize: FontSize.large,
};

export default {
  container,
  text,
};
