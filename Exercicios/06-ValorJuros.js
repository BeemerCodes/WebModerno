function simpleInterest(initialvalue, interestrate, applicationtime){

    let interest = initialvalue * interestrate * applicationtime
    let amount = initialvalue + interest
    return console.log(amount);

}

function compoundInterest(initialvalue, interestrate, applicationtime){
    let amount = initialvalue * Math.pow((1 + interestrate), applicationtime)
    return console.log(amount.toFixed(2));
}

simpleInterest(1000, 0.05, 8)

compoundInterest(50000, 0.04, 30)



