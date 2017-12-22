package com.example.user.toptensongs;

/**
 * Created by user on 20/09/2017.
 */

public class Song {

    private Integer ranking;
    private String title;
    private String artist;

    public Song(Integer ranking, String title, String artist){
        this.ranking = ranking;
        this.title = title;
        this.artist = artist;
    }

    public Integer getRanking() {
        return ranking;
    }

    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }
}
