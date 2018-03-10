<template lang="html">
  <div class="nike">
    <button class='animated zoomInLeft' v-on:click="getNike" type="button" name="button">Get Nike Info</button>
    <section v-if="isOpen">
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
  name: 'nike',
  components:{
    chart1,
  },
  data(){
    return{
      isOpen: false,
      seen:false,
      shoes: []
    }
  },
  methods: {
    getNike(){
    let url2 = 'https://shoe-tracker.herokuapp.com/nike'
      fetch(url2)
        .then(response => response.json())
        .then(response => {
          this.shoes=response.nike
          this.isOpen=!this.isOpen
      })
    }
  }
}
</script>

<style lang="css" scoped>

</style>
