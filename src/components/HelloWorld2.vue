<template>
  <div>
    <v-container v-for="align in alignments" :key="align" class="blue mb-6">
      <v-row :align="align" no-gutters style="height: 150px;">
        <v-col v-for="n in 3" :key="n">
          <v-card class="pa-2" outlined tile>
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="blue">
      <v-row no-gutters style="height: 150px;">
        <v-col v-for="align in alignments" :key="align" :align-self="align">
          <v-card class="pa-2" outlined tile>
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld2",

  data: () => ({
    alignments: ["start", "center", "end"]
  })
};
</script>
