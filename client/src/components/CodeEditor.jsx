import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../constants";

const CodeEditor = ({ code, language, onCodeChange }) => {
    const editorRef = useRef();

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const handleEditorChange = (value) => {
        onCodeChange(value);
    };

    return (
        <div className="editor-container">
            <Editor
                height="75vh"
                theme="vs-dark"
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                onMount={onMount}
                value={code}
                onChange={handleEditorChange}
                options={{
                    minimap: { enabled: false },
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }}
            />
        </div>
    );
};
export default CodeEditor;
