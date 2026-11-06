import type { VariantProps } from "@stylex-variants/core";
import type { ComponentPropsWithoutRef } from "react";
import type { navLinkStyle } from "./nav-link.style";

export type NavLinkProps = ComponentPropsWithoutRef<'a'> &
    VariantProps<typeof navLinkStyle>;