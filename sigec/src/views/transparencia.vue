<template>
  <div class="sheet">
    <v-container class="mt-5">
  
      <v-btn text
        to="/dashboard"
        style="border: 1px solid orange"
      >
        <v-icon style="color:orange" class="ml-5">mdi-arrow-left-drop-circle</v-icon>
        <p style="color:orange" class="mt-4 mr-5">voltar</p>
      </v-btn>

      <h1>Transparência</h1>
      <v-row>
        <v-col>
          <v-row class="ma-0">
            <v-card width="100%" color="indigo darken-4" dark>
              <v-card-title class="justify-end"
                ><v-icon>mdi-clipboard-text</v-icon
                >{{ indicadores.tratados }}</v-card-title
              >
              <v-card-text class="text-right"
                ><p>Casos tratados</p></v-card-text
              >
            </v-card>
          </v-row>
          <v-row class="ma-0 mt-2">
            <v-card width="100%" style="border: 1px solid blue">
              <v-card-title class="blue--text justify-end"
                ><v-icon color="blue darken-2">mdi-clipboard-text</v-icon
                >{{ indicadores.suspeitos }}</v-card-title
              >
              <v-card-text class="blue--text text-end"
                ><p>Casos suspeitos</p></v-card-text
              >
            </v-card>
          </v-row>
        </v-col>
        <v-col>
          <v-row class="ma-0">
            <v-card width="100%" style="border: 1px solid green">
              <v-card-title class="green--text justify-end"
                ><v-icon color="green darken-2" id="teste"
                  >mdi-clipboard-text</v-icon
                >{{ indicadores.descartados }}</v-card-title
              >
              <v-card-text class="green--text text-end"
                ><p>Casos descartados</p></v-card-text
              >
            </v-card>
          </v-row>
          <v-row class="ma-0 mt-2">
            <v-card width="100%" style="border: 1px solid orange">
              <v-card-title class="orange--text justify-end"
                ><v-icon color="orange darken-2">mdi-clipboard-text</v-icon
                >{{ indicadores.perdidos }}</v-card-title
              >
              <v-card-text class="orange--text text-end"
                ><p>Casos perdidos</p></v-card-text
              >
            </v-card>
          </v-row>
        </v-col>
        <v-col>
          <v-card height="247" style="border: 1px solid #006699">
            <v-card-title class="blue--text justify-end">{{
              sum
            }}</v-card-title>
            <v-card-text class="blue--text text-end"
              ><p>Casos de covid</p></v-card-text
            >
            <v-card-text class="blue--text text-left"
              ><p>
                jovens(0-19 anos) {{ indicadores.estratificacao.jovens }}
              </p>
              <p>
                Adultos(20 - 59 anos) {{ indicadores.estratificacao.adultos }}
              </p>

              <p>
                Idosos(acima de 60 anos) {{ indicadores.estratificacao.idosos }}
              </p>

              </v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "transparencia",

  data() {
    return {
      indicadores: [],
    };
  },

  mounted() {
    this.getIndicadores();
  },

  methods: {
    getIndicadores() {
      axios.get("/indicadores").then((response) => {
        this.indicadores = response.data.data;
        var estr = this.indicadores.estratificacao;
        this.sum = estr.jovens + estr.adultos + estr.idosos;
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

h1 {
  font-weight: inherit;
  text-align: center;
  color: #fca311;
  margin-bottom: 2em;
}

.container {
  width: 64%;
  background-color: white;
}
/* main {
  background-image: url("../assets/background.png");
} */
.v-icon {
  margin-right: 60%;
}

#teste {
  margin-right: 50%;
}
</style>