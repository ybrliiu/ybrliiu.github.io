import cardStyle from './card.module.scss';
import contentsContainerStyle from './contents-container.module.scss';

export function AboutMe() {
  return (
    <article className={ contentsContainerStyle.container }>
      <section className={ cardStyle['card-container'] }>
        <h1 className={ cardStyle.title }>ABOUT ME</h1>
        <p className={ cardStyle.contents }>
          インターネットでは id: ybrliiu / mp0liiu という名前で活動していることが多いです。<br />
          東京のIT系の会社でソフトウェアエンジニアをしています。<br />
          仕事ではWebアプリケーションのサーバーサイドをいじっていることが多いです。<br />
          好きな言語は Perl と TypeScript です。<br />
          ソフトウェアアーキテクチャとかに興味があります。<br />
        </p>
      </section>
    </article>
  )
}