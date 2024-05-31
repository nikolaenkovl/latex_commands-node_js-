<template>
    <div id="commandMain">
        <div id="headerCommand" class="text-center">
            <h4>Команды математики</h4>
        </div>
            <div id="addFormForAdmin" v-if="currentUser">
                <div v-if="isAdmin">
                <form @submit="addCommand">
                    <input type="text" name="name" id="name" class="form-control" placeholder="Название команды" required v-model="commands.name">
                    <input type="text" name="description" id="description" class="form-control" placeholder="Описание команды" required v-model="commands.description">
                    <input type="text" name="example" id="example" class="form-control" placeholder="Пример" required v-model="commands.example">
                    <input type="submit" id="addButton" class="btn btn-success" value="Добавить команду">
                </form>
                </div>
            </div>
        <!--<router-link class="btn btn-success mb-2" id="add_btn" to="/addCommand">Добавить команду</router-link>-->
        <ul class="list-group">
            <li class="list-group-link" id="lst" v-for="(command, index) in commands" :key="index"><a class="list-group-item list-group-item">
                <router-link class="nav-link active" :to="{
                        name: 'command-math-details',
                        params: { id: command.id }
                    }">
                    {{command.name}}
                </router-link></a>
            </li>
        </ul>
    </div>
</template>

<script>
    import http from "../../http-common";
    export default {
        name: "ListMathCommands",
        data() {
            return {
                commands: []
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
            getCommands() {
                http
                    .get("/commandByCategory/3")//команды с категорией 3 - математические команды
                    .then(response => {
                        this.commands = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            addCommand() {
                var data = {
                    name: this.commands.name,
                    description: this.commands.description,
                    example: this.commands.example,
                    category: 3

                };
                http
                    .post("/addCommand",data)
                    .then(() => {
                        this.$router.push('/listMathCommands');
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        mounted() {
            this.getCommands();
        }
    }
</script>
<style>

.list-group{
    height: 50%;
}
#name,#description,#example,#addButton{
    width: 20%;
    padding-left: 1%;
    margin-left:1%;
}
.commandMain
{
    background-color: #bcd2dd;
    width:100%;
    height: 150%;
}
.list-group
{
    height: 50%;
}
#headerCommand
{
    width:100%;
    height:15%;
    background-color: #bcd2dd;
    color:#9c0434;
    padding-top: 2%;
    padding-bottom: 2%;
    
}
#addFormForAdmin
{
    width:100%;
}
form
{
    width:100%;
    display: inline-flex;
    padding: 1%;
}
</style>