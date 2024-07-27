import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const dogPosts = await getCollection("dogs");
  const catPosts = await getCollection("cats");
  const posts = [...dogPosts, ...catPosts].sort((a, b) => {
    return new Date(b.data.date) - new Date(a.data.date);
  });
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${post.collection}/${post.slug}/`,
    })),
  });
}
