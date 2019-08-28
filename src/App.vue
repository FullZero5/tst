<template>
  <div id="app" class="container ">
    <app-Controls/>
    <app-Distance  v-for="(path, index) in paths"  :key="index"/>
    <app-Log/>
  </div>
</template>

<script>
import Controls from './components/ControlComponents.vue';
import DistanceComponents from './components/DistanceComponents.vue';
import LogComponents from './components/LogComponents.vue';

export default {
  name: 'app',
  components: {
    appControls:Controls,
    appDistance:DistanceComponents,
    appLog:LogComponents
  },
  data() {
    return {
      paths: []
    };
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
@import './assets/styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

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
