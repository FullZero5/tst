<template>
 <section class="column text-left">
    <button @click.once="addDistance" class="btn btn-primary ">+</button>
 </section>  
</template>

<script>
export default {
  name: 'ControlComponents',
  methods: {
    addDistance(){
      this.$parent.addDistanceComponents();
    }
  }
}
</script>
