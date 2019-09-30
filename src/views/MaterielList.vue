<template>
<div>
    <h3>Liste des matériel pour </h3>
<ul>
        <li v-for="materiel in value" v-bind:key="materiel.id">
            {{ materiel.id}} - {{ materiel.libelle }}
        </li>
      
    </ul>
</div>
</template>

<script>
import axios from 'axios'
export default{ 
    props: ["value"],  
}

</script>

<style lang="stylus" scoped>


</style>