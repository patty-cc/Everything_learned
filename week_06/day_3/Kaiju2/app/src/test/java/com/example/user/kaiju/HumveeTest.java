package com.example.user.kaiju;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

/**
 * Created by user on 06/09/2017.
 */

public class HumveeTest {

    Humvee humvee;

    @Before
    public void before(){
        humvee = new Humvee("Humvee", 300 );
    }

    @Test
    public void hasType(){
        assertEquals( "Humvee", humvee.vehicleType() );
    }

    @Test
    public void hasVehicleHealth(){
        assertEquals( 50, humvee.vehicleHealth());
    }
}
