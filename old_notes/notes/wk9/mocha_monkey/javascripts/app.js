var Monkey = Backbone.Model.extend({
  initialize: function(){
    if (monkeys.$input.val() === "") { this.set("name","Monkey") }
    else { this.set("name", monkeys.$input.val() ) };
    this.view = new MonkeyView({model: this});
  },
  eatBanana: function(){
    console.log("eating",this)
    this.attributes.joy += 2
  },
  scavanageBanana: function(){
    this.attributes.joy -= 2
  },
  defaults: {
    joy: 0
  }
})

var MonkeyView = Backbone.View.extend({
  initialize: function(){
    this.render();
    this.listenTo(this.model, 'destroy', this.remove);
    monkeys.$list.prepend(this.$el);
  },
  tagName: 'li',
  attributes: {
    'class': 'monkey'
  },
  events: {
    'click [data-action="destroy"]': function(e){
      this.model.destroy()
    }
  },
  template: _.template("<%= name %>...the monkey.<button class='button' data-action='destroy'>Delete</button>"),
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
})

var MonkeyCollection = Backbone.Collection.extend({
  model: Monkey
})

var MonkeyListView = Backbone.View.extend({
  initialize: function(){
    this.collection = new MonkeyCollection();
    this.$list = this.$('#monkey_list');
    this.$input = this.$('form input')
  },
  el: function(){ return $('#monkeys')},
  events: {
    'submit form': 'createMonkey'
  },
  resetFormFields: function(){
    this.$input.val("")
  },
  createMonkey: function(e){
    e.preventDefault();
    this.collection.add(new Monkey({
      'name': this.$input.val(),
      'created_at': new Date()
    }))
    this.resetFormFields();
  }
})

$(function(){

  window.monkeys = new MonkeyListView();

  // show results of tests on/off
  // $('#mocha').show()
  // mocha.run()
})