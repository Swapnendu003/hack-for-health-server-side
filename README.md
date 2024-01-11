
## ChatBot Backend Code with Generative AI and Sentiment Analysis

This repository contains the server-side code for a ChatBot that incorporates Google's Generative AI, Distil BERT Language Model (LLM) for sentiment analysis, and Azure Language Translator for multilingual support. The ChatBot is designed to assist users in mental health-related queries and maintain a focus on topics related to well-being.

### Technologies Used:

- **Google Generative AI:**
  - Powering the main conversational model.
  - Utilized for generating responses based on user input.
  - Ensures a natural and context-aware conversation.

- **Distil BERT Language Model:**
  - Integrated for sentiment analysis of user responses.
  - Analyzes sentiments to provide empathetic and tailored support.

- **Azure Language Translator:**
  - Enables multilingual capabilities.
  - Users can interact with the ChatBot in various languages, enhancing accessibility.

### Getting Started:

1. **Installation:**
   - Clone this repository.
   - Run `npm install` to install dependencies.

2. **Configuration:**
   - Set up the necessary API keys and credentials for Google Generative AI, Distil BERT, and Azure Language Translator. Update the corresponding configuration files.

3. **Run the Server:**
   - Execute `npm start` to run the server.

4. **API Endpoints:**
   - Explore the following API endpoints:
     - `/api/sentiment/analyze`: Performs sentiment analysis on user responses.
     - `/api/calls/makeCall`: Initiates a voice call using Twilio.
     - `/translate/questions`: Translates questions to a specified language using Azure Language Translator.
     - `/generate/geminiResponse`: Generates responses using Google Generative AI based on user input.
     - `/chat/runChat`: Manages the main chat interaction.

### Usage Guidelines:

- **Mental Health Support:**
  - Users can seek advice on mental health issues.
  - The ChatBot provides information, coping strategies, and resources.

- **Multilingual Support:**
  - Users can interact with the ChatBot in their preferred language.
  - The Azure Language Translator ensures translation to and from multiple languages.

- **Sentiment Analysis:**
  - The ChatBot assesses the sentiment of user responses for a personalized approach.
  - It tailors responses based on emotional context.

- **Voice Calls:**
  - Users can initiate voice calls through the Twilio integration for immediate assistance.

### Important Note:

This repository is a powerful tool for mental health support and well-being. It is crucial to handle user data responsibly and prioritize user privacy. Ensure compliance with ethical standards and legal regulations related to mental health services and user data.

**Disclaimer:** This ChatBot is not a substitute for professional mental health advice. Encourage users to seek professional help if needed.

Feel free to contribute, enhance, and customize the ChatBot for broader applicability and improved user experiences. If you encounter issues or have suggestions, open an issue or create a pull request.

Thank you for contributing to mental health support through technology!mental health topics and provides appropriate support.

4. **Translation Service:**
   - Translation functionality allows users to receive responses in different languages.
   - The chatbot can translate both user queries and generated responses.

5. **Twilio Integration:**
   - A Twilio integration enables the chatbot to initiate voice calls.
   - Users can request a call, providing a phone number, and the chatbot will initiate the call.

### Endpoints

1. **/api/sentiment/analyze**
   - Analyzes the sentiment of user responses related to mental health.

2. **/api/calls/makeCall**
   - Initiates a voice call using Twilio. Users provide their phone number.

3. **/translate/questions**
   - Translates a set of questions to the specified language.

4. **/generate/generateGeminiResponse**
   - Generates responses from the Google Generative AI based on user input.

5. **/chat/runChat**
   - Runs the entire chat process, including mental health support and work-life balance tips.

### Important Notes

- Ensure that you have the necessary API keys and access tokens for Google Generative AI, Twilio, and any other external services used in the code.

- The code structure is organized into controllers for modularity and ease of maintenance.

- The provided functionalities are specific to mental health-related queries, and the chatbot will ignore non-relevant questions.

Feel free to explore, modify, and adapt the code to suit your specific needs. If you have any questions or encounter issues, please refer to the documentation of the respective APIs and services used.
