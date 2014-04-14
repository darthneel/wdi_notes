require 'sinatra'


def parse_equation(equation_string)
  equation_array = equation_string.split(" ")
  if equation_array.length == 3
    equation_array[0].to_f.send(equation_array[1].to_sym,equation_array[2].to_f) if equation_array
  else
    "0.0"
  end
end

get '/' do 
  
  @operation = params[:operation] || ""

  if params[:second_num]
    @equation = params[:equation] || ""
    @equation += " #{params[:second_num]}"
    @answer = parse_equation(@equation)
    @answer = "#{@equation} = #{@answer}"
  else
    @equation = params[:equation] || ""
    @first_num = params[:first_num]
    @second_num = params[:second_num] 
    @operation = params[:operation] || ""

    @equation = "#{@first_num}" if @first_num
    @equation += " #{@operation}" if @operation
    @equation += " #{@second_num}" if @second_num
  end

  erb :index
end