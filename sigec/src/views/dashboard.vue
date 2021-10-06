/* <template>
  <div class="center">
    <div>
      <h1>Olá, Kelly Gomez</h1>
      <p class="float-right">
        Adicione um vínculo <v-icon> mdi-plus-circle-outline</v-icon>
      </p>
      <p>Selecione um vínculo</p>
      <v-divider></v-divider>
    </div>
    <v-row>
      <v-col>
        <v-row>
          <div v-for="vinculo in vinculos" :key="vinculo.id">
            <v-card class="mt-5 mr-5" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                    <v-icon> mdi mdi-hospital </v-icon>
                    {{ vinculo.perfil }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon>mdi-map-marker</v-icon>
                    <p>{{ vinculo.estabelecimento }}</p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  name="submit-button"
                  type="submit"
                  dark
                  color="blue"
                  block
                  class="rounded-pill"
                  ><strong>Acessar</strong></v-btn
                >
              </v-card-actions>
            </v-card>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import vinculos from "../services/vinculos";
import axios from "axios";

export default {
  name: "dashboard",

  data() {
    return {
      vinculos: [],
    };
  },

  mounted() {
    this.getVinculos();
  },

  methods: {
    getVinculos() {
      axios.get("/vinculos").then((response) => {
        this.vinculos = response.data.data;
      });
    },
  },

  // data() {
  //   return {
  //     vinculos: [],
  //   };
  // },

  // mounted() {
  //   vinculos.list().then((response) => {
  //     console.log(response.data);
  //     this.vinculos = response.data.data;
  //   });
  // },

  props: {
    msg: String,
  },
};
</script>

<style scoped>
.center {
  margin: auto;
  margin-top: 5%;
  width: 60%;
  padding: 10px;
}
</style>
 */