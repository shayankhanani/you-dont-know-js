const LIMIT = parseInt(prompt("Enter your Bank Treshold:"));
console.log(`Set Limit is ${LIMIT}`);
const TAX_RATE = 0.013;
const BALANCE = parseInt(prompt("Enter your Balance:"));
console.log(`Your Balance is ${BALANCE}`);
(BALANCE < LIMIT) ? console.log("You have minimum balance"): console.log("Lets start!") ;
var flag = false;
var spend, purchase; 
var items = [];
var price = [];
var total = 0;
var a_limit = LIMIT;

function shopping(){
    while(flag == false){
        if(total < LIMIT){
            purchase = prompt("Enter Your Item: ");
            spend = parseInt(prompt("Enter the price of the item: "));
            if(spend < BALANCE){
                if(spend <= LIMIT && spend <= a_limit){
                    total += spend;
                    console.log(total)
                    price.push(spend);
                    items.push(purchase);
                    a_limit -= spend;
                }
                else{
                    console.log("Out of Limit Purchase")
                }
            }
            else{
                console.log("Too Expensive")
            }            
        }
        else{
            flag = true;
        }  
    }
}

shopping();

function formatList(){
    let total_tax_p = 0;
    for(let i = 0; i < items.length; i++){
        let strPrice = '$' + String(price[i].toFixed(2));
        let prod_tax = price[i] * TAX_RATE;
        total_tax_p += prod_tax; 
        console.log(`${items[i]} price is ${strPrice}`);
        console.log(`${items[i]} tax is ${prod_tax}`);
    }
    console.log(`Total Tax paid:  ${total_tax_p}`);
}

formatList();