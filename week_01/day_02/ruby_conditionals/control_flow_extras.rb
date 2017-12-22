#Guard statement

score = 6

result = "fail"
result = "pass" if (score >= 6)

puts result

# Ternary

result = (score >= 5) ? "pass" : "fail"
# action (condition) ? <condition:true> : <condition:false>
puts result


#and & or

craig_hungry = true
craig_tired = true

#and
puts "Craig is hangry!" if (craig_hungry && craig_tired)

#or
puts "Craig is grumpy!" if (craig_tired || craig_hungry)
