<template>
 <section>
   <form role="form">
     <div class="row">
       <div class="form-group col-12 col-md-4 px-1">
         <label for="source">Пункт А</label>
         <input
          type="text"
          class="form-control"
          id="source"
          aria-describedby="Начальная точка"
          placeholder="Пункт А">
       </div>
       <div class="form-group col-12 col-md-4 px-1">
         <label for="source">Пункт Б</label>
         <input
          type="text"
          class="form-control"
          id="destination"
          aria-describedby="Конечная точка"
          placeholder="Пункт Б"
        >
       </div>
       <div class="form-group col-12 col-md-4 px-1">
         <label>&nbsp;</label>
         <button class="btn btn-primary w-100 is-primary pr-2">Go</button>
       </div>
     </div>
   </form>
   </section>
</template>

<script>
export default {
  name: 'InputsComponents',
  props: {
    msg: String
  }
}
</script>
