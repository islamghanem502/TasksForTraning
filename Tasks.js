/*
THE deffrice between Var and let
*/


const VarFun = ()=>{
    var x = 10;

    if(true){
        var x = 20;
        console.log('x value is : ' , x);
    }

    console.log('x value is : ' , x);

} 

const LetFun = ()=>{
    let y = 10;

    if(true){
        let y = 20;
        console.log('y value is : ' , y);
    }

    console.log('y value is : ' , y);

}

VarFun();
LetFun();


/*
 loops arrayes if statement task ...
*/

const names = ['ahmed' , 'islam' , 'ashraf' , 'omar' , 'smair'];
const ages = [19 , 19 , 22 , 30 , 12];


const giveAges = () =>{
    for(let i=0; i<ages.length; i++){
        console.log(`Mr.${names[i]} is ${ages[i]} old`);
    }
} 
giveAges();




/*
 another one with objects loops ...
*/


const food = [
    { name: 'Pizza', price: 170 },
    { name: 'Chrimp', price: 450 },
    { name: 'beef', price: 400 },
    { name: 'chicken', price: 350 },
    { name: 'drink', price: 35 }
];


const menu = () => {
    let i = 0;
    while (i < food.length) {
        console.log(`${food[i].name}: ${food[i].price}$`);
        i++;
    }
};

menu();



















