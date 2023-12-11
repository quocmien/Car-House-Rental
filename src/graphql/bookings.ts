export const PROFILE_BOOKING_QUERY = `
query getBookings($filters: BookingFiltersInput) {
  bookings(filters: $filters) {
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
        status
      }
    }
  }
}`;
