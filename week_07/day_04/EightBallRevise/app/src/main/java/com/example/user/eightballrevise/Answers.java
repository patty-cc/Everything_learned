package com.example.user.eightballrevise;


import java.util.ArrayList;
import java.util.Random;

/**
 * Created by user on 14/09/2017.
 */

public class Answers {

    private ArrayList<String> answers;

    public Answers(){
        this.answers = new ArrayList<>();
    }

    public int numberOfAnswers() {
        return answers.size();
    }

    public void addAnswer(String answer) {
        answers.add( answer );
    }


    public String getFirstAnswer() {
        return this.answers.get(0);
    }

    public String getRandomAnswer() {
        Random random = new Random();
        int myIndex = random.nextInt(answers.size());
        return this.answers.get(myIndex);
    }
}
