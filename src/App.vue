<template>
  <div id="app" class="container ">
    <section class="column text-left">
       <button @click.once="addDistanceComponents" class="btn btn-primary ">+</button>
    </section>  
    <section class="column">
     <Inputs  v-for="(path, index) in paths"  :key="index"
     />
    </section>
    <section class="column">
      <h3>Журнал запросов:</h3>
      <ul>
        <li  v-for="(log, index) in getData" :key="index"> {{log}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import Inputs from './components/DistanceComponents.vue';
import { mapGetters } from "vuex";

export default {
  name: 'app',
  components: {
    Inputs
  },
  data() {
    return {
      paths: []
    };
  },
  computed: {
    ...mapGetters(["getData"])
  },
  created() {
    this.addDistanceComponents();
  },
  methods: {
    addDistanceComponents(){
      this.paths.push({ sourceAddress: " ",destinationAddress: " "});
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
    list-style-type: none;
}
</style>
