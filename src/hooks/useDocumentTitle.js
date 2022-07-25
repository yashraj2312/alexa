import { useEffect } from "react";

/**
 * custom hook to change document title
 *
 * @param "string"- heading for the title
 * @returns none
 *
 */

export const useDocumentTitle = (headingText) => {
  useEffect(() => {
    document.title = `Tunnel Tube | ${headingText}`;
  }, [headingText]);
};
