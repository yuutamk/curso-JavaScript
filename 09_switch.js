// estructura switch

let fruta = "papaya";
switch (fruta) {
    case "manzana":
        console.log("Las manzanas cuestan $20 el kilo");
        break;
    case "banana":
        console.log("Los plátanos cuestan $15 el kilo");
        break;
    case "naranja":
        console.log("Las naranjas cuestan $12 el kilo");
        break;
    case "papaya":
        console.log("Las papayas cuestan $25 el kilo");
        break;
    // caso compartido
    case "kiwi":
    case "mango":
        console.log("Los kiwis y mangos cuestan $30 el kilo");
        break;
    case "fresa":
        console.log("Las fresas cuestan $18 el kilo");
        break;  
    // caso por defecto          
    default:
        console.log(`lo sentimos no contamos con ${fruta} en este momento`);
        break;
}