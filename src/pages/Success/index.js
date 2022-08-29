import { useMixpanel } from 'react-mixpanel-browser'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import FullScreenError from '../../components/FullScreenError'
import { useSearchParams } from 'react-router-dom'

import { Box, Text, Button, Link } from 'theme-ui'
import Header from './Header2'

export default function Success() {
    const { width, height } = useWindowSize()
    const [searchParams] = useSearchParams()
    const hash = searchParams.get('hash')
    const mixpanel = useMixpanel()

    if (!hash) {
        return <FullScreenError error="Hash is missing in the address" />
    }

    if (mixpanel.config.token) {
        mixpanel.track('/success-transaction')
    }

    return (
        <>
 <Box>
            <Header />
        </Box>
            <Box
                sx={{
                    minHeight: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box color="#FFFFFF" sx={{ maxWidth: 1000, textAlign: 'center' }}>
                    <Text
                        as="h1"
                        sx={{
                            fontFamily: 'heading',
                            fontSize: [6, 6, 8],
                            lineHeight: 1.5,
                            pr: [0, 0, 4],
                            pb: [5],
                        }}
                    >
                        Thank you for buying.
                    </Text>
                    <Text
                        as="p"
                        sx={{ fontSize: [2, 2, 2], fontWeight: 300, pb: 5 }}
                    >
                        Within a few moments, your transaction will appear on
                        your favorite NFT platform
                    </Text>

                    <Link
                        href={`https://etherscan.io/tx/${hash}`}
                        target="_blank"
                    >
                        <Button>See transaction details</Button>
                    </Link>
                </Box>
            </Box>
            <Box sx={{ pointerEvents: 'none' }}>
                <Confetti
                    width={width}
                    height={height}
                    colors={['#293D19', '#90A480']}
                />
            </Box>
        </>
    )
}
