import Vue from "vue";
import "./css/index.css";
import logo from "./img/favPage.svg";
import App from "./app.vue";
var vm = new Vue({
  el: "#app",
  template: "<App />",
  components: { App }
});
