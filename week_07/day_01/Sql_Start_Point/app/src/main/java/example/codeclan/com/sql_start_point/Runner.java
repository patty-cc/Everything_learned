package example.codeclan.com.sql_start_point;

/**
 * Created by user on 30/08/2017.
 */

public class Runner {

    public static void main(String[] args) {
        Artist artist1 = new Artist("Led Zepplin");
        artist1.save();
        Artist.all();

        Album album1 = new Album("Maybe", "Rock", artist1);
        album1.save();
        Album.all();

    }
}
