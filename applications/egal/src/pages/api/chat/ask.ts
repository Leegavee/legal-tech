import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";


const openAIConfig = new Configuration({
  apiKey: process.env.OPENAI_KEY
});

const openapi = new OpenAIApi(openAIConfig);

export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
        const { prompt } = req.body;
        const answer = await openapi.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0,
            max_tokens: 3000
        });

        const text = answer.data.choices[0].text;
        res.status(200).json({ text });
    } catch (error:any) {
        res.status(500).json({
            message: error?.message
        })
    }
}