import React, { useState, useCallback } from 'react';

/**
 * A reusable custom hook for copying text to the clipboard.
 * 
 * @returns {Array} [isCopied, copy] - A boolean indicating if the text was copied successfully, and the copy function.
 */
export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(async (text) => {
    // Check if the clipboard API is supported
    if (!navigator?.clipboard) {
      console.warn('Clipboard API not supported in this environment');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      
      // Reset the copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (error) {
      console.error('Failed to copy text to clipboard:', error);
      setIsCopied(false);
      return false;
    }
  }, []);

  return [isCopied, copy];
};

/**
 * An example wrapper component that utilizes the hook.
 * 
 * @param {Object} props
 * @param {string} props.textToCopy - The text you want to be copied.
 * @param {string} props.label - Button text before copying.
 * @param {string} props.successLabel - Button text after successfully copying.
 */
const CopyToClipboard = ({ textToCopy, label = 'Copy', successLabel = 'Copied!' }) => {
  const [isCopied, copy] = useCopyToClipboard();

  return (
    <button
      onClick={() => copy(textToCopy)}
      style={{
        padding: '8px 16px',
        backgroundColor: isCopied ? '#4caf50' : '#2196f3',
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'background-color 0.2s ease-in-out',
      }}
      title="Copy to clipboard"
      aria-label="Copy to clipboard"
    >
      {isCopied ? successLabel : label}
    </button>
  );
};

export default CopyToClipboard;
