// test setup
mocha.setup('bdd')

// before all do:
// create a test monkey
var monkey_name = 'Bob'
var $monkey_input = $('#monkey_name_input')
    $monkey_input.val(monkey_name);

var monkey = new Monkey();

// add monkey to collection
var monkeys = new MonkeyListView();
    monkeys.collection.add(monkey);

// Model of Monkey
describe('Monkey',function(){

  it('should get its name from the input field', function(){
    (monkey.get('name')).should.be.exactly(monkey_name)
  })

  it('defaults to the name "Monkey"',function(){
    // clear input
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

    

  })

})

// Collection of Monkeys
describe('MonkeyCollection',function(){

  describe('MonkeyListView',function(){
    it('should contain a $list property mapping to the monkey_list element',function(){
      (monkeys.$list.html() ).should.be.exactly( $('#monkey_list').html() )
    })

    it("should include Bob the monkey in its collection", function(){
      (monkeys.collection.models).should.containEql(monkey)
    })
  })

})

// Views for Monkeys
describe('MonkeyListView',function(){

})