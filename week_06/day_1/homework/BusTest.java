import static org.junit.Assert.assertEquals;
import org.junit.*;

public class BusTest{
  Bus bus;
  Passenger passenger;

  @Before
  public void before(){
    bus = new Bus( 44 );
    passenger = new Passenger();
  }

  @Test
  public void hasNumber(){
    assertEquals( 44 , bus.hasNumber() );
  }

  @Test
  public void busIsEmpty(){
    assertEquals(0, bus.busCount() );
  }

  @Test
  public void canPickUpPassenger(){
    bus.pickUp(passenger);
    assertEquals(1, bus.busCount() );
  }

  @Test
  public void busIsFull(){
    for(int i = 0; i < 15; i++){
      bus.pickUp(passenger);
    }
    assertEquals( true, bus.isBusFull() );
  }

  @Test
  public void noPickUpIfFull(){
    for(int i = 0; i < 20; i++){
      bus.pickUp(passenger);
    }
    assertEquals( 15, bus.busCount() );
  }

  @Test
  public void emptyBus(){
    bus.pickUp(passenger);
    bus.empty();
    assertEquals( 0, bus.busCount() );
  }

}
