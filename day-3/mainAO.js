// const people = ["jena", "dor", "albert", "ronit",];

// for(let peopleLoop in people){
// 	console.log (people[peopleLoop])
// }

// for(let peopleLoop in people){
// 	console.log (peopleLoop)
// }


// const people = ["jena", "dor", "albert", "ronit",];
// for(let x of people){
// 	console.log(`One day I will work at ${x}` ) 
// }
// const people = ["jena", "dor", "albert", "ronit",];

// for(let peopleLoop in people){
// 	console.log (people[peopleLoop])
// }

// for(let peopleLoop in people){
// 	console.log (peopleLoop)
// }

// debugger;
// for(let x of people){
// 	console.log(`One day I will work at ${x}` ) 
// }

// let time = 0;

// while(time<10){
// 	console.log(time)
// 	time++
// }




// for(let i = 0; i<people.length;i++){
// 	console.log(people[i])
// }







// const people = ["jena", "dor", "albert", "ronit",];


// const age = [11,22,33,44]


// for(i=0; i<people.length; i++){

// 	console.log(people[i] + age[i])
// }





// let sum = 0;
// let array = [1, 2 , 4, 5, 3, 2, 1, 4, 3,];
// for(i=0; i<array.length; i++){
// 	sum += array[i]
// 	console.log(sum)
// console.log(array[i])
// }


// let sum = 0;
// let array = [1, 2 , 4, 5, 3, 2, 1, 4, 3,];
// for(i=0; i<array.length; i++){
// 	sum += array[i]
// 	// console.log(sum)
// 	// console.log(array.length)
// }



// console.log(sum/9)






// let nume = []
// let i = 1;
// while (nume.length < 100) {
// 	nume.push(i)
// 	i++
// }

// console.log(nume)

// let car = {
//     item : "red",
//     toTheBeginning: true,
//     items: [`hi`,`hi2`,`hi3`]
// }
// if (car.toTheBeginning){
// 		car.items.unshift(car.item)
// }
// console.log(car)


// const human = {
//     age: 0
// }

// const babyNameKey = "name"
// const babyNameValue = "Goojibear"

// human["name"]="Jorjet"

// human.name = "Halisy"



// let person = {
// 	first : "daniel",
// 	last : "dani"
// }
// person.first="toamshemesh"








// let p1 ={
// 	name:"Jill",
// 	age:"32",
// 	city:"deathmark",
// }



// let p2 ={
// 	name:"Robert",
// 	age:"31",
// 	city:"deathmark",
// }

// if (p1.age === p2.age||p1.city === p2.city){
// 	console.log(`yay`)
// }else {console.log("bulbul")}




// let myList= [
// 	{
// 		name: "sadist"
// 		,type: "guessIt"
// 	},
// 	{
// 		name: "palani"
// 		,type: "kashmir"
// 	}
// ]


// myList[0]["type"] = "kushnir"
// myList[0].type = myList[0]
// console.log(myList)

// myList.splice(1 , 1)


// let myList2 = [
// 	{
// 		name: "kakit"
// 	},
// 	{
// 		name: "kakut"
// 	}
// ] 

// myList.push(...myList2)



// let library = {
// 	books: [
// 		{
// 			title: "dabush",
// 			author: "kosemak",
// 		},
// 		{
// 			title: "toam",
// 			author: "kosemak1",

// 		}
// 	]
// }

// myList.push(library.books)

// const reservations = {
// 	Bob: { claimed: false },
// 	Ted: { claimed: true }
//   }

//   const name = prompt('Please enter the name for your reservation');

// if (name == "Ted"){
// 	alert(true)
// } else {
// 	alert(false)
// }
// console.log(reservations)
// console.log(reservations.Ted)
// console.log(reservations.Bob)
// console.log(reservations.Ted.claimed)

// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

// for(let companyIndex in companies){
// 	console.log(companies[companyIndex])
//   }

//   for(let company of companies){
// 	console.log(`one day ill work at ` + company)
//   }


let array1 = ["a" , "b"]
let array2 = [4 , 5]

for(let i=0; i<2;i++){

	console.log(array1[i]+array2[i])
}

let array4 = [1,2,3,4,5,6];
let sum = 0;

for(let i=0; i<array4.length; i++){
	sum += array4[i]
	sum = sum % 15
	console.log(sum)

}

let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for(let num in nums){

console.log(nums[num]+ " " + num)
}

let names = ["Ashley", "Donovan", "Lucas"]
let ages = [23, 47, 18]
let people = []
let objects1 = {}
for(let i  = 0; i <names.length; i++){
	objects1[i] = {name:names[i],age:ages[i]} 
	obj = objects1[i]
	people.push(obj)
}
console.log(people)





sum = sum/6
console.log (sum)


let array7 = [];
for(i = 0; i < 100; i++){
	console.log(array7.push( i= i% ))
}

123214 % 2 === 0
			// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
			// const genes1 = genes.concat()
			// console.log(genes1)
			// genes1.splice(1 -1, 0, 'FXT')
			// console.log(genes1)
			// genes1.splice(4 -1, 0, 'CRYZ')
			// console.log(genes1)
			// let lastIndex2 = genes1.length -1;
			// genes1[lastIndex2] = "AZIN2"
			// console.log(genes1)
			// 	let obj ={
			// 		color:"string",
			// 		numWheels:10,
			// 		isFancy:true,
			// 	};

			// 	let obj1 = {
			// 		color: "tototo",
			// 		boolean: true,
			// 		items:["stam", "ani", "cotev",]
			// 	};
			// 	console.log(obj1["color"])


			// 	let objects = [obj , obj1];
			// 	console.log(objects[1].color)

			// 	obj.color = "not astring"
			// 	console.log(obj)


			// 	let a = obj







			// let p1 = {
			// 	name: "robert",
			// 	age: 20,
			// 	city: "holon"

			// };

			// let p2 = {
			// 	name: "jill",
			// 	age: 2,
			// 	city: "hoon"

			// };

			// if (p1.age===p2.age || p1.city===p2.city){
			// 	console.log("Jill wanted to date Robert")
			// }
			// else{
			// 	console.log("Jill wanted to date Robert, but couldn't")
			// }






			// 	let myList = [
			// 		{
			// 			username: "toam",
			// 			password: "1234",
			// 			spells:["Shazam", "Abrakdbra", "Hokospokos", "Boo",]
			// 		},

			// 		{
			// 			username: "toam",
			// 			password: "1234",
			// 		},
			// 			spells: ["ditm", "ican", "iknow",]

			// 	];



			// 		myList[0].spells[3] = "Shlagazem";
			// 		console.log (myList)
			// 		myList[0].spells.splice(1,1)
			// 		console.log(myList)






			// let myList2 = [
			// 	{
			// 		user:"toam",
			// 		player:"fighter",
			// 	},


			// 	{
			// 		user:"toam",
			// 		player:"assasin",
			// 	}
			// ];

			// myList.push(...myList2);

			// console.log(myList);





			// let library = {
			// 	books:[
			// 		{
			// 			title:"spidermen",
			// 			author:"i dont know :)"
			// 		},

			// 		{
			// 			title:"green-arrow",
			// 			author:"i dont know :)"
			// 		},

			// 		{
			// 			title:"cooke-arrow",
			// 			author:"i dont know :)"
			// 		},
			// 	],

			// }

			// myList.push(library.books[0])
			// console.log(myList)


			// const myStuff =[
			// 	"keys",
			// 	"wood",
			// 	"home",
			// 	"pens",

			// ];


			// const notMyStuff =[
			// 	"keys",
			// 	"wood",
			// 	"home",
			// 	"pens",

			// ];


			// console.log(myStuff[1])//Give me the "wood";
			// console.log(myStuff.length)//Give me 4
			// //index = [0, 1, 2, 3,]
			// const lastIndex = (myStuff.length-1);//Give me the lest index
			// // console.log(myStuff[lastIndex]); //Give me the last item
			// console.log(myStuff[lastIndex]+ myStuff[0])
			// myStuff[1] = "world";
			// myStuff.push("helloooooo");
			// console.log(myStuff)
			// myStuff.unshift("helloooooo2");
			// console.log(myStuff)
			// myStuff.push("add1", "add2", "add3",)
			// console.log(myStuff)

			// // myStuff.push(notMyStuff)
			// // console.log(myStuff)

			// myStuff.push(...notMyStuff)
			// console.log(myStuff)
			// console.log(notMyStuff)
			// myStuff.splice(1,5)//should delete from point 1 5 items
			// console.log(myStuff)
			// // splice(1=index , 5=how much do you want to delete)
			// myStuff.splice(1 -1 ,0, 'hey1')
			// console.log(myStuff)
			// let removeItems = myStuff.splice(3,1)
			// console.log(removeItems);
			// console.log(myStuff)
			// removeItems = myStuff.splice(1)
			// console.log(removeItems)//Remove 1 from the index 1 
			// console.log(myStuff)//make the array with the only index 1 



			// const lastIndex1 = myStuff.length-1;
			// console.log(myStuff[lastIndex1])
			// let removeBe = myStuff.splice(lastIndex1)
			// console.log(myStuff)
			// console.log(removeBe)


















































































// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
// const genes1 = genes.concat()
// console.log(genes1)
// genes1.splice(1 -1, 0, 'FXT')
// console.log(genes1)
// genes1.splice(4 -1, 0, 'CRYZ')
// console.log(genes1)
// let lastIndex2 = genes1.length -1;
// genes1[lastIndex2] = "AZIN2"
// console.log(genes1)
// 	let obj ={
// 		color:"string",
// 		numWheels:10,
// 		isFancy:true,
// 	};

// 	let obj1 = {
// 		color: "tototo",
// 		boolean: true,
// 		items:["stam", "ani", "cotev",]
// 	};
// 	console.log(obj1["color"])


// 	let objects = [obj , obj1];
// 	console.log(objects[1].color)

// 	obj.color = "not astring"
// 	console.log(obj)


// 	let a = obj







// let p1 = {
// 	name: "robert",
// 	age: 20,
// 	city: "holon"

// };

// let p2 = {
// 	name: "jill",
// 	age: 2,
// 	city: "hoon"

// };

// if (p1.age===p2.age || p1.city===p2.city){
// 	console.log("Jill wanted to date Robert")
// }
// else{
// 	console.log("Jill wanted to date Robert, but couldn't")
// }






// 	let myList = [
// 		{
// 			username: "toam",
// 			password: "1234",
// 			spells:["Shazam", "Abrakdbra", "Hokospokos", "Boo",]
// 		},

// 		{
// 			username: "toam",
// 			password: "1234",
// 			spells: ["ditm", "ican", "iknow",]
// 		},

// 	];



// 		myList[0].spells[3] = "Shlagazem";
// 		console.log (myList)
// 		myList[0].spells.splice(1,1)
// 		console.log(myList)






// let myList2 = [
// 	{
// 		user:"toam",
// 		player:"fighter",
// 	},


// 	{
// 		user:"toam",
// 		player:"assasin",
// 	}
// ];

// myList.push(...myList2);

// console.log(myList);





// let library = {
// 	books:[
// 		{
// 			title:"spidermen",
// 			author:"i dont know :)"
// 		},

// 		{
// 			title:"green-arrow",
// 			author:"i dont know :)"
// 		},

// 		{
// 			title:"cooke-arrow",
// 			author:"i dont know :)"
// 		},
// 	],

// }

// myList.push(library.books[0])
// console.log(myList)


// const myStuff =[
// 	"keys",
// 	"wood",
// 	"home",
// 	"pens",

// ];


// const notMyStuff =[
// 	"keys",
// 	"wood",
// 	"home",
// 	"pens",

// ];


// console.log(myStuff[1])//Give me the "wood";
// console.log(myStuff.length)//Give me 4
// //index = [0, 1, 2, 3,]
// const lastIndex = (myStuff.length-1);//Give me the lest index
// // console.log(myStuff[lastIndex]); //Give me the last item
// console.log(myStuff[lastIndex]+ myStuff[0])
// myStuff[1] = "world";
// myStuff.push("helloooooo");
// console.log(myStuff)
// myStuff.unshift("helloooooo2");
// console.log(myStuff)
// myStuff.push("add1", "add2", "add3",)
// console.log(myStuff)

// // myStuff.push(notMyStuff)
// // console.log(myStuff)

// myStuff.push(...notMyStuff)
// console.log(myStuff)
// console.log(notMyStuff)
// myStuff.splice(1,5)//should delete from point 1 5 items
// console.log(myStuff)
// // splice(1=index , 5=how much do you want to delete)
// myStuff.splice(1 -1 ,0, 'hey1')
// console.log(myStuff)
// let removeItems = myStuff.splice(3,1)
// console.log(removeItems);
// console.log(myStuff)
// removeItems = myStuff.splice(1)
// console.log(removeItems)//Remove 1 from the index 1 
// console.log(myStuff)//make the array with the only index 1 



// const lastIndex1 = myStuff.length-1;
// console.log(myStuff[lastIndex1])
// let removeBe = myStuff.splice(lastIndex1)
// console.log(myStuff)
// console.log(removeBe)
