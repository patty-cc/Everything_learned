package com.example.user.polymorphism;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 06/09/2017.
 */

public class BearTest {

    @Test
    public void canEatSalmon() {
        //arrange
        Bear bear =  new Bear();
        Salmon fish = new Salmon();
        //act
        bear.eat(fish);
        //assert
        assertEquals(200, bear.getEnergy());
    }

    @Test
    public void canEatTrout() {
        //arange
        Bear bear = new Bear();
        Trout fish = new Trout();
        //act
        bear.eat(fish);
        //assert
        assertEquals( 50, bear.getEnergy() );
    }

}
