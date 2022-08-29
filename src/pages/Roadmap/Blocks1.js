import { Box, Text, Grid, Flex } from 'theme-ui'

import rare from './images/rare.png'
import rare2x from './images/rare2x.png'

import video from './images/hats.mov'
import videoWebM from './images/hats.webm'

import facemask from './images/facemask.png'
import facemask2x from './images/facemask2x.png'

export default function Blocks() {
    return (
        <Flex
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                pt: [4, 4, 6],
                pb: [7, 7, 9],
                px: [3, 3, 6],
            }}
        >
            <Box sx={{ maxWidth: 1230, width: '100%' }}>
                <Grid
                    columns={['1fr', '1fr', '1fr 1fr']}
                    sx={{ maxWidth: '100%' }}
                >
                    <Box
                        sx={{ bg: '#A0B1CD', width: '100%', borderRadius: 10 }}
                    >
                        <Box sx={{ padding: [4, 4, 7] }}>
                            <Text
                                sx={{
                                    fontSize: [6, 6, 8],
                                    display: 'block',
                                    fontFamily: 'heading',
                                    lineHeight: 1,
                                }}
                            >
                                ✺
                            </Text>
                            <Text
                                sx={{
                                    fontSize: [5, 5, 7],
                                    lineHeight: 1.3,
                                    fontFamily: 'heading',
                                    display: 'block',
                                }}
                            >
                                22,222{' '}
                                <Text as="span" sx={{ fontStyle: 'italic' }}>
                                    Ugly
                                </Text>{' '}
                               Unicorns
                            </Text>
                            <Text
                                as="p"
                                sx={{ fontSize: [1, 1, 2], fontWeight: 300 }}
                            >
                                Each character is entirely unique and is
                                generated by combining attributes such as colour
                                palettes, skin tones, facial traits, outfits and
                                accessories. With nearly endless combinations,
                                all characters are guaranteed to be one of a
                                kind.
                            </Text>
                        </Box>

                        <video
                            width="100%"
                            height="auto"
                            loop
                            muted
                            autoPlay
                            playsInline
                        >
                            <source src={video} type="video/quicktime" />
                            <source src={videoWebM} type="video/webm" />
                        </video>
                    </Box>
                    <Flex
                        sx={{
                            bg: '#E5CCE0',
                            width: '100%',
                            borderRadius: 10,
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            sx={{
                                padding: [4, 4, 7],
                                flex: 1,
                            }}
                        >
                            <Text
                                sx={{
                                    fontSize: [6, 6, 8],
                                    display: 'block',
                                    fontFamily: 'heading',
                                    lineHeight: 1,
                                }}
                            >
                                ✺
                            </Text>
                            <Text
                                sx={{
                                    fontSize: [5, 5, 7],
                                    lineHeight: 1.3,
                                    fontFamily: 'heading',
                                    display: 'block',
                                }}
                            >
                                Secure the most{' '}
                                <Text as="span" sx={{ fontStyle: 'italic' }}>
                                    rare
                                </Text>{' '}
                            </Text>
                            <Text
                                as="p"
                                sx={{ fontSize: [1, 1, 2], fontWeight: 300 }}
                            >
                                Even though no two Ugly Unicorns will ever be the
                                same, some variations are rarer than others.
                                Watch out for special accessories and raw
                                materials - the rarer the attributes, the rarer
                                your character will be.
                            </Text>
                        </Box>
                        <Flex
                            sx={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                pt: [4, 4, 0],
                                img: {
                                    maxWidth: ['60%', '60%', '100%'],
                                },
                            }}
                        >
                            <img
                                alt="Character"
                                src={rare}
                                height="auto"
                                width="auto"
                                srcSet={`${rare2x} 2x`}
                            />
                        </Flex>
                    </Flex>
                </Grid>
                <Grid
                    columns={['1fr', '1fr', '52fr 48fr']}
                    gap={[0, 0, 2]}
                    sx={{
                        maxWidth: '100%',
                        bg: '#8D9876',
                        mt: 3,
                        width: '100%',
                        borderRadius: 10,
                    }}
                >
                    <Flex
                        sx={{
                            py: [4, 4, 8],
                            pl: [4, 4, 8],
                            pr: [5, 6, 0],
                            flexDirection: 'column',
                        }}
                    >
                        <Text
                            sx={{
                                fontSize: [6, 6, 8],
                                display: 'block',
                                fontFamily: 'heading',
                                lineHeight: 1,
                                color: 'textInversedSoft',
                            }}
                        >
                            ✺
                        </Text>
                        <Text
                            sx={{
                                fontSize: [5, 5, 8],
                                lineHeight: [1.3, 1.3, 1],
                                fontFamily: 'heading',
                                display: 'block',
                                color: 'textInversedSoft',
                                mt: [0, 0, 3],
                            }}
                        >
                            Our environmental impact{' '}
                            <Text as="span" sx={{ fontStyle: 'italic' }}>
                                matters
                            </Text>{' '}
                            to us.
                        </Text>
                        <Text
                            as="p"
                            sx={{
                                fontSize: [1, 1, 2],
                                fontWeight: 300,
                                maxWidth: 486,
                                mt: [0, 0, 3],
                            }}
                        >
                            In order to enable our community to spend as little
                            as possible in gas fees when minting, we opted for a
                            contract made by Azuki called ERC721A, which allows
                            minting multiple NFTs for essentially the same cost
                            as minting a single one.
                        </Text>
                    </Flex>
                    <Box
                        sx={{
                            display: ['none', 'none', 'flex'],
                            justifyContent: 'flex-end',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            sx={{
                                overflow: 'hidden',
                                img: {
                                    height: 'auto',
                                    width: '100%',
                                    display: 'block',
                                },
                            }}
                        >
                            <img
                                alt="Character"
                                src={facemask}
                                srcSet={`${facemask2x} 2x`}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: ['flex', 'flex', 'none'],
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            alt="Character with face mask"
                            src={facemask}
                            height="auto"
                            width="80%"
                            srcSet={`${facemask2x} 2x`}
                        />
                    </Box>
                </Grid>
            </Box>
        </Flex>
    )
}