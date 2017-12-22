require('minitest/autorun')
require_relative('../person.rb')

class PersonTest < MiniTest::Test

  def setup
    
  end

  def test_person_name
    assert_equal( 'Iain', @person.name)
  end

  def test_person_age
    assert_equal( 34, @person.age)
  end

end
