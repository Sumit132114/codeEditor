import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
    baseURL: "http://localhost:5000",
});

export const executeCode = async (language, sourceCode) => {
    const response = await API.post("/execute", {
        language: language,
        version: LANGUAGE_VERSIONS[language],
        code: sourceCode,
    });
    return response.data;
};
