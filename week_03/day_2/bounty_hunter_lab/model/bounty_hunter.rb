require("pg")

class SpaceCowboy


  attr_accessor(:name, :species, :bounty_value, :homeworld)
  attr_reader(:id)

  def initialize(the_cowboy)
    @id = the_cowboy["id"].to_i if the_cowboy["id"]
    @name = the_cowboy["name"]
    @species = the_cowboy["species"]
    @bounty_value = the_cowboy["bounty_value"].to_i
    @homeworld = the_cowboy["homeworld"]
  end

  def save()
    db = PG.connect({dbname: "space_cowboy", host: "localhost"})
    sql = "
    INSERT INTO space_cowboy (name, species, bounty_value, homeworld)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    "
    values = [@name, @species, @bounty_value, @homeworld]
    db.prepare("save", sql)
    @id = db.exec_prepared("save", values)[0]["id"].to_i
    db.close()
  end

  def SpaceCowboy.all()
    db = PG.connect({dbname: "space_cowboy:", host: "localhost"})
    sql = "SELECT * FROM space_cowboy;"
    values = []
    db.prepare("all", sql)
    cowboy = db.exec_prepared("all", values)
    db.close()
    return cowboy
  end

  def SpaceCowboy.delete_all()
    db = PG.connect({dbname: "space_cowboy", host: "localhost"})
    sql = "DELETE FROM space_cowboy;"
    values = []
    db.prepare("delete_all", sql)
    db.exec_prepared("delete_all", values)
    db.close
  end

  def delete()
    db = PG.connect({dbname: "space_cowboy", host: "localhost"})
    sql = "DELETE FROM space_cowboy
    WHERE id = $1"
    values = [@id]
    db.prepare("delete_one", sql)
    db.exec_prepared("delete_one", values)
    db.close
  end

  def update()
    db = PG.connect({dbname: "space_cowboy", host: "localhost"})
    sql = "
    UPDATE space_cowboy
    (name, species, bounty_value, homeworld)
    =
    ($1, $2, $3, $4)
    WHERE id = $5"
    values = [@name, @species, @bounty_value, @homeworld, @id]
    db.prepare("update", sql)
    db.exec_prepared("update", value)
    db.close
  end

end
