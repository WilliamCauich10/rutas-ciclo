<template>
    <h1>About Page</h1>
    <hr>
    <h2> {{name}} </h2>
    <button @click="OnchangeName">
        Cambiar nombre
    </button>
</template>

<script>
export default {
    data() {
        return{
            name: 'William'
        }
    },
    methods: {
      OnchangeName()  {
          this.name = 'Jesus'
      }
    },

   beforeCreate() {
       console.log('beforeCreate');
   },
   created() {
    //    peticiones HTTP
       console.log('created');
   },
   beforeMount() {
       console.log('beforeMount');
   },
   mounted() {
       console.log('mounted');
   },
   beforeUpdate() {
       console.log('beforeUpdate');
   },
   updated() {
       console.log('updated');
   },
   activated() {
       console.log('activated');
   },
   beforeUnmount() {
       console.log('beforeUnmount');
   },
   unmounted() {
    //    limpiar
       console.log('unmounted');
   },
   errorCaptured() {
       console.log('errorCaptured');
   },
   renderTracked() {
       console.log('renderTracked');
   },
   renderTriggered() {
       console.log('renderTriggered');
   },
}
</script>