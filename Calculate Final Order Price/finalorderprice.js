const custcard = [{'price':200,'quantity':4},{'price':1000,'quantity':2},{'price':700,'quantity':6}]
let totalresult = [];
custcard.forEach((el)=>{
    totalresult.push(el.price * el.quantity)
})
let totalamount = totalresult.reduce((x,y)=>(x+y))
console.log(totalresult);
console.log("total amount of card - "+totalamount);