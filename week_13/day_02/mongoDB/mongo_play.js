use farm;
db.dropDatabase();

db.animals.insert({
  name: "Erik",
  type: "Polar Bear"
});

db.animals.insert({
  name: "Bob",
  type: "Bobcat"
});

db.animals.insert({
  name: "Fred",
  type: "Duck"
});

db.animals.find();
db.animals.find({name: "Erik"});

db.animals.update(
  {name: "Fred"},
  {
    $set: { type: "Goose"}
  }
);

db.animals.find();

db.animals.remove({name: "Fred"});

db.animals.find();
