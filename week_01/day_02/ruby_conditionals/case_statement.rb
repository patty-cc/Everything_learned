puts "What was your final score?"
score = gets.chomp().to_i()

case score
  when 10
    puts "Genius!"
  when 8..9
    puts "Yeah, nice."
  when 5..7
    puts "Pass"
  when 4
    puts "Please resit the test"
  else
    puts "Fail!"
end
