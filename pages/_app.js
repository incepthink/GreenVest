import "@/styles/globals.css";
import { StoreProvider } from "@/utils/Store";
import WagmiProvider from "@/utils/WagmiProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
    return (
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
            <StoreProvider>
                <WagmiProvider>
                    <Component {...pageProps} />
                </WagmiProvider>
            </StoreProvider>
        </GoogleOAuthProvider>
    );
}
