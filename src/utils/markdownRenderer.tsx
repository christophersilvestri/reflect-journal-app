import React from 'react';
import { Text } from 'react-native';

interface RenderFormattedContentProps {
  text: string;
  styles: any;
}

export const renderFormattedContent = ({ text, styles }: RenderFormattedContentProps) => {
  const lines = text.split('\n');
  return lines.map((line, index) => {
    if (line.startsWith('# ')) {
      return (
        <Text key={index} style={styles.headingText}>
          {line.substring(2)}
        </Text>
      );
    } else if (line.startsWith('• ')) {
      return (
        <Text key={index} style={styles.bulletText}>
          {line}
        </Text>
      );
    } else {
      // Apply bold and italic formatting
      let formattedLine = line;
      formattedLine = formattedLine.replace(/\*\*(.*?)\*\*/g, (match, text) => {
        return `__BOLD__${text}__BOLD__`;
      });
      formattedLine = formattedLine.replace(/\*(.*?)\*/g, (match, text) => {
        return `__ITALIC__${text}__ITALIC__`;
      });

      const parts = formattedLine.split(/(__BOLD__|__ITALIC__)/);
      const elements = parts.map((part, partIndex) => {
        if (part === '__BOLD__') {
          const nextPart = parts[partIndex + 1];
          parts.splice(partIndex + 1, 1); // Remove the next part from array
          return (
            <Text key={`${index}-${partIndex}`} style={styles.boldText}>
              {nextPart}
            </Text>
          );
        } else if (part === '__ITALIC__') {
          const nextPart = parts[partIndex + 1];
          parts.splice(partIndex + 1, 1); // Remove the next part from array
          return (
            <Text key={`${index}-${partIndex}`} style={styles.italicText}>
              {nextPart}
            </Text>
          );
        } else if (part) {
          return (
            <Text key={`${index}-${partIndex}`}>
              {part}
            </Text>
          );
        }
        return null;
      });

      return (
        <Text key={index} style={styles.normalText}>
          {elements}
        </Text>
      );
    }
  });
}; 