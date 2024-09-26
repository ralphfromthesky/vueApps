<template>
  <div
    class="theRealMainTodo"
    :class="{ night: store.state.isNight, light: !store.state.isNight }"
  >
    <div
      class="mainTodo"
      :class="{ night: store.state.isNight, light: !store.state.isNight }"
    >
      <div class="todolabel">
        <h1>what is your name ?</h1>
        <input type="text" v-model="name" />
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
      <div class="description2">
        The Todo application is a simple web application built using Vue.js, a
        popular JavaScript framework. It allows users to create, manage, and
        keep track of their tasks or to-do items. The application stores user
        data, including the user's name and a list of todos, in the browser's
        local storage so that the data persists even after the user closes or
        refreshes the page.
      </div>
      <br>
      <span>Using composition API, watcher, ref, onMounted, v-model.</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useStore } from "@/store/store";
export default {
  name: "todoApps",

  setup() {
    const store = useStore();
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
      store,
    };
  },
};
</script>

<style scoped>
.light {
  background-color: transparent;
}
.night {
  border: 2px solid gray;
  border-radius: 10px;
}
.theRealMainTodo {
  display: flex;
  width: 60vw;
  justify-content: center;
  align-items: center;
}
.mainTodo {
  height: 50vh;
  padding: 15px;
  border-radius: 10px;
  border-radius: 50px;
  border-radius: 9px;
  border: 2px solid black;
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
  border: 1px solid gray;
}
.description {
  display: flex;
  flex-direction: column;
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
button {
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: rgb(89, 221, 221);
  border: none;
  cursor: pointer;
}
@media screen and (max-width: 430px) {
  .description2 {
    width: 70vw;
  }

  .todolabel {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
  }
}
</style>
