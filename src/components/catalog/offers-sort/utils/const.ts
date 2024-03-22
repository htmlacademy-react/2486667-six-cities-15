export const enum SortOption {
  Popular = 'popular',
  PriceLowToHigh = 'price_low_to_high',
  PriceHighToLow = 'price_high_to_low',
  TopRatedFirst = 'top_rated_first',
}

export const SORT_OPTIONS = [
  {
    id: SortOption.Popular,
    name: 'Popular'
  },
  {
    id: SortOption.PriceLowToHigh,
    name: 'Price: low to high'
  },
  {
    id: SortOption.PriceHighToLow,
    name: 'Price: high to low'
  },
  {
    id: SortOption.TopRatedFirst,
    name: 'Top rated first'
  },
];
