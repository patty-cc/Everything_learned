use music_data;
db.dropDatabase();

db.songs.insert([
  {
    title: "Rockstar",
    artist: "Post Malone"
  },
  {
    title: "Havana",
    artist: "Camila Cabello"
  },
  {
    title: "Too Good at Goodbyes",
    artist: "Sam Smith"
  },
  {
    title: "Lonely Together",
    artist: "Avicii"
  },
  {
    title: "Reggaeton Lento",
    artist: "CNCO & Little Mix"
  }
]);
