<template>
 <v-card>
        <v-card-text>
    <v-container grid-list-md>
        <v-layout wrap>
            <v-flex xs4>
            <v-select
                ref="country"
                :items="category"
                v-model="formNewQuestion.category_id"
                label="Categoria"
                item-text = "category_name"
                item-value = "id"
                required
                solo
            ></v-select>
            </v-flex>
            <v-flex xs8>
            <v-text-field
                v-model="formNewQuestion.question_text"
                label="Pergunta"
                solo
            ></v-text-field>
            </v-flex>
        </v-layout>
        </v-container>
          </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
          <v-btn color="blue darken-1" flat @click="saveQuestion()">CAdastrar</v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
  export default {
    props: {
      category: {}
    },
    data: () => ({
      formNewQuestion: {
        category_id: '',
        question_text: ''
      }
    }),
    methods: {
      async saveQuestion () {
        this.formNewQuestion.id = this.$store.getters.auth.client.id
        const response = await this.$serviceQuest.insetQuestion(this.formNewQuestion)
        if (response.data.status_code === 200) {
          this.$emit('initialize')
        }
        this.$store.dispatch('setToast', { color: 'white', visible: true, content: response.data.message })
      }
    }
  }
</script>
