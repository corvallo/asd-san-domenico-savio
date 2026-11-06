import { sxv } from "@stylex-variants/core";

export const navigationStyle = sxv({
    base: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem",
        order: { default: 0, "@media (max-width: 1000px)": 3 },
        width: { default: "auto", "@media (max-width: 1000px)": "100%" },
        overflowX: "auto",
        paddingBottom: 8,

    },
});
