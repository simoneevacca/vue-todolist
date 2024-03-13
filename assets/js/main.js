const { createApp } = Vue

createApp({
  data() {
    return {

      newTask: '',

      toDoList: [


        {
          text: 'todo 1',
          done: false,
        },
        {
          text: 'todo 2',
          done: true,
        },
        {
          text: 'todo 3',
          done: false,
        },
      ]


    }

  },

  methods: {
    clickItem(index) {
      this.toDoList[index].done = !this.toDoList[index].done
      console.log(this.toDoList[index].done)
    },

    deleteItem(index) {
      console.log(this.toDoList)
      this.toDoList.splice(index, 1)

    },

    addButton() {
      this.toDoList.push({ text: this.newTask, done: false })
      console.log(this.toDoList)
      this.newTask = ''
    }
  },

  mounted() {
    console.log(this.toDoList)
  },
}).mount('#app')