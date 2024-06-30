import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { Highlight, themes } from 'prism-react-renderer';
import './CodeEditor.css';
import { CODE_SNIPPETS } from '../constants';


export const CodeEditor = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(CODE_SNIPPETS[language]);
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setCode(CODE_SNIPPETS[selectedLanguage]);
  };


  return (
    <div className="editor-container">
      <div className="language-selector">
        <label htmlFor="language">Select Language: </label>
        <select id="language" value={language} onChange={handleLanguageChange} >
          <option value="javascript">JavaScript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          
        </select>
      </div>
      <div className="editor">
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={(code) => (
          <Highlight theme={themes.github} code={code} language={language}>
            {({ tokens, getLineProps, getTokenProps }) => (
              <pre>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        )}
        
      />
    </div>
    </div>
  );
};


