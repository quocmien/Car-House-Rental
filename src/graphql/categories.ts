export const HOME_CATEGORIES_QUERY = `
query getHomeCategories($filters: CategoryFiltersInput) {
  categories(filters: $filters) {
    data {
      id
      attributes {
        name
        slug
        children {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
      }
    }
  }
}
`;

export const PRODUCT_CATEGORIES = `
{
  categories {
    data {
      id
      attributes {
        name
        slug
      }
    }
  }
}
`;
