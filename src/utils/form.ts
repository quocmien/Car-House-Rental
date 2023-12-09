export const getDirtyValues = <T extends { [key: string]: any }>(
  dirtyValues: {
    [key in keyof T]: boolean | undefined;
  },
  allValues: T
) => {
  const dirtyKeys = Object.keys(dirtyValues).filter((key) => !!dirtyValues[key]);

  return Object.fromEntries(dirtyKeys.map((key) => [key, allValues[key]]));
};

export const requireFieldTitle = (title: string) => `${title} *`;

export const isNotString = (infor: any) => infor?.some((item: any) => typeof item !== 'string') || false;