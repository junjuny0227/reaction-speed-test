import { Global, css } from "@emotion/react";

import emotionReset from "emotion-reset";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body, * {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyle;
