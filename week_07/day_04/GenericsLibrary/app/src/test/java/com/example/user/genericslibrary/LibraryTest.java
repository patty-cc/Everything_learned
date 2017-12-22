package com.example.user.genericslibrary;

/**
 * Created by user on 14/09/2017.
 */

        import org.junit.Before;
        import org.junit.Test;

        import java.util.ArrayList;
        import java.util.List;

        import static junit.framework.Assert.assertEquals;

public class LibraryTest {

    Library<Book> bookLibrary;

    @Before
    public void before(){
        bookLibrary = new Library<Book>();
    }

    @Test
    public void librarySize() {
        assertEquals( 0, bookLibrary.getItems().size());
    }

    @Test
    public void canAddBook() {
        Book book = new Book("Divinci");

        bookLibrary.addItem(book);

        assertEquals(1 , bookLibrary.getItems().size());
    }

}
