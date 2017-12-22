package com.example.user.kaiju;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Created by user on 06/09/2017.
 */

public class TankTest {

    Tank tank;

    @Before
    public void before(){
        tank = new Tank( "Challenger", 500 );
    }

    @Test
    public void testTypeOfVehicle(){
        assertEquals( "Challenger", tank.vehicleType() );
    }

    @Test
    public void testVehicleHealth(){
        assertEquals( 300, tank.vehicleHealth() );
    }
}
