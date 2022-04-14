import Head from 'next/head';

interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  ogp?: {
    url?: string;
    title?: string;
    description?: string;
    image?: string;
    site_name?: string;
    type?: string;
  };
}

interface Props extends Metadata {
  children: React.ReactNode;
}

function buildTitle(title?: string): string {
  return title == null ? 'Stella' : `${title} | Stella`;
}

function buildNoindexNofollow(noindex?: boolean, nofollow?: boolean): string {
  const keywords: string[] = [];

  if (noindex) {
    keywords.push('noindex');
  }

  if (nofollow) {
    keywords.push('nofollow');
  }

  return keywords.join(',');
}

function createOgpMeta(key: string, content: string): React.ReactElement[] {
  return [
    <meta key={`og:${key}`} property={`og:${key}`} content={content} />,
    <meta key={`twitter:${key}`} name={`twitter:${key}`} content={content} />,
  ];
}

export function createMetadata({
  title,
  description,
  keywords,
  noindex,
  nofollow,
  ogp,
}: Metadata): React.ReactElement[] {
  const normalizedTitle = buildTitle(title);

  const el = [
    <title key="title">{normalizedTitle}</title>,
    <meta key="description" name="description" content={description} />,
    <meta key="keywords" name="keywords" content={keywords?.join(',')} />,
  ];

  if (noindex || nofollow) {
    el.push(
      <meta
        key="robots"
        name="robots"
        content={buildNoindexNofollow(noindex, nofollow)}
      />
    );
  }

  if (ogp != null) {
    for (const [key, content] of Object.entries(ogp)) {
      if (content != null) {
        el.push(...createOgpMeta(key, content));
      }
    }
  }

  // デフォルトで OGP や Twitter に共通の定義を入れる
  if (ogp?.title == null) {
    el.push(...createOgpMeta('title', normalizedTitle));
  }

  if (ogp?.description == null && description != null) {
    el.push(...createOgpMeta('description', description));
  }

  return el;
}

export const Meta: React.VFC<Props> = ({children, ...rest}) => {
  const meta = {
    description: 'description',
    keywords: ['keywords'],
    ...rest,
  } as Metadata;

  return (
    <>
      <Head>{createMetadata(meta)}</Head>
      {children}
    </>
  );
};
