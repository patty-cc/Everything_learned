require("minitest/autorun")

class PersonSpec < MiniTest::Test

  def setup()
    @person = Person.new("Sarah", 50)
  end
  
end
