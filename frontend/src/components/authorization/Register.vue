<template>
    <div id="commandMain" >
        <div id="headerCommand" class="text-center">
            <h4>Регистрация аккаунта</h4>
        </div>
        <div id="form1">
    <form id class="form-vertical" name="form" @submit="handleRegister">
        <div v-if="!successful">
        <div class="form-group text-center">
        <div class="form-group"><input type="text" class="form-control" name="name" placeholder="ФИО" v-model="user.name" required/></div>
        <div class="form-group"><input type="text" class="form-control" name="username" placeholder="Логин" v-model="user.username" required/></div>
        <div class="form-group"><input type="password" class="form-control" name="password" placeholder="Пароль" v-model="user.password" required/></div>
        <div id ="register" class="form-group">
            <button class="btn btn-success">Зарегистрировать</button>
        </div>
            </div>
        </div>
        <div v-if="message" id="mes" class="alert alert-info" role="alert">{{message}}</div>
    </form>
</div>
</div>
</template>









<script>
    export default {
        name: 'RegisterUser',
        data() {
            return {
                user: {
                    name: "",
                    username: "",
                    password: ""
                },
                successful: false,
                message: ''
            };
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        mounted() {
            if (this.loggedIn) {
                // Авторизация прошла успешно, переходим к главной странице.
                // Используем такую конструкцию, а не this.$router.push, так как требуется перезагрузить страницу для обновления локального хранилища
                window.location.href = '/';
            }
        },
        methods: {
            handleRegister(e) {
                e.preventDefault();
                this.message = '';

                this.$store.dispatch("auth/register", this.user) // обращаемся к методу register, который определён в auth.service.js
                    .then( data => {
                        this.message = data.message;
                        this.successful = true;
                    })
                    .catch(e => {
                            this.message = e.response.data.message;
                        }
                    );

            }
        }
    };
</script>
<style>

    .form-group
    {
        margin-top:1%;
    }
    #register
    {
        margin-top:1%;
        margin-left:1%;
    }
    #mes{
        margin-left: 10%;
    }

</style>