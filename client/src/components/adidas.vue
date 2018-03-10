<template lang="html">
  <div class="adidas">
    <button class='animated zoomInRight' v-on:click="getAdidas" type="button" name="button">Get Adidas Info</button>
    <section v-show='isOpen'>
      <ul v-for="shoe in shoes" :key="shoe.id">
        <chart1 :shoe="shoe"></chart1>
        <li>
          <h6>Model: {{shoe.model}}</h6>
          <small>Size: {{shoe.size}}</small>
          <br>
          <small>Color: {{shoe.color}}</small>
          <br>
          <small>Retail Price: {{shoe.retail}}</small>
          <br>
          <small>Resell Price: {{shoe.resell}}</small>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import chart1 from '@/components/chart1'
export default {
  name: 'adidas',
  components:{
    chart1,
  },
  data() {
    return {
      seen: false,
      isOpen: false,
      shoes: [],
      retail: [],
      resell: [],
    }
  },
  methods: {
    getAdidas() {
      let url1 = 'https://shoe-tracker.herokuapp.com/adidas'
      fetch(url1)
        .then(response => response.json())
        .then(response => {
          this.shoes = response.adidas
          this.isOpen = !this.isOpen
      })
    },
  }
}
</script>

<style lang="css" scoped>

</style>
