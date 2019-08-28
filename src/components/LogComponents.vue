<template>
 <section class="column text-left">
     <h3>Журнал запросов:</h3>
     <ul class="list-group list-group-flush">
         <li v-for="(log, index) in getLog"
           :key="index"
           class="list-group-item"
           :class="[(log.status) ? 'list-group-item-success':'list-group-item-warning']"
         >{{log.text}}</li>
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
