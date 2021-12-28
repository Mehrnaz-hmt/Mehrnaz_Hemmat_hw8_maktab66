 
//   function splitBill(amount , numPeople){
//   return `Each person needs to pay ${amount/ numPeople}`
//  }
//  console.log(splitBill(10,2));
//  console.log(splitBill(10,4));


 let splitBill = (amount , numPeople) => {
    return `Each person needs to pay ${amount/ numPeople}`;
   }
   console.log(splitBill(10,2));
   console.log(splitBill(10,4));

// --------------------------------------------------------------------------

//  function countdown(startingNumber ,step){
//  let countFromNum = startingNumber + step
//  return function decrease(){
//  countFromNum -=step;
//  return countFromNum;
//  }
//  }
//  const countingDown =countdown(20,2);
//  console.log(countingDown());
//  console.log(countingDown());


 let countDown = (startingNumber ,step) => {
    let countFromNum = startingNumber + step;
    let decrease = () => countFromNum -=step;
    return countFromNum;
 }
 const countingDown =countDown(20,2);
 console.log(countingDown());
//  console.log(countingDown);

