<template>
      <div id="commandMain" >
        <div id="headerCommand" class="text-center">
            <h4>Вход в систему</h4>
        </div>
        <div id="form1">
                <form id class="form-vertical" name="form" @submit="handleLogin">
                    <div class="form-group text-center">
                        <div class="form-group">
                    <input type="text" class="form-control" name="username" id="login" placeholder="Логин" v-model="user.username" required/>
                    </div>
                    <div class="form-group"><input type="password" class="form-control" name="password" id="pass" placeholder="Пароль" v-model="user.password" required/></div>
                    <div class="form-group">
                <button id="enter" class="btn btn-success" :disabled="loading">
                    <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                    <span>Войти</span>
                </button>
            </div>
            <a id="reg" class="nav-link">
            <router-link class="nav-link active" id="register" to="/register">
                Зарегистрироваться
        </router-link><span class="sr-only"></span></a>
            <div class="form-group">
                <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
            </div>
        </div>
                </form>
            </div>
    </div>
</template>




<script>
    export default {
        name: 'LoginUser',
        data() {
            return {
                user: {
                    name: "",
                    username: "",
                    password: ""
                },
                loading: false,
                message: ''
            };
        },
        computed: { // вычисляемые свойства
            loggedIn() {
                return this.$store.state.auth.status.loggedIn; // $store - локальное хранилище
            }
        },
        created() {
            if (this.loggedIn) {
                // Авторизация прошла успешно, переходим к главной странице.
                // Используем такую конструкцию, а не this.$router.push, так как требуется перезагрузить страницу для обновления локального хранилища
                window.location.href = '/';
            }
        },
        methods: {
            handleLogin(e) {
                e.preventDefault();
                this.loading = true;
                this.$store.dispatch("auth/login", this.user) // обращаемся к методу login, который определён в auth.service.js
                    .then(() => {
                        window.location.href = '/'; // авторизация прошла успешно, переходим к главной странице. Используем такую конструкцию, а не this.$router.push, так как требуется перезагрузить страницу для обновления локального хранилища
                    })
                    .catch(e => {
                            this.loading = false;
                            this.message = e.response.data.message;
                        }
                    );
            }
        }
    };
</script>

<style>
#reg{
    padding-top:1%;
    font-size: 20px;
    color:#fc867b;

}
    #login
    {
        margin-top:1%;
    }
    #pass
    {
        margin-top:1%;
    }
    #enter
    {
        margin-top: 1%;
        margin-left: 1%;
    }
    #register
    {
        margin-left:1%;
    }
    input[type="text"] {
    width:500px;
}
#form1{
    margin-left:36.3%;
}

</style>