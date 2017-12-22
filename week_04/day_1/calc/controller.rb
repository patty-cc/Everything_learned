require('sinatra')
require('sinatra/contrib/all') if development?
require_relative('./models/calculator')

require('json')

get '/' do
  erb(:home)
end

get '/about_us' do
  erb(:about_us)
end

get '/all/:number1/:number2' do

  content_type(:json)

  calculator = Calculator.new(params[:number1].to_f(), params[:number2].to_f())
  result = {
    add: calculator.add(),
    subtract: calculator.subtract(),
    multiply: calculator.multiply(),
    divide: calculator.divide()
  }

  return result.to_json()
end

get '/add/:number1/:number2' do
  calculator = Calculator.new(params[:number1].to_i(), params[:number2].to_i())

  @answer = calculator.add()

  erb( :result )
end

get '/subtract/:number1/:number2' do
  calculator = Calculator.new(params[:number1].to_i(), params[:number2].to_i())
  # return "result: #{calculator.subtract()}"

  @answer = calculator.subtract()

  erb( :result)
end

get '/multiply/:number1/:number2' do
  calculator = Calculator.new(params[:number1].to_i(), params[:number2].to_i())

  @answer = calculator.multiply()

  erb( :result )
end

get '/divide/:number1/:number2' do
  calculator = Calculator.new(params[:number1].to_f(), params[:number2].to_f())

  @answer = calculator.divide()

  erb( :result )
end
