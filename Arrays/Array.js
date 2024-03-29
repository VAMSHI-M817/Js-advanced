 //An Array is the collection of various datatypes

 var array = ["vamshi", true, 69, 69.9, { name: "vamshi" } + "<hr>"]

 document.write(array)

 // Array Methods

 // 1) PUSH() METHOD :- Adds or more elements to the end of an array and returns the new length of array

 let ArrayPush = ["PUSH() METHOD", "vamshi", "developer"]

 ArrayPush.push("Fullstack", 69)

 document.write(ArrayPush + "<br>")
 document.write("Length of an array : " + ArrayPush.length + "<hr>")
 //----------------------------------------------------------------------
 // 2) POP() METHOD :- Removes the last element of an array and returns that element

 let ArrayPop = ["POP() METHOD", "Item1", "Item2", "Item3"]

 let DelItem = ArrayPop.pop()

 document.write(ArrayPop + "<br>")

 //To see deleted Items by pop method
 document.write("Deleted Item by POP is : " + DelItem + "<hr>")
 //----------------------------------------------------------------------

 // 3)Shift() METHOD :- Removes the first element of an array and returns the element 

 let ArrayShift = ["Delhi", "SHIFT() METHOD", "Hyderabad", "Kukatpally", "Miyapur"]

 let delItem = ArrayShift.shift()

 document.write(ArrayShift + "<br>")//Deleted First elemet using shift method here 

 //Finding Length of an array
 document.write("Length of an array is : " + ArrayShift.length + "<br>")
 //To find deleted item
 document.write("Deleted element is : " + delItem + "<hr>")
 //------------------------------------------------------------------------

 // 4)UNSHIFT() METHOD :- Adds one or more elements to the beginning of an array and returns the new length

 let ArrayUnshift = ["Vamshi", "Tirupathi", "Kumar"]

 //Lenght of array before applying method
 document.write("Length of array before is : " + ArrayUnshift.length + "<br>")

 //Adding an element to beginnig of an array 
 ArrayUnshift.unshift("UNSHIFT() METHOD")

 //Printing an elements after adding an element
 document.write(ArrayUnshift + "<br>")

 //Finding the length of an array after applying method
 document.write("Lenght of an array after using method is :" + ArrayShift.length + "<hr>")

 // 5) CONCAT() METHOD :- It combines two or more arrays and returns a new array
 let Arrayconcat1 = ["CONCAT() METHOD", "Bike", "Car", "Bicycle"]
 let Arrayconcat2 = ["Engine", "Horn", "Fuel"]
 let Arrayconcat3 = ["Rider", "Helmet", "Glasses"]

 let Concat = Arrayconcat1.concat(Arrayconcat2, Arrayconcat3 + "<br>")

 document.write(Concat)
 document.write("Length of an concated array : " + Concat.length + "<hr>")

 // 6) Join() METHOD :- Creates a new string by concatinating all the elements of an array
 // and returns a string by a specified seperator.

 let ArrayJOIN = ["JOIN() METHOD", "Vamshi", "Kumar", "Tirupathi"]


 let JOIN = ArrayJOIN.join("&")

 document.write(JOIN + "<hr>")

 //7) SLICE() METHOD :- Returns a shallow copy of a portion of an array into a new array

 let laptop = ["SLICE() METHOD", "Dell", "Processor", "Graphic", "8gb", 50000, 45000, 35000]

 //Printing a seperate portion of an array using index
 let Dell = laptop.slice(0, 5)

 document.write(Dell + "<hr>")

 // 8) SPLICE() METHOD :- Changes the content of an array by 
 //removing, replacing, or adding elements.

 let SPLICE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

 //    //Removing Elements
 //    var arraySplice = SPLICE.splice(0,4)

 // //Replacing Elements
 // var arraySplice = SPLICE.splice(4, 1, "vamshi replaced")

 //Adding elements
 var arraySplice = SPLICE.splice(3, 0, "SPLICE() ADDING")

 document.write(SPLICE + "<br>")

 document.write(arraySplice + "<hr>")

 // 9) indexOf() METHOD :-  Returns the first index at which given element 
 //can be found in an array or -1 if it is not present 

 let indexEmp = ["indexOf () METHOD", "Name", "Role", "Salary", "Timings", "Age"]

 // //finding the index of an element in array

 // let arrayEmp = indexEmp.indexOf("Role")
 let arrayEmp = indexEmp.indexOf("Contact")

 if (arrayEmp === -1) {
     indexEmp.push("Contact")
 }
 document.write(indexEmp + "<hr>");

 // 10) forEach() METHOD :- It executes a provided function once for each element in the array 

 let Score = [1, 2, 3, 4, 5];

 Score.forEach(function (Cricket) {
     document.write(Cricket * 10 + "<br>")
 })

 let even = [10, 20, 30, 40, 45, 55, 65]

 even.forEach(function (findeven) {
     if (findeven % 2 == 0) {
         document.write(findeven + " : is even number" + "<br>")
     }
     else if (findeven % 2 !== 0) {
         document.write(findeven + ": is Odd number" + "<hr>")
     }
     else {
         document.write("Invalid")
     }
 })

 //array literal
 // var arr = ["vamshi", 12, true, 4.5, 'dev',]
 // document.write(arr)

 //array object
 // var vm = new array()

 //Iterating array 
 //using array literal

 const arr = [10, 12, 13, 14, 15];
 for (i = 0; i < arr.length; i++) {
     document.write(`${arr[i]}<hr>`)

 }



 //for of 
 let chintu = [10, 12, 13, 14, 15, 16];
 for(let m of chintu){
     document.write(m + "<br>");
 }

 //array object
 var good = new user();
 good[0] = "vamshi";
 good[1] = "role";
 good[2] = "salary";
 document.write(good)
