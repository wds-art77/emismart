"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "./locale";

type Props = ComponentProps<typeof NextLink>;

/** next/link that prefixes internal string hrefs with the current locale. */
export function Link({ href, ...rest }: Props) {
  const { locale } = useLocale();
  let target = href;
  if (typeof href === "string" && href.startsWith("/") && !/^\/(en|fr|nl|de)(\/|$)/.test(href)) {
    target = `/${locale}${href === "/" ? "" : href}`;
  }
  return <NextLink href={target} {...rest} />;
}
