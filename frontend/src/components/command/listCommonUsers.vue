<template>
    <div id="commandMain">
        <div id="headerCommand" class="text-center">
            <h4>Список зарегистрированных пользователей</h4>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(user, index) in users" :key="index">
                <font color="#0EB2C3" size="5px">ID</font> : <font size="4px">{{user.id}}</font><br><font color="#0EB2C3" size="5px">Имя</font> : <font size="4px">{{user.name}}</font><br> <font color="#0EB2C3" size="5px">Username</font> :<font size="4px">{{user.username}}</font>  
            </li>
        </ul>
    </div>
</template>

<script>
    import http from "../../http-common";
    export default {
        name: "listCommonUsers",
        data() {
            return {
                users: []
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
            getUsers() {
                http
                    .get("/findCommonUsers")
                    .then(response => {
                        this.users = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
        },
        mounted() {
            this.getUsers();
        }
    }
</script>
<style>

.list-group{
    height: 50%;
}
#name,#description,#example{
    width: 15%;
}


</style>