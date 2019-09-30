<template>
    <div>
        <h1>
            {{client.nom}}
        </h1>
        <materiel-list v-model="client.materiels"></materiel-list>
    </div>
</template>


<script>
import axios from 'axios'
import MaterielList from './MaterielList'

// Evolution à apporter -> un incident pourra être géré en apparaissant sur la page d'info du Client (avec son ID)
export default {
    components: {
        MaterielList
    },
    data(){
        return {
            client:{
                nom: null,
                materiels: []
            }
        }
    },
    mounted(){
        axios.get(`/clients/${this.$route.params.idClient}`)
        .then( response => this.client = response.data)
    }
}
</script>