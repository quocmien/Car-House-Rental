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
`

export const HOME_PRODUCTS_QUERY = `
query getProducts {
  products {
    data {
      id
      attributes {
        name
        desc
        image {
          data {
            attributes {
              formats
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
`