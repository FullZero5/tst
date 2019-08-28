<template>
 <section class="column">
   <form role="form">
     <div class="row">
       <div class="form-group col-12 col-md-4 px-1">
         <label for="source">Начальная точка</label>
         <input type="text" class="form-control" id="source" aria-describedby="Начальная точка" placeholder="Начальная точка" v-model="sourceAddress">
       </div>
       <div class="form-group col-12 col-md-4 px-1">
         <label for="source">Конечная точка</label>
         <input type="text" class="form-control" id="destination" aria-describedby="Конечная точка" placeholder="Конечная точка" v-model="destinationAddress">
       </div>
       <div class="form-group col-12 col-md-2 px-1">
         <label>&nbsp;</label>
         <button class="btn btn-primary w-100 is-primary pr-2" @click.prevent="getDistance">Go</button>
       </div>
       <div class="form-group col-12 col-md-2 px-1">
         <label>&nbsp;</label>
         <button class="btn btn-primary w-100 is-primary pr-2" @click.prevent="clearInput">Clear</button>
       </div>
     </div>
   </form>
 </section>
</template>

<script>
import { mapActions } from "vuex";
import gmapsInit from '../utils/gmaps';

export default {
  name: 'DistanceComponents',
  data() {
    return {
      google: null,
      loading: false,
      sourceAddress: "Краснодар",
      destinationAddress:"Сочи"
    }
  },
  async mounted() {
    try {
      this.google = await gmapsInit();
    }
    catch (error) {
      console.error(error);
    }
  },
  methods: {
    ...mapActions(["addToLog"]),
    clearInput() {
      this.sourceAddress = this.destinationAddress = "";
    },
    getCoordinates(sity) {
      const geo = new this.google.maps.Geocoder();
      return new Promise((resolve, reject) => geo
          .geocode({'address': sity}, (results, status) => status === this.google.maps.GeocoderStatus.OK
            ?resolve({
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
              }): reject(new Error(`Cannot find address`))
          ));
    },
    getDataTime() {
      let date = new Date();
      const options = {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      return new Intl.DateTimeFormat('en-US', options).format(date).replace(/\//g, '/').replace(',', '');
    },
    getDistance() {
      
      let data = Promise.all([
          this.getCoordinates(this.sourceAddress),
          this.getCoordinates(this.destinationAddress)
        ])
        .then(results =>{

          let origin = new google.maps.LatLng(results[0].lat, results[0].lng);
          let destination = new google.maps.LatLng(results[1].lat, results[1].lng);
          let service = new google.maps.DistanceMatrixService();

          return new Promise((resolve, reject) => {
            service.getDistanceMatrix({
              origins: [origin],
              destinations: [destination],
              travelMode: "DRIVING",
              unitSystem: google.maps.UnitSystem.metric,
              avoidHighways: false,
              avoidTolls: false
            },
            (resp, status) => resolve({coordinats: resp.rows[0].elements[0].distance}));
          });
        });
      
      data.then((res) => {
        this.addToLog({text:`${this.getDataTime()} ${this.sourceAddress} => ${this.destinationAddress} = ${res.coordinats.text} `, status:true});
      }).catch((err) => {
        this.addToLog({text:err, status:false});
      });
    }
  },
}
</script>
