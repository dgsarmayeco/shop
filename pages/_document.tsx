import type { FC, ReactElement } from "react";
import { Html, Head, Main, NextScript } from "next/document"

const Document: FC = (): ReactElement => {

    return (
        <Html lang="fa" dir="rtl">
            <Head />
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );

}

export default Document;