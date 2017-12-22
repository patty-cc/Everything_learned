package com.example.user.librarysolution;

import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 14/09/2017.
 */

public class LibraryTest {

    @Test
    public void canAddItem() {
        //Arrange
        Library<Book> lib = new Library<Book>();
        Book book = new Book();
        //Act
        lib.addItem( book );
        //Assert
        assertEquals( 1, lib.getItems().size());
    }

    @Test
    public void canAddMovie() {
        //Arrange
        Library<Movie> lib = new Library<Movie>();
        Movie movie = new Movie();
        //Act
        lib.addItem( movie );
        //Assert
        assertEquals( 1, lib.getItems().size());
    }
}
