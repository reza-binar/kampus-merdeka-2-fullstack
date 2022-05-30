import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Posts({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Posts Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <a
              href="https://nextjs.org/docs"
              className={styles.card}
              key={post.id}
            >
              <h2>{post.title} &rarr;</h2>
              <p>{post.body}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
