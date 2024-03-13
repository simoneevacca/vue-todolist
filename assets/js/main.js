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
                done: false,
            },
            {
                text: 'todo 3',
                done: false,
            },
        ]


      }

    },

    methods:{
        clickItem(){
            console.log(this.toDoList.text);
        }
    },

    mounted() {
      console.log(this.toDoList)
    },
  }).mount('#app')