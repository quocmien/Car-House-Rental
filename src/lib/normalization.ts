import qs from 'qs'

export const handleFilter = (filters: any) => {
  const query = qs.stringify(
    {
      filters,
    },
    {
      encodeValuesOnly: true,
    }
  );
  return query;
};
