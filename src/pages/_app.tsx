import type { AppProps } from 'next/app'

require('@/styles/main.less')

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
