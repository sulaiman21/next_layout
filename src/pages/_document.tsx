import createEmotionCache from '@/theme/createEmotionCache';
import createEmotionServer from '@emotion/server/create-instance';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

AppDocument.getInitialProps = async (ctx) => {
  const mainRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () => {
    return mainRenderPage({
      enhanceApp: (App: any) => function EnhanceApp(props) {
        return <App emotionCache={cache} {...props} />
      }
    });
  }

  const initialProps = await Document.getInitialProps(ctx);
  // To Provent invalid HTML
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{__html: style.css}}
    />
  ));

  return {
    ...initialProps,
    emotionTags
  }
}