export function countSheep(num: number): string {
  let result = ''; 
  
  for (let i = 1; i <= num; i++) result += i + " sheep...";

  return result;
}

// export function countSheep(num: number): string {
//   if(!num) return '';
//   const sheeps: string[] = [''];
  
//   for(let i = 1; i <= num; i++) sheeps.push(`${i} sheep...`)
  
//   return sheeps.join(''); 
// }