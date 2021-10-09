<template>
  <div class="sheet">
    <v-container>
      <v-row>
        <v-col class="d-none d-lg-block">
          <v-row>
            <div class="mx-auto">
              <h1 class="title-1 orange--text">Sigec</h1>
              <p class="subtitle white--text">Sistema de gestão de casos</p>
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
          <v-card width="300" height="500" elevation="8">
            <div class="d-lg-none d-xl-flex">
              <h1 class="title-2 orange--text">Sigec</h1>
              <v-divider class="divider mx-auto"></v-divider>
            </div>
            <v-card-title class="deep-purple--text justify-center">Login</v-card-title>
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
                  dense
                ></v-text-field>
                <v-text-field
                  label="Senha"
                  v-model="password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  class="rounded-pill"
                  outlined
                  dense
                ></v-text-field>
                <v-btn
                  class="rounded-pill"
                  type="submit"
                  color="indigo darken-4"
                  block
                  dark
                  >Entrar</v-btn
                >
                <v-card-actions class="deep-purple--text">
                  <v-spacer></v-spacer>
                  <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                  Criar uma conta?
                  <a href="#" class="pl-2" style="color: #000000"
                    ><v-icon class="deep-purple--text">mdi-arrow-right-bold</v-icon></a
                  >
                </v-card-actions>
                <v-btn
                  class="d-lg-none d-xl-flex rounded-pill fb-btn blue--text" 
                  type="submit"
                  depressed 
                  outlined
                  block
                >Acessar Transparência
              </v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions class="wrapper">
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
  margin-top: 5%;
  margin-right: 20%;
}

.mx-auto{
  margin-top: 15%;
}

.fb-btn .v-btn--outlined {
    border: thin solid #CCCCCC;
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

.title-1{
  font-size: 75px; 
  font-weight: normal;
}

.title-2{
  font-size: 40px; 
  font-weight: normal;
  margin-left: 33%
}

.divider{
  margin-top: -1%; width:50%;
}

.subtitle{
  font-size: 30px; 
  font-weight: normal;
}
@media (min-width: 360px) and (max-width: 414px) {
  
  .v-card{
    height: 600px !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }
}

@media only screen and (max-width: 320px) {
  .v-card{
    height: 530px !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .wrapper {
    height: 200px;
}

}

@media only screen and (max-width: 540px) {
  .v-card{
    height: 530px !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .wrapper {
    height: 200px;
}

}

@media only screen and (max-width: 280px) {
  .wrapper {
    margin-left: -5%;
}

}

</style>