package com.example.user.eightballrevise;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertNotNull;

/**
 * Created by user on 14/09/2017.
 */

public class AnswersTest {



    @Test
    public void startsWithNoAnswers(){
        Answers answers = new Answers();
        assertEquals( 0 , answers.numberOfAnswers());
    }

    @Test
    public void canAddAnswers(){
        Answers answers = new Answers();
        answers.addAnswer("Yes!");
        assertEquals( 1 , answers.numberOfAnswers());
    }

    @Test
    public void canGetFirstAnswer(){
        Answers answers = new Answers();
        answers.addAnswer("Yes!");
        String answer = answers.getFirstAnswer();
        assertEquals( "Yes!" , answer);
    }

    @Test
    public void canGetRandomAnswer(){
        Answers answers = new Answers();
        answers.addAnswer("Yes!");
        answers.addAnswer("No!");
        String answer = answers.getRandomAnswer();
        assertNotNull(answer);
    }


}
