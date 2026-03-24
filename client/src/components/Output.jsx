import React, { useState } from "react";
import { executeCode } from "../api";

const Output = ({ code, language }) => {
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async () => {
        const sourceCode = code;
        if (!sourceCode) return;
        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, sourceCode);
            setOutput(result.output.split("\n"));
            setIsError(!!result.stderr);
        } catch (error) {
            console.log(error);
            setIsError(true);
            setOutput(["An error occurred", error.message || "Unable to run code"]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="output-container">
            <button
                className={`run-button ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
                onClick={runCode}
            >
                {isLoading ? "Running..." : "Run Code"}
            </button>
            <div
                className={`output-box ${isError ? "error" : ""}`}
            >
                {output ? (
                    output.map((line, i) => <p key={i}>{line}</p>)
                ) : (
                    <p className="placeholder">Click "Run Code" to see the output here</p>
                )}
            </div>
        </div>
    );
};
export default Output;
