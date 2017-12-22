package com.example.user.wordcounterapp;

/**
 * Created by user on 19/09/2017.
 */

public class WordCounter {
    public static int countWords(String userInput) {
//        return userInput.split( " " ).length;
        if( userInput == null || userInput.trim().isEmpty() ) {
            return 0;
        }
        String[] arrayOfWords = userInput.trim().split( " " );
        int numberOfWords = arrayOfWords.length;
        return numberOfWords;

    }
}

// "Hello how are you today?".split(" ");
// ["Hello", "how", "are", "you", "today?"]
