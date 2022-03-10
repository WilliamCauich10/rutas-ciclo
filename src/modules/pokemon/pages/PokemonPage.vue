<template>
<!-- $route.params.id // otra forma de poner el get parameter desde el html -->
    <h1>Pokemon: <span>#{{ id }}</span> </h1>
    <div v-if="pokemon">
        <img 
            :src="pokemon.sprites.front_default"
            :alt="pokemon.name">

    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: Number,
            requiered: true
        }
    },
    data() {
        return {
            // id: null // this.$route.params.id // otra forma de poner el get parameter desde el html
            pokemon: null
        }
    },
    created() {
        this.getPokemon()
        // //console.log(this.$route);
        // const { id } = this.$route.params
        // // this.id = id 
        // console.log(id)
    },
    methods: {
        async getPokemon () {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then ( r => r.json())
                this.pokemon = pokemon
                console.log(pokemon);
            } catch (error) {
                this.$router.push('/')
                console.log('No hay nada que hacer aqui');
            }
        }
    },
    watch: {
        id() {
            this.getPokemon()
        }
    }
}
</script>