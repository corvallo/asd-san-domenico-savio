import * as stylex from "@stylexjs/stylex";
import { colors } from "~/shared/styles/tokens/colors.stylex";
import { typography } from "~/shared/styles/tokens/typography.stylex";

const styles = stylex.create({
  brand: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    color: colors.ivory50,
    textDecoration: "none",
    fontFamily: typography.fontDisplay,
    fontSize: { default: 17, "@media (max-width: 600px)": 13 },
    fontWeight: 600,
    lineHeight: 0.95,
  },
  logoSpace: { width: 0, height: 48 },

  enroll: { flexShrink: 0 },
});

export const Logo = () => {
  return (
    <a href='/' aria-label='ASD San Domenico Savio Lecce — Home' {...stylex.props(styles.brand)}>
      <span aria-hidden='true' {...stylex.props(styles.logoSpace)} />
      <span>
        A.S.D.
        <br />
        San Domenico Savio
        <br />
        Lecce
      </span>
    </a>
  );
};
