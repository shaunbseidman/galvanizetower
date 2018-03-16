<template lang="html">
<div class="submitNike">
  <form>
    <div class="listItems">
    <input v-model='model' size = "12" type="text" name="model" placeholder='model'>
    <input v-model='size' size = "5" type="text" name="size" placeholder='size'>
    <input v-model='color' size = "5" type="text" name="color" placeholder='color'>
    <input v-model='retail' size = "5" type="text" name="retail" placeholder='retail'>
    <input v-model='resell' size = "5" type="text" name="resell" placeholder='resell'>
    </div>
  </form>
  <br>
  <button :newShoe="newShoe" v-on:click="addNewShoe" type="button" name="button">Submit New Entry</button>
  <br>
</div>
</template>

<script>
export default {
  name: 'submitNike',
  data(){
    return{
      newShoe:{
        model:'',
        size: '',
        color: '',
        retail: '',
        resell: '',
      },
      model:'',
      size: '',
      color: '',
      retail: '',
      resell: '',
    }
  },
  methods:{
    addNewShoe(entry) {
      alert('submitted')
      let url2 = 'https://shoe-tracker.herokuapp.com/nike'
      fetch(url2, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          model: this.model,
          size: this.size,
          color: this.color,
          retail: this.retail,
          resell: this.resell,
        })
      })
      console.log(this.model);
    }
  }
}
</script>

<style lang="css" scoped>
.listItems{
  flex-grow: left;
  overflow: hidden;
   white-space: nowrap;
}

</style>
