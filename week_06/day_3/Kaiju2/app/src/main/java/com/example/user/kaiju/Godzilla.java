package com.example.user.kaiju;

/**
 * Created by user on 06/09/2017.
 */

public class Godzilla extends Kaiju {

    public Godzilla(String name, int attackValue, int healthValue) {
        super(name, attackValue, healthValue);
    }

    public String getMove(){
        return "Stomp!";
    }

}
