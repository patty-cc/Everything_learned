require('minitest/autorun')
require_relative('../person.rb')

class TestPerson < Minitest::Test

  def setup
    @person = Person.new("Iain", "Paterson")
  end

  def test_person_first_name
    assert_equal("Iain", @person.first_name)
  end

  def test_person_last_name
    assert_equal("Paterson", @person.last_name)
  end

  def test_person_can_talk()
    assert_equal("My name is Iain Paterson", @person.person_can_talk)
  end

end
