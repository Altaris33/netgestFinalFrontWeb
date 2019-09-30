<template>
<div>

<ul>
        <li v-for="client in clientList" v-bind:key="client.id"
        @click="goTo(client.id)">
            {{ client.id}} - {{ client.nom }} 
            <v-icon v-on:click.stop="deleteClient(client.id)">mdi-delete</v-icon>    
        </li>
      
    </ul>
</div>
</template>

<script>
import axios from 'axios'
export default{ 
    data() {
        return {
            clientList: []
        }
    },
    methods: {
        loadList(){
            axios.get("/clients")
            .then(response => {
                this.clientList = response.data 
            })
        },
        goTo(clientId){
            this.$router.push({
                name: "client",
                params: {idClient: clientId}
            })
        },
        // on supprime le client avec l'utilisation de l'index pour économiser un appel au Web Service (API Java Spring Boot)
        deleteClient(clientId){
            axios.delete(`/clients/${clientId}`)
            .then( () => this.clientList.splice(this.clientList.indexOf(c => c.id===clientId),1) )
        }    
  },
    mounted(){
        this.loadList()
    }
    
}

</script>

<style lang="stylus" scoped>


</style>