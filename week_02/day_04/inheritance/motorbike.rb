require_relative('vehicle.rb')

class Motorbike < Vehicle

  def initialize()
    super(2)
  end

  def start_engine
    return super() + " (HELL YEAH!)"
  end
  
end
