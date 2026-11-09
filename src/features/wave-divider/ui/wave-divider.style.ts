import { sxv } from "@stylex-variants/core";
import { colors } from "~/shared/styles/tokens/colors.stylex";

export const waveStyle = sxv({
    slots: {
        wave: { position: "absolute", bottom: -1, left: 0, width: "100%", height: "5vw" },
        waveGold: { fill: colors.gold300 },
        waveIvory: { fill: colors.ivory50, stroke: colors.ivory50, strokeWidth: 2 },
    },
})
