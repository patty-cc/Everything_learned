package com.example.user.tddintro;

/**
 * Created by user on 05/09/2017.
 */

public class Robot {

    private String name;
    private double battery;
    private String colour;

    public Robot(String name, String colour) {
        this.name = name;
        this.colour = colour;
        this.battery = 100.00;
    }

    public String getName() {
        return name;
    }

    public double getBattery() {
        return battery;
    }

    public String getColour() {
        return colour;
    }

    public String makeDrink(String drink){
        this.battery = this.battery - 10;
        return "I am making " + drink;
    }

    public String washDishes(){
        this.battery = this.battery - 30;
        return "I am washing the dishes";
    }

    public String doDusting(){
        this.battery = this.battery - 20;
        return "I am dusting";
    }

    public void rechargeBattery(){
        this.battery = 100.00;
    }
}
