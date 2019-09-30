<template>
    <v-form v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="client.nom"
            label="Nom"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="client.adresse1"
            label="Adresse 1"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="client.adresse2"
            label="Adresse 2"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col
          cols="12"
          >
             <v-btn
             color="success" 
             @click="validate"
             >
             Créer le client    
             </v-btn>

          </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
//creation des objets
import axios from 'axios'
export default {
    data(){
        return {
            valid: false,
            client: {
                nom: null,
                adresse1: null,
                adresse2: null
            }
        }
    },
    methods:{
        goTo(clientId){
            this.$router.push({
                name: "client",
                params: {idClient: clientId}
            })
        },
        validate(){
            if(this.valid){
                axios.post("/clients", this.client)
                .then(response => this.goTo(response.data.id))
            }
        }
    }
}
</script>

<style scoped>

</style>