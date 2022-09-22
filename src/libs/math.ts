

export function sum(elements:number[]):number {
 return elements.reduce((sum,current)=>sum+current,0) 
}
