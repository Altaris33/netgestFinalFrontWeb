<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Création d'un client (menuItem) -->
        <v-list-item @click="goTo('clientCreate')">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Créer un client</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Liste des Clients (menuItem) -->
        <v-list-item @click="goTo('clientList')">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Liste des clients</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <!-- Modification d'un client (menuItem) -->
        <v-list-item @click="goTo('clientList')">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Modifier un client</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Ajout/Modification d'un matériel (menuItem) -->
        <v-list-item @click="goTo('clientList')">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Ajouter/Modifier un matériel</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; Altaris 2019</span>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    drawer: false
  }),
  methods: {
    goTo(routeName){
      this.$router.push({
        name: routeName
      })
    }
  }
};
</script>
