<template>
  <v-card tile max-width="800" class="mx-auto mt-5" height="98%">
    <v-toolbar extended extension-height="10">
      <v-toolbar-subtitle-2 class="shrink"
        >Pesquisar pelo nome ou CPF</v-toolbar-subtitle-2
      >

      <v-spacer></v-spacer>

      <v-text-field class="rounded-pill" v-model="pesquisa" dense solo hide-details single-line>
      </v-text-field>

      <v-btn @click="search()" class="rounded-pill ma-2" color="grey lighten-1" dark>
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
    <v-container class="deep-purple--text mt-5 mb-5">
      <v-row v-if="filtragem.aberta">
        <v-card-text>
          <h2>Filtros</h2>
          Preencha pelo menos um dos campos de pesquisa abaixo.
        </v-card-text>
        <v-col>
          <v-row class="mx-auto">
            <p>Data de nascimento</p>
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
          <v-row class="mt-5">
            <v-btn @click="search()" class="rounded-pill ma-2" color="amber darken-2" dark>
              <v-icon dark left> mdi-eraser </v-icon>
              Limpar
            </v-btn>
            <v-btn @click="search()" class="rounded-pill ma-2" color="indigo darken-4" dark>
              <v-icon dark left> mdi-magnify </v-icon>
              Buscar
            </v-btn>
          </v-row>
        </v-col>
        <v-col>
          <v-row class="mx-auto">
            <p>Sexo</p>
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
            <v-text-field class="rounded-pill" type="text" dense solo hide-details single-line>
            </v-text-field>
          </v-row>
          <v-row class="mx-auto mt-5">
            <p>Raça</p>
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
      </v-row>
    </v-container>
    <v-row class="ml-5 mr-5">
      <v-col>
        <v-row>
          <v-card-text class="deep-purple--text"
            >{{ casos.length }} registros foram encontrados.</v-card-text
          >
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-btn class="rounded-pill button-float" color="deep-purple darken-4" dark>
            <v-icon dark left>mdi-file-export</v-icon>
            Exportar
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-card
      v-for="caso in casos"
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
                <strong class="black--text">{{ caso.data_de_nascimento }}</strong>
              </p>
            </v-row>
            <v-row>
              <p class="deep-purple--text">
                Idade: <strong class="black--text">{{ caso.data_de_nascimento }}</strong>
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
                class="rounded-pill mb-5 btn-lg"
                color="indigo darken-4"
                dark
              >
                <v-icon left> mdi-plus-circle-outline</v-icon>
                Visualizar detalhes
              </v-btn>
            </v-row>
            <v-row>
              <v-btn class="rounded-pill mb-5 btn-lg" color="red darken-1" dark>
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
  },

  data() {
    return {
      casos: [],
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
    };
  },

  methods: {
    buscaCasos() {
      axios
        .get("/casos")
        .then((response) => (this.casos = response.data.data))
        .catch((error) => console.log(error));
    },

    search() {
      // if (this.pesquisa != "") {
      axios
        .get("/casos")
        .then((response) => {
          var casos = response.data.data;
          this.casos = casos.filter((caso) => this.filtrarCasos(caso));
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
    // if (caso.nome.toLowerCase().includes(this.pesquisa)) {
    //   return caso;
    // }
    // if (caso.bairro.toLowerCase().includes(this.pesquisa)) {
    //   return caso;
    // }
  },
};
</script>

<style scoped>
.mr-5 {
  margin-top: 10%;
}

.button-float {
  margin-top: 5%;
  margin-left: 60%;
}
</style>