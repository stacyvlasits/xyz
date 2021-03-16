<template>
<div>
  <h2>Coords Form Include</h2>
  <coords-form></coords-form>
</div>
</template>
<script>
  import CoordsForm from '../coords/CoordsForm.vue';
  export default {
    components: {
      'coords-form': CoordsForm
    },
    data: function () {
      return {
        message: 'not updated'
      }
    }
  }
</script>
