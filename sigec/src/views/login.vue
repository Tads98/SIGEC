<template>
  <v-app>
    <v-main>
      <div>
          <h1>Sigec</h1>
          <p color="white">Sistema de gestão de casos</p>
          <v-btn
                    class="rounded-pill"
                    type="submit"
                    color="indigo darken-4"
                    x-large
                    w-25
                    block
                    dark
                    >Acessar Transparência</v-btn
                  >
      </div>
      <v-container style="margin-top: 10%; margin-left: 60%"> 
        <v-row>
          <v-col lg="4">
            <v-card elevation="4">
              <v-card-title class="justify-center">Login</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="submitForm">
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    name="email"
                    prepend-inner-icon="mdi-email"
                    type="email"
                    class="rounded-pill"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    label="Senha"
                    v-model="senha"
                    name="password"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    class="rounded-pill"
                    outlined
                  ></v-text-field>
                  <v-btn
                    class="rounded-pill"
                    type="submit"
                    color="indigo darken-4"
                    x-large
                    block
                    dark
                    >Entrar</v-btn
                  >
                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
                    <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                    Criar uma conta?
                    <a href="#" class="pl-2" style="color: #000000"
                      ><v-icon>mdi-arrow-right-bold</v-icon></a
                    >
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-img
                  src="@/assets/Group 5.svg"
                  alt="Lais"
                  contain
                  height="30"
                ></v-img>
                <v-img
                  src="@/assets/g10-8.svg"
                  alt="UFRN"
                  contain
                  height="30"
                ></v-img>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
      errors: [],
    };
  },

  methods: {
    async submitForm() {
      const formData = {
        email: this.email,
        senha: this.senha,
      };

      await axios
        .post("auth/login", formData)
        .then((response) => {
          console.log(response);
          // this.login = response.data.data;
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

<style scoped>
main {
  background-image: url("../assets/background.png");
}
</style>