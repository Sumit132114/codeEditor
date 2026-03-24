import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
    return (
        <div className="language-selector">
            <label className="selector-label">Language:</label>
            <select
                value={language}
                onChange={(e) => onSelect(e.target.value)}
                className="selector-input"
            >
                {languages.map(([lang, version]) => (
                    <option key={lang} value={lang}>
                        {lang} ({version})
                    </option>
                ))}
            </select>
        </div>
    );
};
export default LanguageSelector;
