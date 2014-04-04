// test setup
mocha.setup('bdd')

before(function(){
    // create collection
  window.monkeys = new MonkeyListView();

  // create a test monkey
  window.monkey_name = 'Bob'
  window.$monkey_input = $('#monkey_name_input')
      $monkey_input.val(monkey_name);

  window.monkey = new Monkey();

  // add monkey to collection
  monkeys.collection.add(monkey);

})

// Model of Monkey
describe('Monkey',function(){

  it('should get its name from the input field', function(){
    (monkey.get('name')).should.be.exactly(monkey_name)
  })

  it('defaults to the name "Monkey"',function(){
    // clear input
    $monkey_input.val("")
    var untitled_monkey = new Monkey();

    (untitled_monkey.get('name')).should.be.exactly("Monkey");
  });

  it('should clear the input field after creation', function(){
    $monkey_input.val().should.be.exactly("")
  })

  describe('MonkeyView', function(){

    it("should be returned from model's 'view' method upon initialize", function(){
      (monkey.view).should.be.instanceof(MonkeyView);
    })

    it("should contain the monkey's name", function(){
      (monkey.view.$el.text()).should.containEql("Bob")
    })

  })

})

// Collection of Monkeys
describe('MonkeyCollection',function(){

  describe('MonkeyListView',function(){
    it('should contain a $list property mapping to the monkey_list element',function(){
      (monkeys.$list[0] ).should.be.exactly( $('#monkey_list')[0] )
    })

    it("should include Bob the monkey in its collection", function(){
      (monkeys.collection.models).should.containEql(monkey)
    })

    it("should create a monkey on form submission", function(){

    })
  })

})

// Views for Monkeys
describe('MonkeyListView',function(){

})