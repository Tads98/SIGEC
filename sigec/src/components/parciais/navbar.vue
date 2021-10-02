<template>
<v-app-bar
      app
      color="primary"
      dark
    >
    <h1 class="font-weight-light" style="margin-left: 20%;">SIGEC</h1>
      <v-spacer></v-spacer>
        <p class="mt-5 mr-5">Kelly Gomez</p>
        <v-icon class="mr-5">
            large
            mdi-account-circle</v-icon>
        <div class="text-center">
            <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                >
                 
                <v-icon>
                    large
                    mdi-chevron-double-down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
        </div>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Adicionar um vínculo' },
        { title: 'Meu perfil' },
        { title: 'Sair' },
      ],
    }),
  }
</script>