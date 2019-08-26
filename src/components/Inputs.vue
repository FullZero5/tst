<template>
 <section>
   <form role="form">
     <div class="row">
       <div class="form-group col-12 col-md-4 px-1">
         <label for="source">{{TextPlaceholderSourceAddress}}</label>
         <input
          type="text"
          class="form-control"
          id="source"
          aria-describedby="Начальная точка"
          placeholder="Пункт А"
          v-model="sourceAddress"
          @blur="searchCoordinates('source', sourceAddress)">
       </div>
       <div class="form-group col-12 col-md-4 px-1">
         <label for="source">{{TextPlaceholderDestinationAddress}}</label>
         <input
          type="text"
          class="form-control"
          id="destination"
          aria-describedby="Конечная точка"
          placeholder="Пункт Б"
          v-model="destinationAddress"
          @blur="searchCoordinates('destination', destinationAddress)"
        >
       </div>
       <div class="form-group col-12 col-md-2 px-1">
         <label>&nbsp;</label>
         <button class="btn btn-primary w-100 is-primary pr-2"
         @click.prevent="calculate">Go</button>
       </div>
       <div class="form-group col-12 col-md-2 px-1"> 
        <label>&nbsp;</label>
        <button class="btn btn-primary w-100 is-primary pr-2"
        @click.prevent="clearInput"
        >Clear</button>
       </div>
     </div>
   </form>
   </section>
</template>

<script>
import axios from "axios";

export default {
  name: 'InputsComponents',
  props: {
    TextPlaceholderSourceAddress: {
      type: String,
      default: "Пункт-A"
    },
    TextPlaceholderDestinationAddress: {
      type: String,
      default: "Пункт-Б"
    },
    sourceAddress: {
      type: String,
      default: ""
    },
    destinationAddress: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      sourceAddress: this.sourceAddress,
      destinationAddress: this.destinationAddress,
      coords: {},
      calculatedDistance: null,
      btnEnabled: false,
      loading: false
    }
  },
  methods: {
   clearInput(){
      this.sourceAddress = this.destinationAddress = "";
   },
   searchCoordinates(ref, address){
     console.log(ref, address)
   },
   calculate(){
     
   }
  },
}
</script>
