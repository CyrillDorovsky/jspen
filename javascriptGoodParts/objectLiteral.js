//***********************************************************
//creating an object
//***********************************************************
var empty_object = {};
var stooge = { 
	"first-name": "Jerome", 
	"last-name": "Howard"
};

//creating a nested object
var flight = { 
	airline: "Oceanic", 
	number: 815, 
	departure: {
		IATA: "SYD", 
		time: "2004-09-22 14:55", 
		city: "Sydney"
	}, 
	arrival: {
		IATA: "LAX", 
		time: "2004-09-23 10:42", 
		city: "Los Angeles"
	}
};

//***********************************************************
//GET
//***********************************************************
//getting object values
stooge["first-name"];   // "Joe"
flight.departure.IATA;  // "SYD"

//some values don't exist
stooge["middle-name"]  // undefined
flight.status;          // undefined
stooge["FIRST-NAME"];   // undefined

//The || operator can be used to fill in default values: 
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

flight.equiptment;         // undefined;
//flight.equiptment.model; // TypeError;
flight.equiptment && flight.equiptment.model; // undefined;

//***********************************************************
//UPDATE
//***********************************************************
//A value in an object can be updated by assignment. If the property name already exists in the object, the property value is replaced:
stooge['first-name'] = 'Jerome';

//If the object does not already have that property name, the object is augmented:
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
	model: 'Boeing 777'
}; 
flight.status = 'overdue';

//***********************************************************
//REFERENCE
//***********************************************************
//Objects are passed around by reference, they are never copied:
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname; // nick is 'Curly' because x and stooge 
			    // are references to the same object
var a = {}, b = {}, c = {}; // a, b, and c each refer to a 
			    // different empty object 
a = b = c = {};		    // a, b, and c all refer to 
			    // the same empty object

print('complete, thanks for running!');
