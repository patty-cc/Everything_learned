def map(array)
  result = []
  for item in array
    result.push( yield( item ) )
  end
  return result
end

print map( [2, 3, 4 ] ) { |i| i * 2 }
print map( [ "blocks", "are", "cool" ] ) { |i| i.capitalize }

# def each( array )
#
#   for item in array
#     puts yield( item )
#   end
#
# end
#
# each([3, 6, 9, 8 ]) { |n| n * 2 }
# each(["blocks", "are", "cool" ]) { |str| str.upcase() }


# def my_name
#   weather = " It's raining :( "
#   puts "hello " + yield( weather, 3 )
# end
#
# my_name() { | weather, time | "Rick, " + weather + time.to_s + " O'clock"}
# my_name() { | w | w + "Stewart" }
