import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/todos/1';


interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as ITodo;
  const ID = todo.id;
  const title = todo. title;
  const completed = todo.completed;
  
  logSpec(ID, title, completed);
});


const logSpec = (id:number, title:string, completed:boolean) => {
  console.log(` ${id}`);
  console.log(` ${title}`);
  console.log(` ${completed}`);
};



const today = new Date();
console.log(today.toUTCString());