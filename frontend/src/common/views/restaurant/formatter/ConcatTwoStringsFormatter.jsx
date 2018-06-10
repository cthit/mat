import React from "react";

export function concatStrings(
  leftText,
  rightText,
  concatText,
  shouldIgnoreRightText,
  endText
) {
  return shouldIgnoreRightText
    ? leftText + endText
    : leftText + concatText + rightText + endText;
}
