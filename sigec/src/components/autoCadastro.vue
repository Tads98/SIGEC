<template>
  <v-app>
    <v-main>
      <v-container style="margin-left: 60%">
        <v-row>
          <v-col lg="4">
            <v-card elevation="4">
              <v-card-title class="justify-center">Autocadastro</v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field label="Nome" name="nome" type="text" class="rounded-pill" outlined></v-text-field>
                  <v-text-field label="CPF" name="cpf" type="text" class="rounded-pill" outlined></v-text-field>
                  <v-text-field label="Data de Nascimento" name="data" type="date" class="rounded-pill" outlined></v-text-field>
                  <v-text-field label="Email" name="email" type="email" class="rounded-pill" outlined></v-text-field>
                  <v-text-field label="Telefone" name="telefone" type="phone" class="rounded-pill" outlined></v-text-field>
                  <v-text-field label="Senha" name="senha" type="password" class="rounded-pill" outlined></v-text-field>
                  <v-text-field label="Confirmação de senha" name="re-senha" type="password" class="rounded-pill" outlined></v-text-field>
                  <v-btn class="rounded-pill" color="indigo darken-4" x-large block dark>Cadastrar</v-btn>
                  <v-card-actions class="text--secondary">
                    <v-spacer></v-spacer>
                    <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link>
                    Already have an account? <a href="#" class="pl-2" style="color: #000000">Sign In</a> -->
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-actions>
                  <v-img src="@/assets/Group 5.svg" alt="Lais" contain height="35"></v-img>
                  <v-img src="@/assets/g10-8.svg" alt="UFRN" contain height="35"></v-img>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
    main  {
        background-image: url("../assets/background.png");
    }
</style>