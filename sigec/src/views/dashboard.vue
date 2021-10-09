 <template>
  <div class="center">
    <div class="blue--text d-none d-lg-block">
      <h1>Olá, Kelly Gomez</h1>
      <p class="float-right">
        Adicione um vínculo <v-icon class="blue--text"> mdi-plus-circle-outline</v-icon>
      </p>
      <p>Selecione um vínculo</p>
      <v-divider color="light-blue"></v-divider>
    </div>
    <div>
      <h4 class="d-lg-none d-md-none d-xl-flex blue--text">Meu perfil - Kelly Gomez</h4>
    </div>
    <v-row>
      <v-col>
        <v-row>
          <div v-for="vinculo in $store.state.vinculos" :key="vinculo.id">
            <v-card class="mt-5 mr-5" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1">
                    <v-icon color="yellow darken-1"> mdi mdi-hospital </v-icon>
                    {{ vinculo.perfil }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon color="black">mdi-map-marker</v-icon>
                    <p>{{ vinculo.estabelecimento }}</p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  name="submit-button"
                  type="submit"
                  dark
                  color="indigo darken-4"
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
  
  methods: {
    getVinculos() {
      axios.get("/vinculos").then((response) => {
        this.vinculos = response.data.data;
      });
    },
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