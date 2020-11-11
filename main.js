var app = new Vue(
  {
    el : "#root",
    data : {
      items : ["fare la spesa", "uscire il cane", "lavare la macchina", "comprare il pane"]
    },
    methods : {
      addItem () {
        this.items.push(this.new);
        this.new = "";
      }
    },

  }
)
