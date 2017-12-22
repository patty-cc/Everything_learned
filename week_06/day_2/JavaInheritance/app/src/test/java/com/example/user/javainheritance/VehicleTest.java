package com.example.user.javainheritance;
import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

/**
 * Created by user on 05/09/2017.
 */

public class VehicleTest {

    Car car;
    MotorBike motorbike;

    @Before
    public void before(){
        car = new Car();
        motorbike = new MotorBike();
    }

    @Test
    public void testCarHasFourWheels() {
        assertEquals( 4, car.getNumWheels() );
    }

    @Test
    public void testMotorbikeHasTwoWheels() {
        assertEquals( 2, motorbike.getNumWheels() );
    }

    @Test
    public void testCarGoesVrrmm() {
        String result = car.startEngine();
        assertEquals("Vrrmm", result );
    }

    @Test
    public void testMotorbikeGoesVrrmm() {
        String result = motorbike.startEngine();
        assertEquals("Vrrmm! HELL YEAH!", result );
    }

}
