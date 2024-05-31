<template>
  <div id="app">
    <navbar/>
    <router-view />
  </div>
</template>

<script>
    import Navbar from './components/Navbar'
  
    export default {
        name: 'App',
        components: {
            Navbar: Navbar
        }
    }
</script>

<!--определение стилей-->
<style>

#commandData{
    align-items: center;
}

textarea{
	resize: none;
	width: 300px;
	height: 100px;
}

#data{
    align-items: center;
    
}
#back
{
    padding-top:1%;
    font-size: 30px;
    color:#fc867b;
   
}

#h42,#h41{
    width: 100%;
    padding-top: 2%;
    font-size: 30px;
}
#h43{
    
    padding-top: 2%;
    font-size: 20px;
}

#h40{
    padding-top: 2%;
    font-size: 30px;
}

#commandExampleM{
    padding-top: 3%;
    width: 100%; 
}

p{
    text-align: center;
}

#button1{
    margin-top: 5%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin-top: 20px;
    height:100%;
  }

  #headerCommand{
    width:100%;
    height:15%;
    background-color: #bcd2dd;
    color:#9c0434;
    padding-top: 2%;
    padding-bottom: 2%;
}
#lst{
    font-size: 25px;
}

</style>