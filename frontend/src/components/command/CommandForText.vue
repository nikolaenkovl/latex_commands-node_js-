<template>
    <div id="commandData" class="text-center" v-if="command">
        <a id="back" class="nav-link"><router-link class="nav-link active" to="/listMathCommands">Назад</router-link><span class="sr-only"></span></a>
            <h4 id="h40"> Название команды : <font color="#0EB2C3">{{command.name}}</font></h4>
            <div id="data" class="col-auto text-center">
                <h4 id="h41">Описание команды</h4>
                <div class="container align-center">
                <h4 id="h43">{{command.description}}</h4>
                </div>
                <h4 id="h42">Пример</h4>
                <div id="commandExampleM">{{command.example}}</div>
            </div>
            
            <div v-if="currentUser">
                {{this.getNotFavoriteCommand()}}
                <div v-for="(command, index) in userNotFavoriteCommands" :key="index">
                    <button id="button1" v-if="command.id==this.id" v-on:click="addToFavorite()" class="btn btn-success">Добавить в избранное</button>
                </div>
            </div>
    </div>
    <div v-else> <p>Выберите команду</p></div>
</template>
<script>
    import http from "../../http-common";
    export default {
        name: "command-text-details",
        props: ['id'],
        data() {
            return {
                command: null,
                userNotFavoriteCommands: []
            };
        },
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            },
            isAdmin(){
                return this.$store.state.auth.user.isAdmin;
            }
        },
        methods: {
            getNotFavoriteCommand() {
                http
                    .get("/notUserCommand/userId="+this.currentUser.id)
                    .then(response => {
                        this.userNotFavoriteCommands = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            getCommand() {
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
                    .post("/deleteCommand/" + this.command.id)
                    .then(() => {
                        this.$router.push('/listTextCommands'); // переходим к списку категорий
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            addToFavorite() {
                var data = {
                    user_id: this.currentUser.id, // передаём массив выбранных категорий
                    command_id: this.id
                };
                http
                    .post("/addUserCommand",data)
                    .then(() => {
                        this.$router.push('/listMathCommands'); // переходим к списку категорий
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        
        mounted() { // загружаем данные категории
            this.getCommand();
            //this.getNotFavoriteCommand();
        }
    }
</script>
<style>

</style>
