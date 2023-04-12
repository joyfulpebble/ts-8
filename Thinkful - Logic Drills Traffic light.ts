const updateLight = (current: string): string => {
  const lights = {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  };
  
  return lights[current];
};