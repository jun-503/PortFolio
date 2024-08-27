

// src/components/CodeBlock.jsx


import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, children }) => {
  return (
    <SyntaxHighlighter language={language} style={solarizedlight}>
      {children}
    </SyntaxHighlighter>
  );
};

CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CodeBlock;

