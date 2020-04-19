<template>
    <section class="real-app">
        <input
            type="text"
            class="add-input"
            placeholder="please input"
            @keyup.enter="add"
        >
        <Item
            :todo="todo"
            v-for="todo in todos"
            :key="todo.id"
            @del="delTodo"
            @finished="finish"
        />
    </section>
</template>


<script>
import Item from './item.vue';
let id = 0;
export default {
    data() {
        return {
            todos: []
        }
    },
    components: {
        Item,
    },
    methods: {
        add(e) {
            this.todos.unshift({
                id: id ++,
                content: e.target.value.trim(),
                completed: id % 2 === 0 ? true : false,
            })
            e.target.value = ''
        },
        finish(id, completed) {
            this.todos = [
                ...this.todos.splice(0, this.todos.findIndex(i => i.id === id )),
                Object.assign({}, this.todos[this.todos.findIndex(i => i.id === id )], { completed: !completed }),
                ...this.todos.splice(this.todos.findIndex(i => i.id === id ) + 1)
            ]
        },
        delTodo(id) {
            this.todos.splice(this.todos.findIndex(i => i.id === id ) ,1)
        }
    }
}
</script>

<style scoped>
    .real-app{
        width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #666;
    }
    .add-input{
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: none;
        outline: none; 
        color: inherit; 
        box-sizing: border-box;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>