
var HeaderView = Backbone.View.extend({
  template: _.template($('#headerview-template').html()),
  render: function(){
    this.$el.html(this.template())
    return this;
  }
})

var BodyView = Backbone.View.extend({
  template: _.template($('#bodyview-template').html()),
  render: function(){
    this.$el.html(this.template())
    return this;
  }
})


var ContactView = Backbone.View.extend({
  template: _.template($('#contactview-template').html()),
  render: function(){
    this.$el.html(this.template())
    return this;
  }
})


var UIView = Backbone.View.extend({
  initialize: function(){
    this.sub_views = []
  },
  el: function(){
    return $('#container')
  },
  render: function(body_view) {
    _.each(this.sub_views, function(view){
      view.remove()
    })
    
    this.sub_views = [];

    body_view = body_view || new BodyView();

    this.sub_views.push(new HeaderView())
    this.sub_views.push(body_view)

    var self = this;

    _.each(this.sub_views, function(view){
      console.log()
      self.$el.append(view.render().el)
    })
  }
});



// ** Router **
var PortfolioRouter =  Backbone.Router.extend({
  initialize:function(){
    this.ui_view = new UIView();
  },
  routes:{
    ''            : 'index',
    'contact'    : 'contact'
  },
  index: function(){
    console.log('index route')
    this.ui_view.render();
  },
  contact: function(){
    console.log('index contact')
    var contact_view = new ContactView();
    this.ui_view.render( contact_view );
  }
})



// --------------------------------

$(function(){ 
  new PortfolioRouter();
  Backbone.history.start();
});

