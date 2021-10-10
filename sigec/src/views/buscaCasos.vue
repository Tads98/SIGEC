<template>
  <v-card tile max-width="800" class="mx-auto mt-5" height="98%">
    <v-overlay :value="overlay">
      <v-card>
        <v-row>
          <v-card-title>Encerramento de caso</v-card-title>
          <v-spacer></v-spacer>
          <v-btn class="float-right white--text">
            <v-icon>mdi-close-circle-outline</v-icon>
          </v-btn>
          <div>
            <v-subheader class="text-center">
              Você está encerramento o caso, deseja continuar?
            </v-subheader>
            <v-row>
              <v-col>
                <v-btn
                  @click="overlay = false"
                >
                  <v-icon>mdi-close</v-icon>
                  cancelar
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  @click="statusEncerrado"
                >
                  <v-icon>mdi-cancel</v-icon>
                  Encerrar o caso
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-row>
      </v-card>
    </v-overlay>
    <div width="100%" class="ajustes-label d-none d-md-flex ">
      <strong>Estabelecimento de saúde:</strong>
      {{ vinculo.estabelecimento }}
    </div>
    <v-container>
      <v-col>
        <v-row class="d-none d-md-flex">
          <v-icon>mdi-home-outline</v-icon>
          <v-breadcrumbs
            divider="/"
            :items="[
              {
                text: 'Inicio',
                disabled: false,
                to: '/dashboard',
              },
              {
                text: 'Gestão de caso',
                disabled: true,
              },
            ]"
          ></v-breadcrumbs>
        </v-row>
      </v-col>
    </v-container>
    <v-toolbar class="d-none d-lg-block" extended extension-height="10">
      <v-toolbar-subtitle-2 class="shrink"
        >Pesquisar pelo nome ou CPF</v-toolbar-subtitle-2
      >

      <v-spacer></v-spacer>

      <v-text-field
        class="rounded-pill"
        v-model="pesquisa"
        dense
        solo
        hide-details
        single-line
      >
      </v-text-field>

      <v-btn
        @click="search()"
        class="rounded-pill ma-2"
        color="grey lighten-1"
        dark
      >
        <v-icon dark left> mdi-magnify </v-icon>
        Buscar
      </v-btn>
      <v-btn
        @click="filtragem.aberta = !filtragem.aberta"
        class="rounded-pill ma-2"
        style="float: right"
        color="blue-grey darken-1"
        dark
      >
        <v-icon dark left>mdi-filter-outline</v-icon>
        Filtrar
      </v-btn>
    </v-toolbar>

    <v-row class="d-lg-none d-xl-flex">
      <v-col>
        <v-row>
          <h3 class="mx-auto">Pesquisar pelo nome ou CPF</h3>
        </v-row>
        <v-row style="width: 70%" class="mx-auto">
          <v-text-field
            class="rounded-pill"
            v-model="pesquisa"
            dense
            solo
            hide-details
            single-line
          >
          </v-text-field>
        </v-row>
        <v-row style="margin-left: 13%">
          <v-btn
            @click="search()"
            class="rounded-pill ma-2"
            color="grey lighten-1"
            dark
          >
            <v-icon dark left> mdi-magnify </v-icon>
            Buscar
          </v-btn>
          <v-btn
            @click="filtragem.aberta = !filtragem.aberta"
            class="rounded-pill ma-2"
            style="float: right"
            color="blue-grey darken-1"
            dark
          >
            <v-icon dark left>mdi-filter-outline</v-icon>
            Filtrar
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-container class="deep-purple--text mt-5 mb-5">
      <v-row v-if="filtragem.aberta">
        <v-card-text class="mx-auto">
          <h2>Filtros</h2>
          Preencha pelo menos um dos campos de pesquisa abaixo.
        </v-card-text>
        <v-col>
          <v-row class="mx-auto">
            <p>Data de nascimento</p>
          </v-row>
          <v-row class="mx-auto">
            <v-text-field
              v-model="filtragem.dataNascimento"
              type="date"
              dense
              solo
              hide-details
              single-line
              class="rounded-pill"
            >
            </v-text-field>
          </v-row>
          <v-row class="mx-auto mt-5">
            <p>Bairro</p>
          </v-row>
          <v-row class="mx-auto">
            <v-text-field
              type="text"
              dense
              solo
              hide-details
              single-line
              v-model="filtragem.bairro"
              class="rounded-pill"
            >
            </v-text-field>
          </v-row>
          <v-row class="mx-auto mt-5">
            <p>Status</p>
          </v-row>
          <v-row class="mx-auto">
            <v-select
              :items="[
                'Diagnosticado',
                'Descartado',
                'Em tratamento',
                'Encerrado',
              ]"
              v-model="filtragem.status"
              dense
              solo
              hide-details
              single-line
              class="rounded-pill"
            >
            </v-select>
          </v-row>
        </v-col>
        <v-col>
          <v-row class="mx-auto">
            <p>Sexo</p>
          </v-row>
          <v-row class="mx-auto">
            <v-select
              :items="['Masculino', 'Feminino', 'Não informado']"
              v-model="filtragem.sexo"
              dense
              solo
              hide-details
              single-line
              class="rounded-pill"
            >
            </v-select>
          </v-row>
          <v-row class="mx-auto mt-5">
            <p>Escolaridade</p>
          </v-row>
          <v-row class="mx-auto">
            <v-select
              :items="[
                'Ensino Fundamental',
                'Ensino Médio',
                'graduacao',
                'mestrado',
              ]"
              v-model="filtragem.escolaridade"
              dense
              solo
              hide-details
              single-line
              class="rounded-pill"
            >
            </v-select>
          </v-row>
          <v-row class="mx-auto mt-5">
            <p>Data de abertura</p>
          </v-row>
          <v-row class="mx-auto">
            <v-text-field
              type="date"
              v-model="filtragem.dataAbertura"
              dense
              solo
              hide-details
              single-line
              class="rounded-pill"
            >
            </v-text-field>
          </v-row>
        </v-col>
        <v-col>
          <v-row class="mx-auto">
            <p>Nome da mãe</p>
          </v-row>
          <v-row class="mx-auto">
            <v-text-field
              class="rounded-pill"
              type="text"
              dense
              solo
              hide-details
              single-line
            >
            </v-text-field>
          </v-row>
          <v-row class="mx-auto mt-5">
            <p>Raça</p>
          </v-row>
          <v-row class="mx-auto">
            <v-text-field
              type="text"
              dense
              solo
              hide-details
              single-line
              v-model="filtragem.raca"
              class="rounded-pill"
            >
            </v-text-field>
          </v-row>
          <v-row class="mx-auto mt-5">
            <p>Data de encerramento</p>
          </v-row>
          <v-row class="mx-auto">
            <v-text-field
              type="date"
              v-model="filtragem.dataencerramento"
              dense
              solo
              hide-details
              single-line
              class="rounded-pill"
            >
            </v-text-field>
          </v-row>
        </v-col>
        <v-row class="d-none d-lg-block mx-auto mt-5">
          <v-btn
            @click="FilterCleaner()"
            class="rounded-pill ma-2"
            color="amber darken-2"
            dark
          >
            <v-icon dark left> mdi-eraser </v-icon>
            Limpar
          </v-btn>
          <v-btn
            @click="search()"
            class="rounded-pill ma-2"
            color="indigo darken-4"
            dark
          >
            <v-icon dark left> mdi-magnify </v-icon>
            Buscar
          </v-btn>
        </v-row>

        <v-col class="d-lg-none .d-xl-flex mr-5">
          <v-row>
            <v-btn
              @click="FilterCleaner()"
              class="rounded-pill ma-2"
              color="amber darken-2"
              style="width: 100%"
              dark
            >
              <v-icon dark left> mdi-eraser </v-icon>
              Limpar
            </v-btn>
          </v-row>
          <v-row>
            <v-btn
              @click="search()"
              class="rounded-pill ma-2"
              color="indigo darken-4"
              style="width: 100%"
              dark
            >
              <v-icon dark left> mdi-magnify </v-icon>
              Buscar
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-row v-if="casos.length == 0">
      <v-card
        outlined
        width="100%"
        class="rounded-lg d-flex flex-column align-center"
      >
        <v-img src="@/assets/Group 44.svg" max-width="160px"></v-img>
        <v-card-text>Nenhum registro encontrado.</v-card-text>
      </v-card>
    </v-row>
    <v-row v-else class="d-lg-none d-xl-flex ml-5 mr-5">
      <v-col>
        <v-row>
          <v-card-text class="mx-auto deep-purple--text"
            >{{ casos.length }} registros foram encontrados.</v-card-text
          >
          <v-btn
            style="width: 100%"
            class="mx-auto export rounded-pill button-float"
            color="deep-purple darken-4"
            dark
          >
            <v-icon dark left>mdi-file-export</v-icon>
            Exportar
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <v-card
      v-for="(caso, v) in casos"
      :key="caso.nome"
      max-width="90%"
      class="mx-auto mt-5 mb-5"
      dense
    >
      <v-container>
        <v-row>
          <v-col class="ml-5 mt-3">
            <v-row>
              <p class="deep-purple--text">
                Nome: <strong class="black--text">{{ caso.nome }}</strong>
              </p>
            </v-row>
            <v-row>
              <p class="deep-purple--text">
                Data de nascimento:
                <strong class="black--text">{{
                  caso.data_de_nascimento
                }}</strong>
              </p>
            </v-row>
            <v-row>
              <p class="deep-purple--text">
                Idade:
                <strong class="black--text">{{
                 getAge(caso.data_de_nascimento)
                }}</strong>
              </p>
            </v-row>
            <v-row>
              <p class="deep-purple--text">
                Bairro: <strong class="black--text">{{ caso.bairro }}</strong>
              </p>
            </v-row>
            <v-row>
              <p class="deep-purple--text">
                Status: <strong class="yellow--text">{{ caso.status }}</strong>
              </p>
            </v-row>
          </v-col>
          <v-col> </v-col>
          <v-col class="mr-5">
            <v-row>
              <v-btn
                type="submit"
                class="button-1 rounded-pill mb-5 btn-lg"
                color="indigo darken-4"
                dark
              >
                <v-icon left> mdi-plus-circle-outline</v-icon>
                Visualizar detalhes
              </v-btn>
            </v-row>
            <v-row>
              <v-btn
                @click="overlay = true; estado = v;"
                class="button-2 rounded-pill mb-5 btn-lg"
                color="red darken-1"
                dark
              >
                <v-icon left> mdi-close-circle-outline</v-icon>
                Encerrar o caso
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "buscaCasos",

  created() {
    this.buscaCasos();
    this.getVinculo();

  },

  data() {
    return {
      vinculo: "",
      casos: [],
      resultado:[],
      pesquisa: "",
      filtragem: {
        aberta: false,
        data_de_nascimento: "",
        sexo: "",
        bairro: "",
        escolaridade: "",
        raca: "",
        status: "",
        data_abertura: "",
        data_encerramento: "",
      },
      overlay: false,
      estado: null,
    };
  },

  methods: {
    buscaCasos() {
      axios
        .get("/casos")
        .then((response) => {
          this.casos = response.data.data;
          this.resultado = response.data.data;
        })
        .catch((error) => console.log(error));
    },

    getVinculo(){
      var vinculos = this.$store.state.vinculos;
      var v = this.$route.params.id;
      this.vinculo = vinculos[v];
    },

    search() {
      // if (this.pesquisa != "") {
       axios
         .get("/casos")
         .then((response) => {
          var casos = response.data.data;
          this.casos = casos.filter((caso) => this.filtrarCasos(caso));
          this.resultado = this.$store.state.casos.filter((caso) => this.filtrarCasos(caso));
         })
         .catch((error) => console.log(error));
      // } else {
      //   this.buscaCasos();
      // }
      // console.log(this.casos);
    },

    formatDate(data, format) {
      const date = data.split("-");
      if (format == "dmy") {
        return new Date(date[2], date[1], date[0]);
      }
      return new Date(date[0], date[1], date[2]);
    },

    getAge(a){
      const birth = this.formatDate(a, "dmy");
      const atual = new Date();
      const date = Math.abs(atual - birth);
      return parseInt(date / 31536000000);
    },

    dateCompare(data, filter) {
      var resp = this.formatDate(data, "dmy");
      var resp2 = this.formatDate(filter, "ymd");
      return resp.getTime() == resp2.getTime() || filter == "";
    },

    filtrarCasos(caso) {
      var ident =
        caso.nome.toLowerCase().includes(this.pesquisa) || this.pesquisa == "";
      var gen = caso.sexo == this.filtragem.sexo || this.filtragem.sexo == "";
      var end =
        caso.bairro.toLowerCase() == this.filtragem.bairro ||
        this.filtragem.bairro == "";
      var graduacao =
        caso.escolaridade == this.filtragem.escolaridade ||
        this.filtragem.escolaridade == "";
      var etnia =
        caso.raca.toLowerCase() == this.filtragem.raca ||
        this.filtragem.raca == "";
      var diag =
        caso.status == this.filtragem.status || this.filtragem.status == "";

      var data_de_nascimento = this.dateCompare(
        caso.data_de_nascimento,
        this.filtragem.data_de_nascimento
      );

      var data_abertura = this.dateCompare(
        caso.data_abertura,
        this.filtragem.data_abertura
      );

      var data_encerramento = this.dateCompare(
        caso.data_encerramento,
        this.filtragem.data_encerramento
      );

      if (
        ident &&
        gen &&
        end &&
        graduacao &&
        etnia &&
        diag &&
        data_de_nascimento &&
        data_abertura &&
        data_encerramento
      ) {
        return caso;
      }
    },


    statusEncerrado(){
      var caso = this.casos[this.estado]
      caso.status = "Encerrado";
      this.$store.commit("setCaso", this.casos[this.estado]);
      this.overlay = false;
    },

    FilterCleaner(){
      this.filtragem.data_de_nascimento = "";
      this.filtragem.bairro = "";
      this.filtragem.sexo = "";
      this.filtragem.escolaridade = "";
      this.filtragem.raca = "";
      this.filtragem.status = "";
      this.filtragem.data_abertura = "";
      this.filtragem.data_encerramento = "";
      this.search();
    }
  },
};
</script>

<style scoped>

.ajustes-label {
  padding-left: 19%;
  padding-right: 19%;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
}

.mr-5 {
  margin-top: 10%;
}

.button-float {
  margin-top: 5%;
  margin-left: 60%;
}

@media (min-width: 360px) and (max-width: 414px) {
  .button-1,
  .button-2 {
    margin-left: 3%;
    width: 100%;
  }
}
</style>