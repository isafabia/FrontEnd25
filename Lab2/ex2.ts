// (a) Create an interface with the required properties and methods
interface TaskManager 
{
    myArray: string[];  // array of strings
    addTask(task: string): number;  // method to add a task
    listAllTasks(): void;  // method to list all tasks
    deleteTask(task: string): number;  // method to delete a task
}

// implement the interface in a class
class TaskList implements TaskManager
 {
    myArray: string[] = ["Apple", "Banana", "Pear"];  
    // (b) function to add a task
    addTask(task: string): number 
    {
        this.myArray.push(task);
        console.log(`Task "${task}" added to the list.`);
        return this.myArray.length;
    }
  // (c) function to list all tasks
  listAllTasks(): void 
  {
    console.log("Tasks in the list:");
    this.myArray.forEach(task => console.log(task));
  }

   // (d) Function to delete a task
   deleteTask(task: string): number 
   {
    const index = this.myArray.indexOf(task);
    if (index !== -1) 
        {

        this.myArray.splice(index, 1);

        console.log(`Task "${task}" removed from the list.`);

    } else {

        console.log(`Task "${task}" not found.`);

    }

    return this.myArray.length;

}

}
