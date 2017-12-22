package com.example.user.genericslibrary;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by user on 14/09/2017.
 */

public class Library<T> {

    private List<T> items;

    public Library(){
        this.items = new ArrayList<>();
    }

    public List<T> getItems() {
        return items;
    }

    public void addItem(T item) {
        this.items.add(item);
    }

}
