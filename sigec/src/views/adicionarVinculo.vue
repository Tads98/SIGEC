<template>
<div>
  <v-overlay :value="overlay">
    <v-card light width="50vw">
      <v-btn to="dashboard" absolute right icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
        <div class="d-flex flex-column justify-center align-center ">
          <v-icon color="#03972A" size="7em">
             mdi-check-circle
          </v-icon>
          <v-card-title>
            Vinculo adicionado com sucesso
          </v-card-title>
        </div>
    </v-card>
  </v-overlay>

  
<v-container>
  <v-btn text 
  to="/dashboard"
  >
  <v-col>
    <v-row>
      <v-icon>mdi-arrow-left-drop-circle</v-icon>
      <p class="mt-4">voltar</p>
    </v-row>
  </v-col>
  </v-btn>
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
        v-model="estabelecimento"
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
          class="add rounded-pill mb-5 btn-lg"
          color="indigo darken-4"
          dark
        >
          <v-icon> mdi-plus-circle-outline</v-icon>
          Adicionar Vínculo
        </v-btn>

        <v-btn
          to="dashboard"
          class="d-none d-lg-block rounded-pill mb-5 btn-lg"
          color="red darken-1"
          dark
        >
          <v-icon> mdi-plus-circle-outline</v-icon>
          Cancelar
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</v-container>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "adicionarVinculo",
  
  data() {
    return {
      perfil: "",
      estabelecimento: "",
      overlay: false,
    };
  },

  methods: {
     addVinculo() {
      const formData ={
        perfil: this.perfil,
        estabelecimento: this.estabelecimento,
      }
       axios({
         method: "post",
         url: "vinculos",
         data:formData 
       })
         .then((response) => {
           this.perfil = "";
           this.estabelecimento = "";

           console.log(response);
            this.$router.push("/dashboard");
         })
         .catch((error) => {
           console.log(error);
         });
         this.$store.commit("setVinculo", formData)
         this.overlay = true;
     },
   },
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

@media (min-width: 360px) and (max-width: 414px) {
  .mx-auto{
    width: 85%;
  }

  .add{
    width: 110%;
    margin-left: -23px;
  }
}

@media (min-width: 360px) and (max-width: 414px) {
  .mx-auto{
    width: 85%;
  }

  .add{
    width: 110%;
    margin-left: -23px;
  }
}

@media (min-width: 320px) and (max-width: 540px) {
  .mx-auto{
    width: 95%;
  }

  .add{
    width: 110%;
    margin-left: -23px;
  }
}

@media only screen and (max-width: 280px) {
  .mx-auto{
    width: 95%;
  }

  .add{
    width: 110%;
    margin-left: -23px;
  }

  #position{
    font-size: 15px;
  }
}
</style>
