<template>
  <div class="sheet">
    <v-container>
      <v-row>
        <v-col class="d-none d-lg-block">
          <v-row>
            <div class="mx-auto">
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
                >Acessar Transparência
              </v-btn>
            </div>
          </v-row>
        </v-col>
        <v-col lg="4">
          <v-card height="490" elevation="8">
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
                  v-model="password"
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
                <v-btn
                  class="d-lg-none d-xl-flex rounded-pill"
                  type="submit"
                  color="indigo darken-4"
                  x-large
                  w-25
                  block
                  dark
                >Acessar Transparência
              </v-btn>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },

  methods: {
    async submitForm() {
      const formData = {
        email: this.email,
        password: this.password,
      };

      await axios
        .post("/auth/login", formData)
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
.sheet {
  height: 100vh;
  overflow: hidden;
  background-image: url("../assets/background.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.container{
  margin-top: 8%;
  margin-right: 20%;
}

.mx-auto{
  margin-top: 15%;
}
</style>