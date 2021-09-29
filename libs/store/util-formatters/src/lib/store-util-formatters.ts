export function storeUtilFormatters(): string {
  return 'store-util-formatters';
}

export function formatRating(rating: number) {
  return `${Math.round(rating * 100) / 10} / 10`;
}
