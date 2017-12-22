package com.example.user.polymorphism;

/**
 * Created by user on 06/09/2017.
 */

public class Bear {
    private int energy;

    public Bear() {
        energy = 0;
    }

    public void eat(Edible foods) {
        energy += foods.getCalories();
    }

    public int getEnergy() {
        return energy;
    }
}
