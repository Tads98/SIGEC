<template>
<v-app-bar
      app
      color="primary"
      dark
    >
    <h1 class="font-weight-light" style="margin-left: 20%;">SIGEC</h1>
      <v-spacer></v-spacer>
        <p class="d-none d-lg-block mt-5 mr-5">Kelly Gomez</p>
        <v-icon class="mr-5">
            large
            mdi-account-circle</v-icon>
        <div class="text-center">
            <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                >
                 
                <v-icon>
                    large
                    mdi-chevron-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item>
                  <router-link
                    class="text-decoration-none black--text"
                    to="/adicionarVinculo"
                    >Adicionar um vínculo</router-link
                  >
                </v-list-item>
                 <v-list-item>
                  <router-link class="text-decoration-none black--text" to="/meuPerfil"
                    >Meu perfil</router-link
                  >
                </v-list-item>
                 <v-list-item>
                  <a class="text-decoration-none black--text" @click="logout()">Sair</a>
                </v-list-item>
            </v-list>
            </v-menu>
        </div>
    </v-app-bar>
</template>

<script>
  export default {
      methods: {
      logout() {
        this.$store.commit("logout");
        this.$router.push("/");
      },
    },
  };
</script>