package com.example.user.kaiju;

/**
 * Created by user on 06/09/2017.
 */

public class KingKong extends Kaiju {

    public KingKong(String name, int attackValue, int healthValue) {
        super(name, attackValue, healthValue);
    }

    public String getMove(){
        return "Bounce! hoo hoo hoo";
    }

}
