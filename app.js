
// 1. pop - method:

var fruit = ["Apple", "Mango", "Pineapple"]
fruit.pop()
console.log(fruit)

// 2.push-method

var number = ["1", "2", "3"]
number.push("4")
console.log(number)


//3.shift-method

var color = ["red", "Blue", "green"]
color.shift();
console.log(color)


// 4.unshift-method

 var languages = ["HTML", "CSS", "JAVA"]
 languages.unshift("C++");
 console.log(languages)

// 5.slice-method

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursaday", "Friday", "Saturday"]
var days = day.slice(1, 6)
console.log(days)


// 6. reverse-method

var word = ["S", "A", "N", "A",];
 var wordreverse = word.reverse()
 console.log(wordreverse)


// 7.concat-method

var fruit = ["Apple", "Banana", "Orange"];
var vegetable = ["Carrot", "Tomato", "Onion"];
var concatArray = fruit.concat(vegetable)
console.log(concatArray)


// 8. join-method]

var sentence = ["This", "is", "a", "PJS","Assignment",];
var sentence = sentence.join(" ");
console.log(sentence);

//9.splice-method

var numbersRemove = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbersRemove.splice(1, 6);
console.log(numbersRemove);

// 10.map-method

var Num = [1, 2, 3, 4];
var Numbers = Num.map(num => num * 2);
console.log(Numbers);


// 11.filter-method

var Age = [15,20,25,26,27];
var ages = Age.filter((age) => age > 21 );
console.log(ages)


// 12.find method

var books = [{ title: "Book1", pages: 100 }, { title: "Book2", pages: 350 }, { title: "Book3", pages: 150 }];
var Pages = books.find(books => books.pages > 300);
console.log(Pages);


// 13.every-method

var score = [69, 70, 75, 78, 82]
var examscore = score.every((num) => num > 60);
console.log(examscore)


// 14.Some-method

var temperature = [20, 25, 30, 40]
var temp = temperature.some((temp) => temp > 30);
console.log(temp)


// 15.  forEach method

var names = ["john"];
names.forEach(names => {
    console.log("Hello " + names);
});

// 16.includes Method

var cities = ["Karachi", "Islamabad", "Lahore"]
var city = cities.includes("Karachi")
console.log(city);

//17.reduce.number

var number = [1, 2, 3, 4, 5, 6]
var sum = number.reduce((total, num) =>
    total + num,);
console.log(sum)


// 18.indexOf method

var colors = ["Blue", "Black", "Green"]
var color = colors.indexOf("Green")
console.log(color)



// 19.lastIndexOf method

var Number = [1, 2, 3, 4, 2, 5,]
var num = Number.lastIndexOf(2)
console.log(num)


// 20.toString method


var mixdata = [20, "John", false]
var Data = mixdata.toString();
console.log(Data)




