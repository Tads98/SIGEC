<template>
  <div class="sheet">
    <v-container>
      <v-row>
        <v-col class="d-none d-lg-block">
          <v-row>
            <div class="mx-auto">
              <h1 class="orange--text" style="font-size: 75px; font-weight: normal;">Sigec</h1>
              <p class="white--text" style="font-size: 30px; font-weight: normal;">Sistema de gestão de casos</p>
              <v-btn
                depressed 
                outlined 
                class="rounded-pill fb-btn white--text"
                >Acessar Transparência
              </v-btn>
            </div>
          </v-row>
        </v-col>
        <v-col lg="4">
          <v-card elevation="4" height="580">
            <v-card-title class="deep-purple--text justify-center">Autocadastro</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitForm">
                <v-text-field
                  v-model="nome"
                  label="Nome"
                  name="nome"
                  type="text"
                  class="rounded-pill"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="cpf"
                  label="CPF"
                  name="cpf"
                  type="text"
                  class="rounded-pill"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="dataNasc"
                  label="Data de Nascimento"
                  name="data"
                  type="date"
                  class="rounded-pill"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  name="email"
                  type="email"
                  class="rounded-pill"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="telefone"
                  label="Telefone"
                  name="telefone"
                  type="phone"
                  class="rounded-pill"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="senha"
                  label="Senha"
                  name="senha"
                  type="password"
                  class="rounded-pill"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="resenha"
                  label="Confirmação de senha"
                  name="re-senha"
                  type="password"
                  class="rounded-pill"
                  outlined
                  dense
                ></v-text-field>
                <v-btn
                  type="submit"
                  class="rounded-pill"
                  color="indigo darken-4"
                  block
                  dark
                  dense
                  >Cadastrar</v-btn
                >
                <v-card-actions class="text--secondary">
                  <v-spacer></v-spacer>
                  <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link>
                    Already have an account? <a href="#" class="pl-2" style="color: #000000">Sign In</a> -->
                </v-card-actions>
              </v-form>
            </v-card-text>
            <v-card-actions class="wrapper">
              <v-img
                src="@/assets/Group 5.svg"
                alt="Lais"
                contain
                height="35"
              ></v-img>
              <v-img
                src="@/assets/g10-8.svg"
                alt="UFRN"
                contain
                height="35"
              ></v-img>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cadastro",
  data() {
    return {
      nome: "",
      cpf: "",
      dataNasc: "",
      email: "",
      telefone: "",
      senha: "",
      resenha: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        nome: this.nome,
        cpf: this.cpf,
        dataNasc: this.dataNasc,
        email: this.email,
        telefone: this.telefone,
        senha: this.senha,
        resenha: this.resenha,
      };

      axios
        .post("auth/cadastro", formData)
        .then((response) => {
          console.log(response);
          this.$router.push("/");
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }

            console.log(JSON.stringify(error.response.data));
          } else if (error.message) {
            console.log(JSON.stringify(error.message));
          } else {
            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script>

<style lang="css" scoped>
.sheet {
  height: 100vh;
  overflow: hidden;
  background-image: url("../assets/background.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  margin-top: 2%;
  margin-right: 20%;
}

.mx-auto {
  margin-top: 15%;
}

.wrapper {
    position: relative;
    height: 300px;
    width: 300px;
}

.wrapper img {
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>