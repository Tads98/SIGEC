<template>
  <v-app>
    <navbar v-if="$route.name!='login' && $route.name!='autoCadastro' && $route.name!='transparencia'"/>
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

  beforeMount(){
    this.$store.dispatch('getVinculos');
  },

  mounted(){
    this.verificarAutenticacao();
  },

  methods:{
       verificarAutenticacao(){
           var auth = this.$route.name != 'login' && this.$route.name != 'transparencia';
           if(auth && !this.$store.state.isAuthenticated){
               this.$router.push({name: 'login'});
           }
       }
   },

  data: () => ({
    //
  }),
};
</script>
