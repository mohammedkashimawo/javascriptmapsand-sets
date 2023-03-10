//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log(map.get(1));
map.set(44,17);
console.log(map.get(44));

console.log(map.has(true));
map.set(1,'444');
console.log(map.get(1));



let akonso = {nam:'john'}

let joy = new Map();

joy.set(akonso,'ephonsa');

//console.log(joy.get(akonso));

let recipeMap = new Map([['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries


  
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  };
  




  let majid = new Map([
    ['name','mojeed'],
    ['foolishs','age'],
    
    ['occupation','techie']]
    
    );

  for (let abddl of majid.keys())

{

    console.log(abddl);
}

for(let abddl of majid.values( )){
  console.log(abddl)
}


var asss= "sssssssssss";
console.log(asss.length);



//sets methods are used to hold the distinct elements of a array..
//so it si good to say a set is also an array but however it is such an array with only unique elements


var arr =[1,2,3,4,5,6,7,5,4,3,2,1,8];var  myset = new Set(arr);
console.log(myset);


myset.add(30);

console.log(myset);
myset.add('one');

console.log(myset);

myset.add([20,33,12,199,9]);


console.log(myset);

console.log(myset.size);
myset.delete('one');
console.log(myset);


//a set is an unorderd list of items ..thus u no longer need to access each elements with index as used in normal arrays.
//since each element is uniques, u can thus access it directly.

myset.clear();
console.log(myset);

//the last thing to talk about is myset 
var mob=new Array( );

myset = new Array;//yuo can return a set back to normal array also so as to be able to allow aray methods on it.
console.log(myset);for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 + i);
}

(function() {
  var a = b = 5;
})();

console.log(b);

async function getData() {
  return await Promise.resolve('Hello!');
}

const data = getData();
console.log(data);
function resolveAfter10Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      return console.log('resolved');
    }, 10000);
  });
}

function comparison()  
{  
var number=10;  
if(number==="10")  
return console.log('aa')  
else  
return console.log('kkk')  

}  

var string1 = "Fishingweeksare";  
 var intvalue = 35;  
 console.log( string1 + intvalue );  