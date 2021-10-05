<template>
  <v-card
    tile
    max-width="800"
    class="mx-auto mt-5"
    height="350"
  >
    <v-toolbar
      extended
      extension-height="10"
    >

      <v-toolbar-subtitle-2
        class="shrink"
      >Pesquisar pelo nome ou CPF</v-toolbar-subtitle-2>

      <v-spacer></v-spacer>
      
     <v-text-field 
                v-model="searchText"
                dense solo hide-details single-line></v-text-field>

      <v-btn
        class="ma-2"
        color="grey lighten-1"
        dark
      >
        <v-icon
          dark
          left
        >
          mdi-magnify
        </v-icon>
        Buscar
      </v-btn>

      <v-btn 
        class="ma-2"
        color="blue-grey darken-1"
        dark>
        <v-icon
          dark
          left
        >mdi-filter-outline</v-icon>
        Filtrar
      </v-btn>

      <v-btn 
        class="ma-2"
        color="blue-grey darken-1"
        dark>
        <v-icon
          dark
          left
        >mdi-file-export</v-icon>
        Exportar
      </v-btn>
    </v-toolbar>
    <v-card
        max-width="90%"
        class="mx-auto mt-5 mb-5"
        dense
    >
        <v-container>
            <v-row>
                <v-col class="ml-5 mt-3">
                    <v-row>
                        <p>Nome: <strong>Richard Stanley</strong></p>
                    </v-row>
                    <v-row>
                        <p>CPF: <strong>837.721.519-57</strong></p>
                    </v-row>
                    <v-row>
                        <p>Idade: <strong>42</strong></p>
                    </v-row>
                    <v-row>
                        <p>Bairro: <strong>Lagoa de pitinga</strong></p>
                    </v-row>
                    <v-row>
                       <p>Status: <strong>Em andamento</strong></p>
                    </v-row>
                </v-col>
                <v-col>
                </v-col>
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

<style scoped>
    .mr-5{
        margin-top: 10%;
    }
</style>