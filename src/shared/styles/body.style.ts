
import { background } from "./semantic/background.stylex";
import { foreground } from "./semantic/foreground.stylex";
import { text } from "./semantic/typography.stylex";
import { sxv } from "@stylex-variants/core";

export const bodyStyles = sxv({
  base: {
    margin: 0,
    minHeight: '100vh',
    backgroundColor: background.page,
    color: foreground.body,
    fontFamily: text.familyBody,
    fontSize: text.sizeBody,
    lineHeight: text.leadingBody,
  },
});
