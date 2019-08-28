<template>
 <section class="column text-left">
    <button @click.once="addToPaths" class="btn btn-primary ">+</button>
 </section>  
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'ControlComponents',
  methods: {
    ...mapActions(["addToPaths"])
  }
}
</script>
