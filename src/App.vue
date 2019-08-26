<template>
  <div id="app" class="container ">
    <section class="column text-left">
       <button @click="addInput" class="btn btn-primary ">+</button>
    </section>  
    <section class="column">
     <Inputs
      v-for="(path, index) in paths"
          :key="index"
          :TextPlaceholderSourceAddress="path.titleSourceAddress"
          :TextPlaceholderDestinationAddress="path.titleDestinationAddress"
          :sourceAddress="path.sourceAddress"
          :destinationAddress="path.destinationAddress"
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
import Inputs from './components/Inputs.vue';
import { mapGetters } from "vuex";

function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    }
  };
}

let letter = makeIterator(["A", "B", "C", "D", "I","F", "G", "K"]);

export default {
  name: 'app',
  components: {
    Inputs
  },
  data() {
    return {
      paths: [
        {
          titleSourceAddress: "Пункт-"+letter.next().value,
          sourceAddress: "Краснодар",
          titleDestinationAddress: "Пункт-"+letter.next().value,
          destinationAddress: "Москва"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getData"])
  },
  methods: {
    addInput(){
      if(this.paths.length<4){
        this.paths.push({
          titleSourceAddress: "Пункт-"+letter.next().value,
          sourceAddress: "Темрюк",
          titleDestinationAddress: "Пункт-"+letter.next().value,
          destinationAddress: "Сочи"
        });
      }
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
