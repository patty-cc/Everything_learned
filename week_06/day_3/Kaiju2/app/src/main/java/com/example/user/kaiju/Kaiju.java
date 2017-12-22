package com.example.user.kaiju;

/**
 * Created by user on 06/09/2017.
 */

public abstract class Kaiju {

    String name;
    int attackValue;
    int healthValue;

    public Kaiju( String name, int attackValue, int healthValue){
        this.name = name;
        this.attackValue = attackValue;
        this.healthValue = healthValue;
    }

    public String getName(){
        return this.name;
    }

    public int getAttackValue(){
        return this.attackValue;
    }

    public int getHealthValue(){
        return this.healthValue;
    }

}
