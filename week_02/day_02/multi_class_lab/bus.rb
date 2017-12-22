class Bus


   attr_reader(:bus_number, :destination)


  def initialize(bus_number, destination )
    @bus_number = bus_number
    @destination = destination
    @passengers = []
  end

  def bus_number
    return @bus_number
  end

  def bus_destination
    return @destination
  end

  def engine_noise
    return 'broom broom'
  end


  def add_to_array(passenger)
    @passengers.push(passenger)
  end

  def passengers_number
    return @passengers.count()
  end

  def delete_from_array(passenger)
    @passengers.delete(passenger)
  end

  def empty_array
    return @passengers.clear()
  end



end
