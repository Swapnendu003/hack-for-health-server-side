
const fetch = require('isomorphic-fetch');

const transformersApiUrl = 'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english';


const analyzeSentiments = async (answers) => {
  try {
    const sentiments = [];
    //const scores = [];

    for (const answer of answers) {
      const response = await fetch(transformersApiUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: answer }),
      });

      if (!response.ok) {
        const errorResponse = await response.text();
        console.error('Error from Hugging Face API:', errorResponse);
        throw new Error('Error from Hugging Face API');
      }

      const result = await response.json();
      const data = result[0];

      if (Array.isArray(result)) {
        let sentiment = '';
        let score = 0;
        const scoreLabel0 = data[0].score;
        const scoreLabel1 = data[1].score;
        if (scoreLabel0 >= scoreLabel1) {
          sentiment = data[0].label;
          score = scoreLabel0;
        }
        else {
          sentiment = data[1].label;
          score = scoreLabel1;
        }
        //const sentiment = scoreLabel0 >= scoreLabel1 ? data[0].label : data[1].label;
        sentiments.push(sentiment, score);
        
      } else {
        throw new Error('Invalid response format from Hugging Face API');
      }
    }

    return sentiments;
  } catch (error) {
    console.error('Error in sentiment analysis:', error);
    throw new Error('Error in sentiment analysis');
  }
};

module.exports = {
  analyzeSentiments,
};


