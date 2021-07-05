import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/todos/1';


interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  console.log(response.data);
  const todo = response.data;
  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  console.log(` ${ID}`);
  console.log(` ${title}`);
  console.log(` ${completed}`);
  

});
