def puts_later(string, seconds_to_wait)

  return Thread.new do
    sleep(seconds_to_wait)
    puts string
  end

end

puts "Hi"
thing = puts_later("bye", 2)
puts "what's up?"

thing.join
