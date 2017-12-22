require('minitest/autorun')
require_relative('../medic.rb')

class TestMedic < MiniTest::Test

  def setup
    @medic = Medic.new("Tommy", "Richmond")
  end

  def test_frist_name
    assert_equal("Tommy", @medic.first_name)
  end

  def test_person_last_name
    assert_equal("Richmond", @medic.last_name)
  end

  def test_heal
    assert_equal("I can heal people", @medic.heal)
  end

end
