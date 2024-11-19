const fs = require("fs"); //file system

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  // your code here
  const firstName = data1
  fs.readFile("./lastname.txt", "utf-8", (err, data1) => {
    const lastName = data1
    fs.readFile("./age.txt", "utf-8", (err, data1) => {
      const age = data1
      fs.readFile("./hobbies.txt", "utf-8", (err, data1) => {
        const hobbies = data1
        const hobbiesArray = data1.split('\n').map(item => item.trim()).filter(item => item);
        //printing user's data
        console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbiesArray}`)
      })
    }) 
  })

  if (err) throw err;
  console.log(data1);
})