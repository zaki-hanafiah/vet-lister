import type { AppProps } from 'next/app'

require('@/styles/main.less')

function VetLister({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default VetLister
