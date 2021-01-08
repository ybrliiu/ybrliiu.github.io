import cardStyle from "./card.module.scss";
import contentsContainerStyle from "./contents-container.module.scss";

export function Links() {
  const links = [
    { name: 'Twitter', url: 'https://twitter.com/_ybrliiu' },
    { name: 'Github', url: 'https://github.com/ybrliiu' },
    { name: 'Blog', url: 'https://mp0liiu.hatenablog.com/' },
    { name: 'Scrapbox', url: 'https://scrapbox.io/ybrliiu-worklog/' },
    { name: 'Speaker Deck', url: 'https://speakerdeck.com/ybrliiu' },
    { name: 'CPAN', url: 'https://metacpan.org/author/MPOLIIU' },
  ];
  const linksElements = links.map(link => {
    return (
      <li>
        <a
          href={ link.url }
          target="_blank"
          rel="noopener noreferrer"
        >
          { link.name }
        </a>
      </li>
    )
  });
  return (
    <article className={ contentsContainerStyle.container }>
      <section className={ cardStyle["card-container"] }>
        <h1 className={ cardStyle.title }>LINKS</h1>
        <ul className={ cardStyle.contents }>
          { linksElements }
        </ul>
      </section>
    </article>
  );
}
