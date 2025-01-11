export function SetClassNamePrefix(prefix: string) {
  return (classname: string) => {
    return `${prefix}${classname}`;
  };
}

export const ClassNamePrefix = SetClassNamePrefix('y-');
