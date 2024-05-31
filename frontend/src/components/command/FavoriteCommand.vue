<template>
  <div id="commandData" class="text-center" v-if="command">
        <a id="back" class="nav-link text-center"><router-link class="nav-link active" to="/listMathCommands">Назад</router-link><span class="sr-only"></span></a>
            <h4 id="h40"> Название команды : <font color="#0EB2C3">{{command.name}}</font></h4>
            <div id="data" class="col-auto text-center">
                <h4 id="h41">Описание команды</h4>
                <div class="container align-center">
                <h4 id="h43">{{command.description}}</h4>
                </div>
                <h4 id="h42">Пример</h4>
            </div>
                <div v-if="command.category==3" id="commandExampleM">
                <math-jax :latex="command.example" :block="true" />
            </div>
                <div v-else id="commandExampleM">{{command.example}}</div>
                <button id="button2" v-on:click="deleteCommand()" class="btn btn-danger">Удалить</button>
            </div>
        
    
</template>
<script>
    import http from "../../http-common";
    export default {
        name: "command-favorite-details",
        props: ['id'],
        data() {
            return {
                command: null
            };
        },
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        methods: {
            getUserCommand() {
                http
                    .get("/command/"+ this.id)
                    .then(response => {
                        this.command = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            deleteCommand() {
                http
                    .post("/deleteFavoriteCommand/commandId="+this.id)
                    .then(() => {
                        this.$router.push('/UserFavoriteCommands/userId='+this.user_id);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        
        mounted() { // загружаем данные категории
            this.getUserCommand();
        }
    }
</script>
<style>
#commandData
{
    height: 100%;
    width:100%;

}

#deleteButton
{
    width:15%;
}

#button2{
padding-left: 3%;
padding-right: 3%;
margin-top: 3%;
}
</style>