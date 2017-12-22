secret_number = 7

puts "Guess a number"

guess = gets.chomp.to_i()

while (guess != secret_number) do
  if guess < secret_number
    puts "Nope, your number was lower, guess again"
  else
    puts "Unlucky, your number was too high this time. Guess again"
  end
  #puts "Nope, try again"
  guess = gets.chomp.to_i()
end

puts "Yay!, it was #{secret_number}!"
