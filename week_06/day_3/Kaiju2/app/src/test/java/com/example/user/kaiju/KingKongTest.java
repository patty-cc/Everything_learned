package com.example.user.kaiju;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

import com.example.user.kaiju.*;

/**
 * Created by user on 06/09/2017.
 */

public class KingKongTest {

    KingKong kingKong;

    @Before
    public void before(){
        kingKong = new KingKong("King Kong", 100, 2000);
    }

    @Test
    public void hasName(){
        assertEquals( "King Kong", kingKong.getName() );
    }

    @Test
    public void hasAttackValue(){
        assertEquals( 100, kingKong.getAttackValue() );
    }

    @Test
    public void hasHealthValue(){
        assertEquals( 2000, kingKong.getHealthValue() );
    }

    @Test
    public void hasMoveMethod(){
        assertEquals( "Bounce! hoo hoo hoo", kingKong.getMove() );
    }
}
