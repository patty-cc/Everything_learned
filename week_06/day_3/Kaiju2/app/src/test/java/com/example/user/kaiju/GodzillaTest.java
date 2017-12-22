package com.example.user.kaiju;



/**
 * Created by user on 06/09/2017.
 */

import org.junit.*;

import static org.junit.Assert.assertEquals;

import com.example.user.kaiju.*;

public class GodzillaTest {

    Godzilla godzilla;

    @Before
    public void before(){
        godzilla = new Godzilla("Godzilla", 150, 1000);
    }

    @Test
    public void hasName(){
        assertEquals( "Godzilla", godzilla.getName() );
    }

    @Test
    public void hasAttackValue(){
        assertEquals( 150, godzilla.getAttackValue() );
    }

    @Test
    public void hasHealthValue(){
        assertEquals( 1000, godzilla.getHealthValue() );
    }

    @Test
    public void hasMoveMethod(){
        assertEquals( "Stomp!", godzilla.getMove() );
    }
}
