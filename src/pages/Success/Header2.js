import { Grid, Box, Button, Flex } from 'theme-ui'
import { Link } from 'react-router-dom'

import Logo from '../../components/Logo'
import Twitter from '../../components/icons/Twitter'
import Instagram from '../../components/icons/Instagram'
import Discord from '../../components/icons/Discord'
import OpenSea from '../../components/icons/OpenSea'

import RightArrow from '../../components/icons/RightArrow'

export default function Header() {
    return (
        <Grid
            gap={2}
            columns={['auto 1fr', 'auto 1fr', 3]}
            t
            pl={[2, 2, 6]}
            pr={[5, 5, 6]}
            py={4}
            color="primary"
        >
            <Box
                sx={{ display: ['none', 'none', 'flex'], alignItems: 'center' }}
            >
                <Button
                    as="a"
                    href="https://twitter.com/valleyrejects"
                    variant="primary"
                    target="_blank"
                    sx={{
                        width: 46,
                        px: [0, 0, 0],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Twitter />
                </Button>
	
	<Button
                    as="a"
                    variant="primary"
                    target="_blank"
                    href="https://instagram.com/valleyrejects/"
                    sx={{
                        width: 46,
                        px: [0, 0, 0],
                        ml: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Instagram />
                </Button>

                <Button
                    as="a"
                    variant="primary"
                    target="_blank"
                    href="https://discord.gg/SxpsxWCsNb"
                    sx={{
                        width: 46,
                        px: [0, 0, 0],
                        ml: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Discord />
                </Button>
                <Button
                    as="a"
                    variant="primary"
                    target="_blank"
                    href="https://opensea.io/collection/"
                    sx={{
                        width: 46,
                        px: [0, 0, 0],
                        ml: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <OpenSea />
                </Button>
            </Box>
            <Flex
	as="a"
	color="primary"
	target="_blank"
                    href="/"
                sx={{
                    justifyContent: ['flex-start', 'flex-start', 'center'],
                    alignItems: 'center',
                }}
            >
                <Box sx={{ display: ['none', 'flex'] }}>
                    <Logo />
                </Box>
                <Box sx={{ display: ['flex', 'none'] }}>
                    <Logo width={89} height={50} />
                </Box>
            </Flex>
	
	<Flex sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
               
                <Button as="a" href="https://thestartupnft.com/register/" color="primary" variant="secondary">
                    Create Founding Member Club Profile
                    <Box sx={{ display: 'inline-block' }} ml={3}>
                        <RightArrow />
                    </Box>
                </Button>
            </Flex>
        </Grid>
    )
}
