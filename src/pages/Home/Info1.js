import { Box, Text, Grid, Flex } from 'theme-ui'

export default function Info1() {
    return (
        <Flex
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                py: [8, 8, 9],
                px: [5, 5, 6],
            }}
        >
            <Box sx={{ maxWidth: 1430 }}>
                <Grid gap={1} columns={['1fr', '1fr']}>
                    <Text
                        as="h1"
	color="#FFFFFF"
                        sx={{
                            fontFamily: 'heading',
                            fontSize: [6, 6, 8],
                            lineHeight: .1,
                            pr: [0, 0, 4],
                            maxWidth: 1430,
                        }}
                    >
                        <Text as="span" color="#BFCE31" sx={{ fontStyle: 'bold' }}>un·​der·​rep·​re·​sent·​ed: </Text><Text as="span" color="#F7046E" sx={{ fontStyle: 'bold' }}>inadequately </Text> <Text as="span" color="#FFCF2F" sx={{ fontStyle: 'bold' }}>represented</Text><Text as="span" color="#0CB8EF" sx={{ fontStyle: 'italic' }}>{' '}
                        </Text>
                        
                    </Text>
                </Grid>
            </Box>
        </Flex>
    )
}
