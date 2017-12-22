package com.example.user.wordcounterapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class WordCountActivity extends AppCompatActivity {

    EditText userInputEditText;
    Button counterWordsButton;
    TextView resultText;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_word_count);

        userInputEditText = (EditText) findViewById(R.id.userInputEditText);
        counterWordsButton = (Button) findViewById(R.id.countButton);
        resultText = (TextView) findViewById(R.id.countResultText);
    }

    public void onCountButtonClicked( View Button ) {
        String userInput = userInputEditText.getText().toString();
        int numberOfWords = WordCounter.countWords(userInput);
        String numberOfWordsAsString = Integer.toString(numberOfWords);
        resultText.setText(numberOfWordsAsString);
    }
}
