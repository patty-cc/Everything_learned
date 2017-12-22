class Person

  attr_reader :first_name, :last_name

  def initialize (first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  # def person_first_name
  #   return @first_name
  # end
  #
  # def person_last_name
  #   return @last_name
  # end

  def person_can_talk
    return "My name is #{@first_name} #{@last_name}"
  end
end
