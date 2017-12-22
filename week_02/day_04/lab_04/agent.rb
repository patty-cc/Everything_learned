require_relative('person.rb')

class Agent < Person

  def first_name
    return @first_name
  end

  def last_name
    return @last_name
  end

  def agent_speech
    return "The name's #{@last_name}, #{@first_name} #{@last_name}"
  end
end
