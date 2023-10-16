import OpenAIApi from "openai";
const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

const generateResponse = async (message) => {
  try {
    const prompt_subject =
      "Tarefa: Escreva os pontos chaves que devo estudar sobre " +
      message +
      "\n" +
      "Formato: json";
    //   "Quais são os pontos chave que devo estudar sobre o seguinte assunto: " +
    //   message;
    const completion = await openai.completions.create({
      model: "text-davinci-003",
      prompt: prompt_subject,
      max_tokens: 2000,
      n: 1,
      temperature: 0.3,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    if (completion.choices && completion.choices.length > 0) {
      return JSON.parse(completion.choices[0].text);
    } else {
      throw new Error("No response from OpenAI API");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error generating response from OpenAI API");
  }
};

export { generateResponse };
