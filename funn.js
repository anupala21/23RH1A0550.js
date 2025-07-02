//function welcomeMessage(){
  //  console.log("Welcome to my channel")
//}
//function add(a,b){
  //  return a+b;
//}
//welcomeMessage();
//console.log(add(14,21));
//const mul=(a,b)=>(a*b);
//console.log(mul(7,9));

//const greet=()=>("hai");
//console.log(greet());

// using traditional code
function findOddOrEven(no){
    if(no%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
// using arrow function
const oddOrEven=(no)=>{
    if(no%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
findOddOrEven(14);
oddOrEven(21);