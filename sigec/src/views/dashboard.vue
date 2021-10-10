 <template>
  <div class="center">
    <v-row class="align-end blue--text d-none d-lg-flex">
      <div class="ml-3">
        <h1>Olá, Kelly Gomez</h1>
        <p>Selecione um vínculo</p>
      </div>
      <v-spacer></v-spacer>
      <div> 
        <v-btn text
          to="adicionarVinculo"
          class="blue--text"
        >
        <p>
          Adicione um vínculo
          <v-icon> mdi-plus-circle-outline</v-icon>
        </p>
        </v-btn>
      </div>
    </v-row>
      <v-divider color="light-blue" class="d-none d-lg-flex"></v-divider>
    <div>
      <div class="d-lg-none d-md-none d-xl-flex blue--text">
        <h4>Olá, Kelly Gomez</h4>
        <p>selecione um vínculo</p>
      </div>
    </div>
    <v-row class="ml-1">
      <v-col>
        <v-row>
          <div v-for="(vinculo, v) in $store.state.vinculos" :key="vinculo.id">
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
                  @click="$router.push({ name: 'buscaCasos', params: { id: v } })"
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

@media (min-width: 426px) and (max-width: 915px) {
  .ml-1{
    width: 240px;
  }
}

@media (min-width: 768px) and (max-width: 768px) {
  .ml-1{
    width: 1000px;
  }
}

@media (min-width: 768px) and (max-width: 768px) {
  .ml-1{
    width: 1000px;
  }
}

@media (min-width: 540px) and (max-width:  540px) {
  .ml-1{
    width: 230px;
  }
}


@media only screen and (max-width: 320px) {
  .ml-1{
    width: 200px;
  }
}

</style>
 */