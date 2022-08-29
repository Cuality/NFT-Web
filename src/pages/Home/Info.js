import { Box, Text, Grid, Flex } from 'theme-ui'

export default function Info() {
    return (
        <Flex
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                py: [8, 8, 9],
                px: [5, 5, 6],
            }}
        >
            <Box sx={{ maxWidth: 1230 }}>
                <Grid gap={2} columns={['1fr', '1fr', '1fr 1fr']}>
                    <Text
                        as="h1"
	color="#FFFFFF"
                        sx={{
                            fontFamily: 'heading',
                            fontSize: [6, 6, 8],
                            lineHeight: 1.1,
                            pr: [0, 0, 4],
                            maxWidth: 580,
                        }}
                    >
                        A <Text as="span" color="#BFCE31" sx={{ fontStyle: 'bold' }}>new </Text><Text as="span" color="#F7046E" sx={{ fontStyle: 'bold' }}>wave</Text> of <Text as="span" color="#FFCF2F" sx={{ fontStyle: 'bold' }}>utility collectibles</Text> are about to <Text as="span" color="#0CB8EF" sx={{ fontStyle: 'italic' }}>hit the{' '}
                        
                            blockchain
                        </Text>
                        .
                    </Text>
                    <Text as="p" color="#FFFFFF" sx={{ fontSize: [2, 2, 4], fontWeight: 300 }}>
                        Creating the future of web3, together. Great insights, great strategy and a great plan for the future of underrepresented founders. Ugly Unicorns are the addition to your collection you’ve been waiting
                        for.
                    </Text>
                </Grid>
            </Box>
        </Flex>
    )
}
