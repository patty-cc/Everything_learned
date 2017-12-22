require_relative('../model/bounty_hunter.rb')


SpaceCowboy.delete_all()

cowboy1 = SpaceCowboy.new({
  "name" => "Won Jayne",
  "species" => "Varment",
  "bounty_value" => 100,
  "homeworld" => "Westworld"
  })

cowboy2 = SpaceCowboy.new({
  "name" => "Killy the Bid",
  "species" => "Vulcan",
  "bounty_value" => 50,
  "homeworld" => "Hoth"
  })

  cowboy1.save()

  cowboy2.save()

  cowboy = SpaceCowboy.all()
