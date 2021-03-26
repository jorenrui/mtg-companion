import React from 'react';
import NextDocument, {
  Head, Html, Main, NextScript,
} from 'next/document';
import { getCssString } from 'minorui';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable-next-line react/no-danger */}
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
