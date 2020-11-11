var app = new Vue(
  {
    el : "#root",
    data : {
      items : ["fare la spesa",  "uscire il cane", "lavare la macchina", "comprare il pane"],
      newTodo : ""
    },
    methods : {
      addItem () {
        this.items.push(this.newTodo);
        this.newTodo = "";
      },
      removeItem: function (index) {
        this.items.splice(index, 1);

      }
    },

  }
)
