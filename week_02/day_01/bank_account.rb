class BankAccount

  attr_reader( :holder_name, :amount, :type )
  attr_writer( :holder_name, :amount, :type )

  def initialize( holder_name, amount, type )
    @holder_name = holder_name
    @amount = amount
    @type = type
  end

  #code below equates to attr_reader( :symbol, :symbol, :symbol)
  # def holder_name
  #   return @holder_name
  # end
  #
  # def amount
  #   return @amount
  # end
  #
  # def type
  #   return @type
  # end

  #code below equates to attr_writer( :symbol, :symbol, :symbol )
  # def set_holder_name( name )
  #   @holder_name = name
  # end
  #
  # def set_amount( amount )
  #   @amount = amount
  # end
  #
  # def set_type(type)
  #   @type = type
  # end

end
