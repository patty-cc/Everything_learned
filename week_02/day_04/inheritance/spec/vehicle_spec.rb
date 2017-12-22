require('minitest/autorun')
require_relative('../vehicle.rb')

class TestVehicle < MiniTest::Test

  def test_car_can_start_engine
    vehicle = Vehicle.new()
    result = vehicle.start_engine()
    assert_equal("Vrrrmmmm", result)
  end

end
