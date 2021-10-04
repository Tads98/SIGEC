<template>
<v-main>
  <v-card
    class="mx-auto"
    max-width="800"
    style="margin-top: -4%; height: 110%;"
  >
    <v-card-text
        red--text
    >
      <h1 style="color: orange;" class="text-center">
        Transparência
      </h1>
    </v-card-text>
    <div class="container">
        
        <div class="row">
            <div class="col-sm-4">
                <v-card
                    color="indigo darken-4"
                    dark
                >
                    <v-card-title class="justify-end"><v-icon>mdi-clipboard-text</v-icon>17992</v-card-title>
                    <v-card-text class="text-right"><p>Casos tratados</p></v-card-text>
                </v-card>
            </div>
            <div class="col-sm-4">
                <v-card
                    style="border: 1px solid green;"
                >
                <v-body>
                    <v-card-title class="green--text justify-end"><v-icon color="green darken-2" id="teste">mdi-clipboard-text</v-icon>295.074</v-card-title>
                    <v-card-text class="green--text text-end"><p>Casos Descartados.</p></v-card-text>
                </v-body>
                </v-card>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <v-card
                    style="border: 1px solid blue;"
                >
                <v-body>
                    <v-card-title class="blue--text justify-end"><v-icon  color="blue darken-2">mdi-clipboard-text</v-icon>28787</v-card-title>
                    <v-card-text  class="blue--text text-end"><p>Casos suspeitos</p></v-card-text>
                </v-body>
                </v-card>
            </div>
            <div class="col-sm-4">
                <v-card
                    style="border: 1px solid orange;"
                >
                <v-body>
                    <v-card-title class="orange--text justify-end"><v-icon color="orange darken-2">mdi-clipboard-text</v-icon>17994</v-card-title>
                    <v-card-text class="orange--text text-end"><p>Casos perdidos</p></v-card-text>
                </v-body>
                </v-card>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-8 h-75">
                <v-card
                    style="border: 1px solid #006699;"
                >
                <v-body>
                    <v-card-title class="blue--text justify-end">359.847</v-card-title>
                    <v-card-text class="blue--text text-end"><p>Casos de covid</p></v-card-text>
                </v-body>
                </v-card>
            </div>
        </div>
    </div>
  </v-card>
</v-main>
</template>

<style lang="css" scoped>
    main  {
        background-image: url("../assets/background.png");
    }
    .v-icon{
        margin-right: 60%;
    }

    #teste{
        margin-right: 50%;
    }
</style>