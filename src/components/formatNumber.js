const NUMBER_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

export function formatNumber(number) {
  return NUMBER_FORMATTER.format(number);
}
