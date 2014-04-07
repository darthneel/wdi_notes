var monkeys = new MonkeyListView();

describe('Monkey', function(){
  it("creates a new view", function(){
    (new Monkey()).view.should.be.instanceof(MonkeyView);
  })
  it("has a default name", function(){
    ((new Monkey({name: ""})).get('name')).should
      .be.exactly("Monkey");
  });
  it("maintains a name", function(){
    // $('form input').val('Bob')
    ((new Monkey({name: "Bob"})).get('name')).should
      .be.exactly("Bob");
  });
});

describe('MonkeyView', function() {

  describe('when rendering the template',  function(){

    
    var marley = new Monkey({name: "Marley"});
    var view = new MonkeyView({model: marley});

    
    it("returns an li element", function() {
      (view.render().el).should
        .be.an.HTMLLIElement;
    });
    it("contains the monkey name", function() {
      (view.render().$el.text()).should
        .containEql('Marley');
    });
  });
});


describe('MonkeyCollection', function(){
  it("has a Monkey model", function(){
    (new MonkeyCollection().model).should
      .be.exactly(Monkey);
  });
  
  it("accepts a new monkey", function(){
    var collection = new MonkeyCollection();
    collection.models.should
      .have.length(0);
    
    collection.add({name: 'Bob'})
    
    collection.models.should
      .have.length(1);
      
    collection.models[0].should.be
      .be.an.Monkey
    
  });

});

mocha.run();
