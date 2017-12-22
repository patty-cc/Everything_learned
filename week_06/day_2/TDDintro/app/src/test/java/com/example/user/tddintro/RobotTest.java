package com.example.user.tddintro;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 * Created by user on 05/09/2017.
 */

public class RobotTest {

    Robot robot;

    @Before
    public void before(){
        robot = new Robot("C3PO", "Gold");
    }

    @Test
    public void testRobotSetup(){
        assertEquals( "C3PO", robot.getName());
        assertEquals( "Gold", robot.getColour());
    }

    @Test
    public void checkBattery(){
        assertEquals( 100.0, robot.getBattery(), 10e-6);
    }

    @Test
    public void makeTea(){
       String result = robot.makeDrink("tea");
        assertEquals( 90.0, robot.getBattery(), 10e-6 );
        assertEquals( "I am making tea", result);
    }

    @Test
    public void robotCanWashDishes(){
        String result = robot.washDishes();
        assertEquals( 70.0, robot.getBattery(), 10e-6 );
        assertEquals( "I am washing the dishes", result);
    }

    @Test
    public void testRobotDusting(){
        String result = robot.doDusting();
        assertEquals( 80.0, robot.getBattery(), 10e-6 );
        assertEquals( "I am dusting", result);
    }

    @Test
    public void testBatteryRecharge(){
        robot.washDishes();
        robot.doDusting();
        robot.makeDrink("tea");
        robot.rechargeBattery();
        assertEquals( 100.0, robot.getBattery(), 10e-6 );
    }

}
