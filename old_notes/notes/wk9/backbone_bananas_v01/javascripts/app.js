Monkey = Backbone.Model.extend({
  initialize: function(attrs) {
    if (this.get('name') === ""){this.set('name', 'Monkey')};
    this.view = new MonkeyView({ model: this});
  }
});

MonkeyCollection = Backbone.Collection.extend({
  model: Monkey
});

MonkeyView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<%= name %>...the monkey.<button data-action='destroy'>Delete</button>"),
  initialize: function() {
    this.render();
    this.listenTo(this.model, 'destroy', this.remove);
    monkeys.$list.prepend(this.$el);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }, 
  events: {
    'click [data-action="destroy"]' : function(e){
      this.model.destroy()
    }
  }
});

MonkeyListView = Backbone.View.extend({
  initialize: function(){
    this.collection = new MonkeyCollection();
    this.$input = $('form input');
    this.$list = $('#monkey-list');
  },
  resetFormFields: function() {
    this.$input.val(null);
  },
  el: function(){ return $('.monkeys') },
  events: {
    'submit form' : "createMonkey"
  },
  createMonkey: function(e){
    e.preventDefault();
      this.collection.add(new Monkey({
        'name': this.$input.val(),
        'created_at': new Date()
      }))
      this.resetFormFields();
  }
});

$(function(){ 
  window.monkeys = new MonkeyListView();
});
