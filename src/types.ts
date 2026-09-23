export type Product={id:string;name:string;sku:string;category:string;price:number;mrp:number;rating:number;points:number};
export type CartItem=Product&{qty:number};