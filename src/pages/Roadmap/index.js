import { Box } from 'theme-ui'
import { useMixpanel } from 'react-mixpanel-browser'
import { useSupply } from '../../hooks/useSupply'
import { useAccount, useProvider, useSigner } from 'wagmi'

import Header1 from './Header1'
import Hero1 from './Hero1'
import Info1 from './Info1'
import Blocks1 from './Blocks1'
import Carousel1 from './Carousel1'
import Questions1 from './Questions1'
import Footer1 from './Footer1'

import contractInterface from '../../tiny-contract-abi.json'

export default function Home() {
    const mixpanel = useMixpanel()

    if (mixpanel.config.token) {
        mixpanel.track('/ appeared')
    }

    // 📝 Signers
    const provider = useProvider()
    const [signerResponse] = useSigner()

    // 📄 Contract
    const contractConfig = {
        addressOrName: '0x9d68265378140240D5441e8bc0EC7593581D5aCf',
        contractInterface: contractInterface,
        signerOrProvider: signerResponse.data || provider,
    }

    const [accountResponse] = useAccount({
        fetchEns: true,
    })
    const address = accountResponse?.data?.address

    const supply = useSupply({
        contractConfig,
        address: address,
    })

    return (
        <Box>
            <Header1 />
            <Hero1 supply={supply} />
            <Info1 />
            <Blocks1 />
            <Carousel1 />
            <Questions1 />
            <Footer1 supply={supply} />
        </Box>
    )
}
