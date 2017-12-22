public class Bus{

  private int number;
  private Passenger[] seats;

  public Bus(int number){
    this.number = number;
    this.seats = new Passenger[15];
  }

  public int hasNumber(){
    return this.number;
  }

  public int busCount(){
    int count = 0;

    for(Passenger passenger : this.seats){
      if (passenger != null){
        count++;
      }
    }
    return count;
  }

  public void pickUp(Passenger passenger){
    if(this.isBusFull()){
      return;
    }
    int busCount = busCount();
    seats[busCount] = passenger;
  }

  public boolean isBusFull(){
    return this.busCount() == this.seats.length;
  }

  public void empty(){
    for(int i = 0; i < seats.length; i++){
      seats[i] = null;
    }
  }

}
