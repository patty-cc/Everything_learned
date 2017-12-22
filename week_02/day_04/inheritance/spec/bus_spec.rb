require('minitest/autorun')
require_relative('../bus.rb')

class TestBus < MiniTest::Test

  def test_bus_can_start_engine
    bus = Bus.new()
    result = bus.start_engine()
    assert_equal("Vrrrmmmm", result)
  end

end
