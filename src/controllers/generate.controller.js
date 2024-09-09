
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);
const model = genAI.getGenerativeModel({ model: process.env.AI_MODEL});

exports.generate = async (req, res)=>{
    try{
        const {prompt} = req.body;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        res.status(200).send({ text });
    }
    catch(error){
        res.status(500).send(error);
    }
}