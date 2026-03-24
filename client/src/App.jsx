import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import LanguageSelector from "./components/LanguageSelector";
import Output from "./components/Output";
import { CODE_SNIPPETS } from "./constants";

function App() {
    const [language, setLanguage] = useState("javascript");
    const [code, setCode] = useState(CODE_SNIPPETS["javascript"]);

    const onSelect = (lang) => {
        setLanguage(lang);
        setCode(CODE_SNIPPETS[lang]);
    };

    const onCodeChange = (newCode) => {
        setCode(newCode);
    };

    return (
        <div className="app-container">
            <div className="header">
                <h1>Code Editor</h1>
                <LanguageSelector language={language} onSelect={onSelect} />
            </div>
            <div className="workspace">
                <div className="editor-pane">
                    <CodeEditor code={code} language={language} onCodeChange={onCodeChange} />
                </div>
                <div className="output-pane">
                    <Output code={code} language={language} />
                </div>
            </div>
        </div>
    );
}

export default App;
