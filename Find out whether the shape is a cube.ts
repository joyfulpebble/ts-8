export function cubeChecker(volume: number, side: number): boolean{
  if(volume <= 0) return false;
  if(side <= 0) return false;
  
  const cube = Math.pow(side, 3);
  if(volume != cube) return false;
  
  return true;
}