class Wizard
  attr_reader( :name )

  def initialize( name, wand )
    @name = name
    @wand = wand
  end

  def cast_spell( spell_name )

    return @wand.cast( spell_name )
    # if @wand_wood == 'holly' && @wand_core == 'phoenix feather'
    #   return spell_name.upcase()
    # else
    #   return spell_name
    # end
  end

end
