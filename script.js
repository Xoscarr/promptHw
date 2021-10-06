let productName= prompt("Enter your product name:");
    
let quantityAmnt= prompt("Enter quantity:"); 

let priceAmnt= prompt("Enter your price:");

let taxes=0.075;

var total=quantityAmnt * priceAmnt;

var totalTaxes=(total * taxes);

var totalAmnt=(totalTaxes+total);


prompt(`Your complete order for today's purchase:

 Product: ${productName} 

 Quantity: ${quantityAmnt} 

 Total: ${totalAmnt}
 
 Thank You For Shopping!`);