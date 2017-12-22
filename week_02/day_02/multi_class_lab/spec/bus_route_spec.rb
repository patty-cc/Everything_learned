require('minitest/autorun')
require_relative('../bus.rb')
require_relative('../person.rb')
require_relative('../bus_stop.rb')

class BusTest < MiniTest::Test

  def setup
    @person = Person.new( 'Iain', 34 )
    @bus_44 = Bus.new( 44, 'Balerno' )
  end


  def test_bus_number
    assert_equal( 44, @bus_44.bus_number)
  end

  def test_bus_destination
    assert_equal( 'Balerno', @bus_44.destination)
  end

  def test_engine_noise
    assert_equal( 'broom broom', @bus_44.engine_noise)
  end

  def test_add_to_array
    @bus_44.add_to_array(@person)
    assert_equal( 1, @bus_44.passengers_number )
  end

  def test_delete_from_array
    @bus_44.delete_from_array(@person)
    assert_equal(0, @bus_44.passengers_number)
  end

  def test_passenger_number
    assert_equal( 0, @bus_44.passengers_number)
  end

  def test_empty_array
    @bus_44.empty_array
    assert_equal( 0, @bus_44.passengers_number)
  end
end
