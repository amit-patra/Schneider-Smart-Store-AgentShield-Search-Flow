import{Product}from"./types";
export const products:Product[]=[
{id:"p1",name:"Acti9 xC60 2P C 40A MCB",sku:"A9N2P40CGN",category:"MCB",price:1166,mrp:2989,rating:4.6,points:116,image:new URL("./assets/products/p1.png", import.meta.url).href},
{id:"p2",name:"Acti9 xC60 2P B 20A MCB",sku:"A9N2P20BGN",category:"MCB",price:724,mrp:1857,rating:4.5,points:72,image:new URL("./assets/products/p2.png", import.meta.url).href},
{id:"p3",name:"Acti9 xC60 4P D 20A MCB",sku:"A9N4P20DGN",category:"MCB",price:1678,mrp:4303,rating:4.6,points:167,image:new URL("./assets/products/p3.png", import.meta.url).href},
{id:"p4",name:"Acti9 xC60 4P C 32A MCB",sku:"A9N4P32CIN",category:"MCB",price:1450,mrp:3718,rating:4.5,points:145,image:new URL("./assets/products/p4.png", import.meta.url).href},
{id:"p5",name:"Acti9 xC60 4P C 40A MCB",sku:"A9N4P40CIN",category:"MCB",price:2106,mrp:5401,rating:4.6,points:210,image:new URL("./assets/products/p5.png", import.meta.url).href},
{id:"p6",name:"Acti9 xC60 4P C 63A MCB",sku:"A9N4P63CIN",category:"MCB",price:2194,mrp:5625,rating:4.7,points:219,image:new URL("./assets/products/p6.png", import.meta.url).href},
{id:"p7",name:"Easy9 Surge Arrestor T2 1P-N",sku:"EZ9L33620",category:"Surge Protection",price:2011,mrp:3868,rating:4.4,points:201,image:new URL("./assets/products/p7.png", import.meta.url).href},
{id:"p8",name:"Easy9 Surge Arrestor T2 3P-N",sku:"EZ9L33720",category:"Surge Protection",price:3630,mrp:6981,rating:4.5,points:363,image:new URL("./assets/products/p8.png", import.meta.url).href},
{id:"p9",name:"Easy9 VTPN DB 4 Ways",sku:"EZ9EVM04",category:"Distribution Board",price:5089,mrp:10177,rating:4.4,points:508,image:new URL("./assets/products/p9.png", import.meta.url).href},
{id:"p10",name:"Easy9 VTPN DB 8 Ways",sku:"EZ9EVM08",category:"Distribution Board",price:7322,mrp:14643,rating:4.6,points:732,image:new URL("./assets/products/p10.png", import.meta.url).href},
{id:"p11",name:"Easy9 VTPN DB 12 Ways",sku:"EZ9EVM12",category:"Distribution Board",price:9217,mrp:18434,rating:4.6,points:921,image:new URL("./assets/products/p11.png", import.meta.url).href},
{id:"p12",name:"EasyPact CVS160N 160A 3P",sku:"LV516507",category:"MCCB",price:23920,mrp:47840,rating:4.7,points:2392,image:new URL("./assets/products/p12.png", import.meta.url).href},
{id:"p13",name:"EasyPact CVS100F 40A 3P",sku:"LV510552",category:"MCCB",price:15735,mrp:31470,rating:4.5,points:1573,image:new URL("./assets/products/p13.png", import.meta.url).href},
{id:"p14",name:"EasyPact CVS100N 100A 4P",sku:"LV510585",category:"MCCB",price:26305,mrp:52610,rating:4.7,points:2630,image:new URL("./assets/products/p14.png", import.meta.url).href},
{id:"p15",name:"Acti9 iCT Modular Contactor",sku:"A9C20832",category:"Contactor",price:3890,mrp:5590,rating:4.5,points:389,visual:"⚡",image:new URL("./assets/products/p15.png", import.meta.url).href},
{id:"p16",name:"Easy UPS BVX1200LI-GR 1200VA",sku:"BVX1200LI-GR",category:"UPS",price:9850,mrp:12499,rating:4.6,points:985,visual:"🔋",image:new URL("./assets/products/p16.png", import.meta.url).href},
{id:"p17",name:"Easy UPS BV800I 800VA",sku:"BV800I",category:"UPS",price:6490,mrp:8499,rating:4.5,points:649,visual:"🔋",image:new URL("./assets/products/p17.png", import.meta.url).href},
{id:"p18",name:"APC Back-UPS 600VA",sku:"BE600M1",category:"UPS",price:5890,mrp:7499,rating:4.5,points:589,visual:"🔌",image:new URL("./assets/products/p18.png", import.meta.url).href},
{id:"p19",name:"Schneider Electric USB Charging Socket",sku:"USB-CHG-01",category:"USB Accessories",price:1299,mrp:1899,rating:4.4,points:129,visual:"🔌",image:new URL("./assets/products/p19.png", import.meta.url).href},
{id:"p20",name:"USB-C Fast Charging Adapter",sku:"USB-C-65W",category:"USB Accessories",price:2199,mrp:2999,rating:4.5,points:219,visual:"🔗",image:new URL("./assets/products/p20.png", import.meta.url).href},
{id:"p21",name:"Harmony XB5 USB Interface Module",sku:"XB5-USB-01",category:"USB Accessories",price:2790,mrp:3590,rating:4.4,points:279,visual:"🖥️",image:new URL("./assets/products/p21.png", import.meta.url).href}];
export const categories=["All",...Array.from(new Set(products.map(p=>p.category)))];