//search subject/discipline
import { generateResponse } from "./../services/chatgpt_integration.js";

export const search = async (req, res) => {
    const subject = req.body.subject;

    try {
        const response = await generateResponse(subject);
        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
