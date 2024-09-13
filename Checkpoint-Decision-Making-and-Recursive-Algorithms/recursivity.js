//Decision Making (if-else and switch):
//Leap Year Checker
function Leap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return `${year} is a leap`;
            }else {
                return `${year} is not a leap`;
            } 
        }else{
            return `${year} is a leap`;
        }
        return `${year} is a leap`;
    }else {
        return `${year} is not a leap`;
    }
}
//Ticket Pricing:
function TicketPricing(age) {
    if (age<= 12 ) {
        return "The price is 10 $"
    }
    if (age> 12 && age<= 17 ) {
        return "The price is 15 $"
    }
    if (age> 17) {
        return "The price is 20 $"
    }
}
//------------------------------------------------------------------------
//Recursion
//Fibonacci Sequence
function Fibonacci(n) {
    let result ;
    if (n===0) {
        return result = 0
    }
    else if (n===1) {
        return result = 1
    }else {
        return result = Fibonacci (n-1) + Fibonacci (n-2)
    }
return result;
}
//Power Function
    function power(x, n) {
        let result
        if (n === 0) {
            result = 1;
        }
        if (n === 1) {
            result = x;
        }
        else if (n < 0) {
            result =  x* 1 / power(x, -n);
        }else {
            result = x * power(x, n - 1);
        }
        return result
    }
    let x = 3;
    let n = 2;
    console.log(power(x, n))