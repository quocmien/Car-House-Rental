export const GENDERS = ['male', 'female', 'other'];

export const preventRefreshSwr = {
  revalidateOnFocus: false,
  revalidateOnMount:false,
  revalidateOnReconnect: false,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0,
  revalidateIfStale: false,
}