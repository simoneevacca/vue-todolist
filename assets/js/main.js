const { createApp } = Vue

  createApp({
    data() {
      return {
        
        
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

    methods:{
        clickItem(index){
            this.toDoList[index].done = !this.toDoList[index].done
            console.log(this.toDoList[index].done)
        },
        
        delete(index){
            console.log(this.toDoList[index].done)

        },
    },

    mounted() {
      console.log(this.toDoList)
    },
  }).mount('#app')