
import MathJax, { initMathJax, renderByMathjax } from 'mathjax-vue3'
import { createApp } from 'vue' // Импорт метода для создания приложения
import App from './App.vue' // Импорт главного компонента
import router from './router' // Маршрутизация
import 'bootstrap/dist/css/bootstrap.css'
import store from './store';
function onMathJaxReady() {
    const el = document.getElementById('commandData')    
    renderByMathjax(el)
  }
  initMathJax({}, onMathJaxReady)
const app = createApp(App).use(MathJax); // Создание экземпляра приложения
app.use(store);
app.use(router); // Подключение маршрутизации
app.mount('#app'); // Привязка экземпляра приложения к странице HTML (находится в public)