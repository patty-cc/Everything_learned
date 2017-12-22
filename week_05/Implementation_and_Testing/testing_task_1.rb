### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val   #bracket to be placed around val on line 8
  if val = 1    # = should ==
  return true   #indentation to be added to line 10
  else
  return false  #indentation to be added to line 12
  end
end

dif max a b   # dif should be def on line 16, brackets to be placed around a and b with comma inbetween (a, b)
  if a > b
      return a # slight over indentation on line 18
  else
  b           # return to be added before b on line 20 and also indented
  end
end
end           # extra end on line 23

def looper
  for i in 1..10
  puts i      # indentation needed on line 27
end          # between line 28 and 29 insert a return i statement
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#end to be added to line 38

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"  # func1(3) failed should read max(100,1) failed
  failrues = failures + 1 # failrues should be spelled as failures
end


if failures
  puts "Test Failed" # Test failed should read as Test Passed
else
  puts "Test Passed" # Test Passed should read as Test Failed
end
