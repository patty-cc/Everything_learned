package com.example.user.kaiju;

/**
 * Created by user on 06/09/2017.
 */

public abstract class Vehicle {

    String type;
    int healthValue;

    public Vehicle( String type, int healthValue){
        this.type = type;
        this.healthValue = healthValue;
    }

    public String vehicleType(){
        return this.type;
    }

    public int vehicleHealth(){
        return this.healthValue;
    }

}
