export const ALL_PRODUCTS_SLUGS = `
{
  products {
    data {
      attributes {
        slug
      }
    }
  }
}
`;

export const HOME_PRODUCTS_QUERY = `
query getProducts($pagination: PaginationArg) {
  products(pagination: $pagination) {
    data {
      id
      attributes {
        name
        desc
        image {
          data {
            attributes {
              formats
              url
            }
          }
        }
        previews {
          data {
            id
            attributes {
              formats
              url
            }
          }
        }
        price
        displayPrice
        address
        category {
          data {
            attributes {
              name
              slug
            }
          }
        }
        slug
        content
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
`;

export const USER_PRODUCT_QUERY = `
query OwnProductQuery($filters: ProductFiltersInput, $pagination: PaginationArg) {
  products(filters: $filters, pagination: $pagination) {
    data {
      id
      attributes {
        address
        price
        slug
        name
        displayPrice
        category {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
        image {
          data {
            id
            attributes {
              url
            }
          }
        }
      }
    }
    meta {
      pagination {
        page
        pageCount
        pageSize
        total
      }
    }
  }
}
`;
