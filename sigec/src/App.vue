<template>
  <v-app>
    <navbar v-if="$route.name!='login' && $route.name!='autoCadastro'"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
 import navbar from "@/components/parciais/navbar.vue";

export default {
  name: 'App',

    components: {
      navbar,
    },

  data: () => ({
    //
  }),
};
</script>
