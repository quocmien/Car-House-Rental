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
query getProducts($pagination: PaginationArg, $sort: [String]) {
  products(pagination: $pagination, sort: $sort) {
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
        author {
          data {
            attributes {
              username
              email
              phone
              firstName
              lastName
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
        author {
          data {
            attributes {
              username
              email
              phone
              firstName
              lastName
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

export const PRODUCT_DETAIL_QUERY = `
query ProductDetailQuery($filters: ProductFiltersInput) {
  products(filters: $filters) {
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
        variants
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
        author {
          data {
            attributes {
              username
              email
              phone
              firstName
              lastName
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
`
