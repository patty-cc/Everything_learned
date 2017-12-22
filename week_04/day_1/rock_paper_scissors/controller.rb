require('sinatra')
require('sinatra/contrib/all') if development?

get '/rock/scissors' do
  return 'rock wins'
end

get '/paper/scissors' do
  return 'scissors wins'
end

get '/paper/rock' do
  return 'paper wins'
end
