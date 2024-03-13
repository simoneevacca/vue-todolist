const { createApp } = Vue

createApp({

  data() {

    return {

      error: '',

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

    /**
     * function for tick the list item
     * @param {number} index 
     */
    clickItem(index) {
      this.toDoList[index].done = !this.toDoList[index].done
    },

    /**
     * function for delete list item
     * @param {number} index 
     */
    deleteItem(index) {
      this.toDoList.splice(index, 1)
    },

    /**
     * function for add new task to array and cancel input space
     */
    addButton() {
      this.error = ''
      if (this.newTask.length > 2) {
        this.toDoList.push({ text: this.newTask, done: false })
      } else {
        this.error = 'The task is too short'
      }
      this.newTask = ''
    }
  },

}).mount('#app')