/* 
Task 1: Gamer Profile Manager 🎮 🎮 🎮 🎮

You are creating a system to manage a gamer's profile. 

Steps:
1. Create an object named `gamerProfile` with the following properties:
   - `username` (string): The gamer's username.
   - `level` (number): The gamer's level.
   - `isOnline` (boolean): Whether the gamer is currently online.

2. Write a function `updateOnlineStatus` that:
   - Takes the `gamerProfile` object and a boolean `status` as arguments.
   - Updates the `isOnline` property based on the `status`.
   - Logs: "[username] is now online." or "[username] is now offline."

Example:
Input:
const gamerProfile = {
  username: "ShadowSlayer",
  level: 5,
  isOnline: false
};

updateOnlineStatus(gamerProfile, true);

Expected Output:
"ShadowSlayer is now online."
*/

// ✍️ Solve it here ✍️

const gamerProfile = {
  username: "ShadowSlayer",
  level: 5,
  isOnline: false
};
const updateOnlineStatus = function(gamerProfile, status) {
   gamerProfile.isOnline = status;
   console.log(`${gamerProfile.username} is ${gamerProfile.isOnline ? "online" : "not online"}`);
}
updateOnlineStatus(gamerProfile, true);

/*
Task 2: Dress Inventory Checker 👗 👗 👗 👗 👗

You are helping a fashion designer manage their dress inventory.

Steps:
1. Create an object named `dress` with the following properties:
   - `name` (string): Name of the dress.
   - `size` (string): Size of the dress.
   - `inStock` (boolean): Whether the dress is available.

2. Write a function `checkAvailability` that:
   - Takes the `dress` object as an argument.
   - Logs: "[name] is available in size [size]." if the dress is in stock.
   - Logs: "[name] is out of stock." if the dress is not available.

Example:
Input:
const dress = {
  name: "Evening Gown",
  size: "M",
  inStock: true
};

checkAvailability(dress);

Expected Output:
"Evening Gown is available in size M."
*/

// ✍️ Solve it here ✍️


const dress = {
  name: "Evening Gown",
  size: "M",
  inStock: true
};
const checkAvailability = function(dressObj) {
   if (dressObj?.inStock && dressObj.inStock !== undefined) {
      console.log(`${dressObj.name} is available in size ${dressObj.size}.`);
   } else if (!dressObj?.inStock && dressObj.inStock !== undefined) {
      console.log(`${dressObj.name} is not in stock.`);
   } else {
      console.log(`${dressObj} is not an appropiate object.`);
   }
}
checkAvailability("P");
checkAvailability(dress);

/*
Task 3: Supercar Feature Adder 🚗 🚗 🚗 🚗

You are building a configurator for a supercar. 

Steps:
1. Create an object named `supercar` with the following properties:
   - `model` (string): The car's model.
   - `price` (number): The base price.
   - `features` (object): An object with a `color` property.

2. Write a function `addFeature` that:
   - Takes the `supercar` object and a feature name (string) as arguments.
   - Adds the feature to the `features` object and sets it to `true`.
   - Logs: "[featureName] has been added to [model]."

3. Use a **for...in loop** to log all the features of the `supercar` object.

Example:
Input:
const supercar = {
  model: "Ferrari SF90",
  price: 500000,
  features: {
    color: "Red"
  }
};

addFeature(supercar, "turbo");

Expected Output:
"Turbo has been added to Ferrari SF90."
Features:
- color: Red
- turbo: true
*/

// ✍️ Solve it here ✍️
const supercar = {
  model: "Toyota Prius",
  price: 4000,
  features: {
    color: "Gray"
  }
};

const addFeature = function(supercar, newFeature) {
   supercar.features[newFeature] = true;
   console.log(supercar.features ? supercar.features : "This object is undefined.");
}

addFeature(supercar, "maximumOverdrive");