<template>
  <v-card
    class="mx-auto"
    max-width="750"
    style="margin-top: 5%"
  >
    <v-card-title id="position">Adicionar um novo vínculo</v-card-title>

    <v-form>
        <v-text-field label="Cargo" name="cargo" type="text" class="rounded-pill" outlined></v-text-field>
        <v-text-field label="Estabelecimento de Saúde" name="estabelecimento" type="text" class="rounded-pill" outlined></v-text-field>
    </v-form>

    <v-card-actions id="button-add">
      <v-btn
        type="submit" 
        class="rounded-pill mb-5 btn-lg" 
        color="indigo darken-4" 
        dark
      >
      <v-icon> mdi-plus-circle-outline</v-icon>
        Adicionar Vínculo
      </v-btn>

      <v-btn
        type="submit" 
        class="rounded-pill mb-5 btn-lg" 
        color="red darken-1"
        dark
      >
      <v-icon> mdi-close-circle-outline</v-icon>
        Cancelar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
    #position, .v-form{
        max-width: 400px;
        margin-left: 5%;
        color: indigo;
    }
    
    #button-add{
        margin-left: 5%;
    }
    
</style>
