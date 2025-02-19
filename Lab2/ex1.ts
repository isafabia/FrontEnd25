// (a) create an array of strings with initial values
let myArray: string[] = ["Apple", "Banana", "Pear"];

// (b) function to add an item
function addItem(item: string): number 
{

    myArray.push(item);
    console.log(`Item "${item}" added to the array.`);
    return myArray.length;
}

// (c) function to list all items
function listAllItems(): void
 {
    console.log("Items in the array:");
    myArray.forEach(item => console.log(item));
}

// (d) function to delete an item
function deleteItem(item: string): number
 {
    const index = myArray.indexOf(item);
    if (index !== -1)
         {
        myArray.splice(index, 1);
        console.log(`Item "${item}" removed from the array.`);

         } else
          
        {
        console.log(`Item "${item}" not found.`);
    }
    return myArray.length;
}