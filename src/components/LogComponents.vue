<template>
 <section class="column">
     <h3>Журнал запросов:</h3>
     <ul>
         <li v-for="(log, index) in getLog" :key="index"> {{log}}</li>
     </ul>
 </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'LogComponents',
  computed: {
    ...mapGetters(["getLog"])
  }
}
</script>