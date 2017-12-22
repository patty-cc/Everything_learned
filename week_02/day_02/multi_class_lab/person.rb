class Person

  attr_reader(:name, :age)

  def initialize( name, age )
    @name = name
    @age = age
  end

  def person_name
    return @name
  end

  def person_age
    return @age
  end
  
end
