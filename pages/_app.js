import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { StoreProvider } from "@/utils/Store";
import WagmiProvider from "@/utils/WagmiProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
    return (
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
            <StoreProvider>
                <WagmiProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </WagmiProvider>
            </StoreProvider>
        </GoogleOAuthProvider>
    );
}
