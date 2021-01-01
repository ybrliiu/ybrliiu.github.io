import cardStyle from "./card.module.scss";
import contentsContainerStyle from "./contents-container.module.scss";

export function FallBack() {
  return (
    <article className={ contentsContainerStyle.container }>
      <section className={ cardStyle["card-container"] }>
        <h1 className={ cardStyle.title }>工事中！</h1>
        <p className={ cardStyle.contents }>
          気が向いたら書きます
        </p>
      </section>
    </article>
  );
}
