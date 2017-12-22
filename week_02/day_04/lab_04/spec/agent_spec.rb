require('minitest/autorun')
require_relative('../agent.rb')

class TestAgent < MiniTest::Test

  def setup
    @agent = Agent.new("James", "Bond")
  end

  def test_first_name
    assert_equal("James", @agent.first_name)
  end

  def test_last_name
    assert_equal("Bond", @agent.last_name)
  end

  def test_agent_speech
    assert_equal("The name's Bond, James Bond", @agent.agent_speech)
  end

end
