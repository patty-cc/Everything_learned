def return_10
  return 10
end

def add(num1, num2)
  return num1 + num2
end

def subtract(num1, num2)
  return num1 - num2
end

def multiply(num1, num2)
  return num1 * num2
end

def divide(num1, num2)
  return num1 / num2
end

def length_of_string(string)
  return string.length
end

def join_string(string_1, string_2)
  return string_1 + string_2
end

def add_string_as_number(string_1, string_2)
  return string_1.to_i + string_2.to_i
end

def number_to_full_month_name(month_number)
  case (month_number)
    when 1
      return "January"
    when 2
      return "February"
    when 3
      return "March"
    when 4
      return "April"
    when 5
      return "May"
    when 6
      return "June"
    when 7
      return "July"
    when 8
      return "August"
    when 9
      return "September"
    when 10
      return "October"
    when 11
      return "November"
    when 12
      return "December"
    else
      return "This number doesn't correspond with a month"
    end
end

def number_to_short_month_name(month_number)
  full_month_name = number_to_full_month_name(month_number)
  return full_month_name[0..2]
  #return full_month_name.slice(0, 3)
end

def volume_of_cube(side)
  return side ** side
end

def volume_of_sphere(radius)
  pi = 3.1415926
  volume = (4.0/3.0) * pi * (radius ** 3)
  return volume
end
