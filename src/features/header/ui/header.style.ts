import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../shared/styles/tokens/colors.stylex";
import { sxv } from "@stylex-variants/core";


export const headerStyle = sxv({
  base: {
    position: "absolute",
    zIndex: 5,
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    padding: { default: "16px 3%", "@media (max-width: 800px)": "16px 5%" },
    flexWrap: "nowrap",
    color: colors.ivory50,
  }
})

