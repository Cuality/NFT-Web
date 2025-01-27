import { Grid, Box, Button, Flex } from 'theme-ui'
import { Link } from 'react-router-dom'

import video from './images/landing.mp4'

export default function Land() {
    return ( 
<Grid>
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
                             <video
                            width="100%"
                            height="auto"
                            loop
                            autoPlay
                             playsInline
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                        </Flex>
                   </Grid>
                     
          
    )
}
