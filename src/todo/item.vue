<template>
    <div  :class="['todo-item',todo.completed ? 'completed': '']">
        <span>#{{todo.id}}</span>
        <label
            @click="finish"
        >{{todo.content}}</label>
        <button
            class="destory"
            @click="delNow"
        ></button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        }
    },
    // created() {
        // console.log(this.todo)
    // },
    methods: {
        delNow() {
            this.$emit('del', this.todo.id)
        },
        finish() {
            this.$emit('finished', this.todo.id, this.todo.completed)
        }
    }
}
</script>
<style scoped>
    .todo-item{
        position: relative;
        background-color: #fff;
        font-size: 24px;
        display: flex;
        border-bottom: 1px solid rgba(0,0,0,0.06);
    }
    span{
        line-height: 58px;
        padding: 0 20px;
    }
    label{
        white-space: pre-line;
        word-break: break-all;
        padding: 15px 60px 15px 15px;
        margin-left: 45px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
        cursor: pointer;
    }
    .completed {
        color: #d9d9d9;
        text-decoration: line-through;
    }
    .toggle{
        text-align: center;
        width: 50px;
        height: 30px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        border: none;
        appearance: none;
        outline: none;
    }

    .destory{
        position: absolute;
        top: 0;
        right: 10px;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0;
        font-size: 30px;
        color: #cc9a9a;
        margin-bottom: 11px;
        transition: color 0.2s ease-out;
        background-color: transparent;
        appearance: none;
        border-width: 0;
        cursor: pointer;
        outline: none;   
    }
    .destory:after{
        content: 'x';  
    }

</style>