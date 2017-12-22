package com.example.user.polymorphism;

/**
 * Created by user on 06/09/2017.
 */

public class Salmon implements Edible {
    private int calories;

    public Salmon() {
        calories = 200;
    }


    public int getCalories() {
        return calories;
    }
}
