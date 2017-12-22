package com.example.user.javainheritance;

/**
 * Created by user on 05/09/2017.
 */

public class MotorBike extends Vehicle {

    public MotorBike() {
        super(2);
    }

    public String startEngine() {
        return super.startEngine() + "! HELL YEAH!";
    }
}
