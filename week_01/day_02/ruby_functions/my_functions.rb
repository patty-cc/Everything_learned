
def greet(person, time_of_day)
  greeting = "Good #{time_of_day}, #{person}"
  return greeting
end

def add(first_number, second_number)
  return first_number + second_number
end

def population_density(population, area)
  return population / area
end

puts add(2,3)

puts population_density(5373000, 77933)

puts greet("Iain", "Afternoon")

# def another_greeting()
#   greeting = "Hiya"
#   return greeting + " " + "friend"
# end
