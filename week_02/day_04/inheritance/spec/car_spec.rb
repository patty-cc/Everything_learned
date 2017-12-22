require('minitest/autorun')
require_relative('../car.rb')

class TestCar < MiniTest::Test

  def test_car_can_start_engine
    car = Car.new()
    result = car.start_engine()
    assert_equal("Vrrrmmmm", result)
  end

end
