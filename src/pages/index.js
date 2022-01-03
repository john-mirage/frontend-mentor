import Link from "next/link";
import Head from "next/head";
import GlobalStyle from "@src/GlobalStyle";

function Home() {
    return (
        <>
            <GlobalStyle fontFamily="Roboto" />
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300&family=Roboto:wght@400;500&display=swap" rel="stylesheet" key="font" />
                <link rel="icon" href="./assets/favicon-32x32.png" key="favicon" />
                <title>Frontend Mentor</title>
            </Head>
            <h1>Welcome</h1>
            <ul>
                <li>
                    <Link href="/ordersummary">
                        <a>Order Summary</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Home;