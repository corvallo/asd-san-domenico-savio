import { sxv } from "@stylex-variants/core";
import { colors } from "~/shared/styles/tokens/colors.stylex";

export const navLinkStyle = sxv({
    base: {
        flexShrink: 0,
        color: colors.ivory50,
        textDecoration: "none",
        fontSize: 14,
        paddingBlock: 9,
        borderBottomWidth: 2,
        borderBottomStyle: "solid",
        borderBottomColor: "transparent",
        cursor: "pointer",
        textTransform: 'capitalize',
        ":hover": { color: colors.gold400 },
        ":focus-visible": { outline: "2px solid", outlineColor: colors.gold400, outlineOffset: 4 },
    },
    variants: {
        active: {
            true: { color: colors.gold400, borderBottomColor: colors.gold400 },
            false: {}
        },
    },
});
