require('minitest/autorun')
require_relative('../motorbike.rb')

class TestMotorbike < MiniTest::Test

  def test_motorbike_can_start_engine
    motorbike = Motorbike.new()
    result = motorbike.start_engine()
    assert_equal("Vrrrmmmm (HELL YEAH!)", result)
  end

end
