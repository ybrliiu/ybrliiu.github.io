import cardStyle from './card.module.scss';
import contentsContainerStyle from './contents-container.module.scss';

export function AboutMe() {
  return (
    <article className={ contentsContainerStyle.container }>
      <section className={ cardStyle['card-container'] }>
        <h1 className={ cardStyle.title }>ABOUT ME</h1>
        <p className={ cardStyle.contents }>
          ソフトウェアエンジニアをしています。<br />
          東京のIT系の会社で働いています。<br />
          好きな言語は Perl と TypeScript です。<br />
          仕事ではWebアプリケーションのサーバーサイドをいじっていることが多いです。<br />
        </p>
      </section>
    </article>
  )
}