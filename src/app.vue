<template>
    <div id="app">
        <div id="cover">
            <el-row>
                <el-col :span="3">
                    <Menus></Menus>                
                </el-col>
                <el-col :span="21">
                    <Header></Header>
                    <Todo></Todo>
                    <Footer></Footer>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import Header from './todo/header.vue';
import Todo from './todo/todo.vue';
import Footer from './todo/footer.jsx';
import Menus from './menu/menus.vue';
export default {
    components: {
        Header,
        Footer,
        Todo,
        Menus,
    }
}
</script>

<style scoped>
    #app{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    #cover{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #999;
    }
</style>