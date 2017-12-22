package com.example.user.toptensongs;

import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 20/09/2017.
 */

public class SongTest {

    Song song;

    @Test
    public void testSongName(){
        song = new Song( 1, "Best of you", "Foo Fighters");
        assertEquals( "Best of you", song.getTitle());
    }

    @Test
    public void testSongArtist() {
        song = new Song( 2, "Local boy in a photograph", "Stereophonics");
        assertEquals( "Stereophonics", song.getArtist());
    }

    @Test
    public void testSongRank() {
        song = new Song( 3, "Who Knew", "Pink");
        assertEquals( 3, song.getRanking());
    }
}
