<template>
  <div id="app">
    <nav id="navlane" class="navbar navbar-expand-lg">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><router-link id ="navlink" class="nav-link active" to="/listMathCommands"><font size="5px">Команды математики</font></router-link><span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><router-link id ="navlink" class="nav-link active" to="/listTextCommands"><font size="5px">Команды для оформления текста</font></router-link><span class="sr-only"></span></a>
      </li>

<div v-if="currentUser">
      <div v-if="isAdmin">
        <li class="nav-item active">
        <a class="nav-link" href="#"><router-link id ="navlink" class="nav-link active" to="/listCommonUsers"><font size="5px">Пользователи</font></router-link><span class="sr-only"></span></a>
        </li>
      </div>
      </div>
      
      
      
  
      <li class="nav-item active">
        <a class="nav-link" href="#"><div v-if="currentUser"><router-link id ="linkToFavorite" class="nav-link active" :to="{
                        name: 'favoriteCommands',
                        params: { user_id: currentUser.id }
                    }">
                    <font size="5px">Избранные команды</font>
                </router-link></div><span class="sr-only"></span></a>
      </li>
    </ul>
  </div>
  <div id="profile">
  <div v-if="currentUser">
          <div class="enter-font" size="4">
            <p id="username"><font size="5px">{{ currentUser.name }}</font></p>
          </div>
        <a href @click.prevent="logOut" id = "logOut" class="navbar-brand text-light">
          <font size="5px">Выйти</font>
        </a>

      </div>
      <div v-else>
          <router-link to="/login" id = "logIn" class="navbar-brand text-light">
            <font size="5px">Войти</font>
          </router-link>
      </div>
      </div>
</nav>

  </div>
  
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {

            };
        },
      computed: { // вычисляемые свойства
          currentUser() {
              return this.$store.state.auth.user;
          },
          isAdmin(){
                return this.$store.state.auth.user.isAdmin;
            }
      },
      methods: {
          logOut() {
              this.$store.dispatch('auth/logout'); // обращаемся к методу logout, который определён в auth.service.js
              window.location.href = '/login'; // // Используем такую конструкцию, а не this.$router.push, так как требуется перезагрузить страницу для обновления локального хранилища
          }
      }
    };
</script>

<style>
  
  #item
  {
    margin-left: 15%;
  }
  #linkToFavorite
  {
    color: #fc867b;
  }
  #navlane
  {
    background-color: #295256;
  }
  .navbar
  {
    width:100%;
    height: 50%;
  }
  #app
  {
    width: 100%;
    height: 100%;

  }
  #profile
  {
    margin-right: 2%;
  }
  #username
  {
    
    font-size: 120%;
    color: #fc867b;
  }
  #logOut,#logIn
  {
    margin: 10%;
  }
  #nav-link{
    font-size: 25px;
  }
</style>