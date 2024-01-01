export const RATINGS = `
query getRatingByProduct($filters: RatingFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  ratings(filters: $filters, pagination: $pagination, sort:$sort) {
    data {
      id
      attributes {
        comment
        rating
        date_rating
        user_rating {
          data {
            attributes {
              avatar {
                data {
                  attributes {
                  	url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
