<template>
  <div class="theRealMainTodo">
    <div class="mainTodo">
      <div class="todolabel">
        <h1>what is your name <input type="text" v-model="name" />?</h1>
      </div>
      <form @submit.prevent="addTodo">
        <input type="text" v-model="input_todo" />
        <button>Add Todo</button>
      </form>
      <div v-for="todo in todos" :key="todo" class="todoList">
        <input type="text" v-model="todo.content" />
        {{ todo.createdAt }}
        <i class="bx bxs-trash" @click="deleteTodo(todo)"></i>
      </div>
    </div>
    <div class="description">
      <p>
        <span>Description:</span> <br> <br>The Todo application is a simple web
        application built using Vue.js, a popular JavaScript framework. It
        allows users to create, manage, and keep track of their tasks or to-do
        items. The application stores user data, including the user's name and a
        list of todos, in the browser's local storage so that the data persists
        even after the user closes or refreshes the page. <br> <br>

        <span>Using composition API, watcher, ref, onMounted, v-model.</span>
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
export default {
  name: "todoApps",

  setup() {
    const name = ref("");
    const input_todo = ref("");
    const todos = ref([]);

    const deleteTodo = (todo) => {
      todos.value = todos.value.filter((x) => x !== todo);
    };

    const addTodo = () => {
      if (input_todo.value.trim() === "") {
        alert("input todo!");
        return;
      }

      const date = new Date();
      const thisDay = date.getDate();
      const thisMonth = date.getMonth() + 1;
      const thisYear = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const ampm = hours >= 12 ? "pm" : "am";

      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

      todos.value.push({
        content: input_todo.value,
        createdAt: `${formattedHours}:${formattedMinutes}${ampm}`,
      });

      input_todo.value = "";
    };

    watch(name, (newVal) => {
      localStorage.setItem("name", newVal);
    });
    watch(
      todos,
      (newVal) => {
        localStorage.setItem("todos", JSON.stringify(newVal));
      },
      { deep: true }
    );

    onMounted(() => {
      name.value = localStorage.getItem("name") || "";
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        try {
          todos.value = JSON.parse(storedTodos);
        } catch (error) {
          console.error("Error parsing JSON from localStorage:", error);
        }
      }
    });

    return {
      name,
      todos,
      input_todo,
      addTodo,
      deleteTodo,
    };
  },
};
</script>

<style scoped>
.theRealMainTodo {
  display: flex;
  width: 60vw;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url("https://designstripe-secure.imgix.net/scene-snapshots/f3514252-6d16-4b20-a425-e23cb203fd96/1674867962894/default?auto=format&fit=clip&h=850&mark=%2Fwatermark.png&markfit=max&markalign=middle%2Ccenter&markw=1&markh=1&s=2b58ef2a29071aa7ee44fe693168a684");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 20px 20px 9px #a1a1a1, -20px -20px 9px #ffffff;
}
.mainTodo {
  height: 50vh;
  padding: 15px;
  border-radius: 10px;
  border-radius: 50px;
  border-radius: 9px;
  box-shadow: 20px 20px 9px #a1a1a1, -20px -20px 9px #ffffff;
}
.todolabel {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}
form {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
form input {
  margin-right: 20px;
}
.todoList {
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  align-items: center;
}
.bx {
  font-size: 30px;
}
input {
  padding: 5px;
  border-radius: 5px;
}
.description {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 30%;
}
.description span {
  font-size: 20px;
  font-weight: 800;
}
p {
  font-weight: 800;
}
</style>
