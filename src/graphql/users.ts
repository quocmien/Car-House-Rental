export const USER_DETAIL_QUERY = `
query UserDetail($filters: UsersPermissionsUserFiltersInput) {
    usersPermissionsUsers(filters: $filters) {
    data {
      id
      attributes {
				username
        address
        firstName
        lastName
        phone
        email
        links
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
`;