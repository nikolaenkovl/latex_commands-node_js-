<template>
    <div>
        <div id="headerCommand" class="text-center">
            <h4>Избранные</h4>
        </div>
        <ul class="list-group">
            <li class="list-group-link" id="lst" v-for="(elem, index) in commands" :key="index"><a class="list-group-item list-group-item">
                <router-link class="nav-link active" :to="{
                        name: 'command-favorite-details',
                        params: { id: elem.id}
                    }">
                    {{elem.name}}
                </router-link>
            </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import http from "../../http-common";
    export default {
        name: "favoriteCommands",
        data() {
            return {
                commands: []
            };
        },
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        methods: {
            getCommands() {
                http
                    .get("/userCommand/userId="+this.currentUser.id)
                    .then(response => {
                        this.commands = response.data;
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

</style>