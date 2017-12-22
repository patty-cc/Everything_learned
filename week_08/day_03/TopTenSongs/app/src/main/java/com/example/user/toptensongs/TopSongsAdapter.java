package com.example.user.toptensongs;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by user on 20/09/2017.
 */

public class TopSongsAdapter extends ArrayAdapter<Song> {

    public TopSongsAdapter(Context context, ArrayList<Song> songs) {
        super (context, 0, songs );
    }

    @Override
    public View getView( int position, View listItemView, ViewGroup parent ) {
        if (listItemView == null ) {
            listItemView= LayoutInflater.from(getContext()).inflate(R.layout.songs_item, parent, false);
        }

        Song currentSong = getItem(position);

        TextView chartNumber = (TextView)listItemView.findViewById(R.id.chart_number);
        chartNumber.setText(currentSong.getRanking().toString());

        TextView songName = (TextView)listItemView.findViewById(R.id.song_title);
        songName.setText(currentSong.getTitle().toString());

        TextView artistName = (TextView)listItemView.findViewById(R.id.artist_name);
        artistName.setText(currentSong.getArtist().toString());

        return listItemView;
    }
}
