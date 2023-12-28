export const PROFILE_BOOKING_QUERY = `
query getBookings($filters: BookingFiltersInput, $sort: [String]) {
  bookings(filters: $filters, sort: $sort) {
    data {
      id
      attributes {
        first_date
        last_date
        product {
          data {
            attributes {
              name
            }
          }
        }
        user {
          data {
            attributes {
              username
              email
              firstName
              lastName
              phone
            }
          }
        }
        guest
        status
        note
      }
    }
  }
}`;
