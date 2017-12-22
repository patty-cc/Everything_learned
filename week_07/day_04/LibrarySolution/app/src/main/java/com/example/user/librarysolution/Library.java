package com.example.user.librarysolution;

import java.util.ArrayList;

/**
 * Created by user on 14/09/2017.
 */

public class Library<T> {


    private ArrayList<T> items;


    public ArrayList<T>getItems(){
        return items;
    }

    public Library() {
        this.items = new ArrayList<T>();
    }

    public void addItem( T item){
        this.items.add( item );
    }
}
