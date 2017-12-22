package com.example.user.toptensongs;

import java.util.ArrayList;

/**
 * Created by user on 20/09/2017.
 */

public class TopSongs {

    private ArrayList<Song> list;

    public TopSongs() {
        list = new ArrayList<>();
        list.add(new Song( 1, "Too Good At Goodbyes", "Sam Smith"));
        list.add(new Song( 2, "New Rules", "Dua Lipa"));
        list.add(new Song( 3, "Look What You Made Me Do", "Taylor Swift"));
        list.add(new Song( 4, "What About Us", "Pink"));
        list.add(new Song( 5, "Dusk Till Dawn", "Zayn"));
        list.add(new Song( 6, "Friends", "Justin Bieber"));
        list.add(new Song( 7, "Reggaeton Lento", "Little Mix"));
        list.add(new Song( 8, "More Than Friends", "James Hype"));
        list.add(new Song( 9 , "Ready For It", "Taylor Swift"));
        list.add(new Song( 10, "Havana", "Camila Cabello"));
    }

    public ArrayList<Song> getList() {
        return new ArrayList<>(list);
    }
}
