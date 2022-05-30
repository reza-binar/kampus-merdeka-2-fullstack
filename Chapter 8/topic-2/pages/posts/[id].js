import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter, withRouter } from "next/router";
import useSWR from "swr";
import styles from "../../styles/Home.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Post({ router }) {
  const [posts, setPosts] = useState([]);

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  // if (error) return <div>failed to load</div>;
  if (!posts) return <div>loading...</div>;

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

export default withRouter(Post);
