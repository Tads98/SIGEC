<template>
  <v-card class="mx-auto" max-width="750" style="margin-top: 5%">
    <v-card-title id="position">Adicionar um novo vínculo</v-card-title>

    <v-form @submit.prevent="addVinculo">
      <v-text-field
        v-model="perfil"
        label="Cargo"
        name="cargo"
        type="text"
        class="rounded-pill"
        outlined
        dense
      >
      </v-text-field>
      <v-text-field
        label="Estabelecimento de Saúde"
        name="estabelecimento"
        type="text"
        class="rounded-pill"
        outlined
        dense
      >
      </v-text-field>

      <v-card-actions id="button-add">
        <v-btn
          type="submit"
          class="rounded-pill mb-5 btn-lg"
          color="indigo darken-4"
          dark
        >
          <v-icon> mdi-plus-circle-outline</v-icon>
          Adicionar Vínculo
        </v-btn>

        <v-btn class="d-none d-lg-block rounded-pill mb-5 btn-lg" color="red darken-1" dark>
          <v-icon> mdi-close-circle-outline</v-icon>
          Cancelar
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "adicionarVinculo",
  
  data() {
    return {
      perfil: "",
      estabelecimento: "",
    };
  },

  methods: {
     addVinculo() {
       axios({
         method: "post",
         url: "vinculos",
         data: {
           perfil: this.perfil,
           estabelecimento: this.estabelecimento,
         },
       })
         .then((response) => {
           this.perfil = "";
           this.estabelecimento = "";

           console.log(response);
          //  this.$router.push("/dashboard");
         })
         .catch((error) => {
           console.log(error);
         });
     },
   },

  // methods:{
  //   addVinculo(){
  //     const formData = {
  //       perfil: this.perfil,
  //       estabelecimento: this.estabelecimento
  //     }
  //     axios.post('vinculo', formData)
  //     .then(response => console.log(response))
  //     .catch(error => (console.log(error)))
  //   }
  // }
};
</script>

<style scoped>
#position,
.v-form {
  max-width: 400px;
  margin-left: 5%;
  color: indigo;
}

#button-add {
  margin-left: 5%;
}
</style>
