import React, { useState } from 'react'
import { Box, Text, Grid, Flex } from 'theme-ui'
import Collapsible from 'react-collapsible'

import Minus from '../../components/icons/Minus'
import Plus from '../../components/icons/Plus'

export default function Questions() {
    return (
        <Flex
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                py: [8, 8, 9],
                px: [5, 5, 6],
            }}
        >
            <Box sx={{ maxWidth: 1222 }}>
                <Grid columnGap={5} columns={['1fr', '1fr', '444px auto']}>
                    <Text
                        as="h1"
	color="#FFFFFF"
                        sx={{
                            fontFamily: 'heading',
                            fontSize: [6, 6, 8],
                            lineHeight: 1.1,
                            mb: [4, 4, 0],
                        }}
                    >
                        Your questions,{' '}
                        <Text as="span" sx={{ fontStyle: 'italic' }}>
                            answered
                        </Text>
                        .
                    </Text>
                    <Box sx={{
                            lineHeight: 1.1,}} 
	color="#FFFFFF">
                        <Item title="What’s an NFT?">
                            Much like an autographed book or a rare coin, NFTs
                            (non-fungible tokens) are unique digital items that
                            cannot be easily exchanged for something of similar
                            value, simply because their distinctive properties
                            make them one-of-a-kind. Since no two NFTs are
                            exactly alike, their value is based on the rarity of
                            the item and the community driving it.
                        </Item>

                        <Item title="What makes Ugly Unicorns special?">
                            
Ugly Unicorns grant holders access to an episodic project that incentivizes holders, turning them into co-founders with equity in a real life startup where they can influence how we scale. Who would you hire? What marketing campaign would you suggest? Co-founders will have access to the Founding Members Club (FMC) and most importantly be gifted a S.A.F.E (Simple Agreement for Future Equity), for supporting this NFT project.

                        </Item>

 <Item title="What is the Founding Members Club?">

Ugly Unicorns actively place each holder in the shoes of a founder. We are 100% member focused and community is everything to us, thats why we created a platform solely for our community, the <a href="https://foundingmember.club"> founding members club</a>. By joining Ugly Unicorns holders will have access to this private membership club of innovators and forward thinkers. The FMC is what the NFT community is all about, communities built around great people doing dope stuff. Its purpose is for like minds to get behind a startup then help scale and supercharge it.
                        </Item>

                        <Item title="Who’s the team behind Ugly Unicorns?">
                            Ugly Unicorns is an NFT project run in collaboration
                            between <b>Kristen Dyor</b>, developer and artist
                            behind the Ugly Unicorns, <b>Ryano</b> and{' '}
                            <b>Geo</b>, who look after
                            marketing and other digital communications.
                        </Item>

                        <Item title="When does minting begin?">
                            Anyone can start minting on December 22nd
                            2022, first come first serve. Follow
                            our <a href="https://twitter.com/valleyrejects"> Twitter</a>  page or join our <a href="https://discord.gg/SxpsxWCsNb"> Discord</a> server to get
                            the latest updates.
                        </Item>

<Item title="What are these funds for?">
The funds from the NFT project will be used solely to fund and scale our startup, hire essential positions and build out Minchyn, our Web3 Social Media platform with patent pending technology. Instead of taking money from VC’s we have decided to sell NFTs and gift that same equity venture capital investors would have received to the people who support the vision from day one, people who enjoy being apart of something special, people who enjoy building and most importantly co-founders.
 </Item>

<Item title="What are some of the utilities?">
Each NFT gives Founding Members access to exclusive insights only a co-founder would have access to. Members will learn all about the company, have access to the companies certificate of incorporation, bylaws, the inner workings of building a company, our mission, details of the companies current project(s), details on our patent pending technology and access to virtual business meetings. Founding Members also get access to course materials that will help them start their own company, company progress, monthly status reports, the opportunity to vote on essential decisions, the ability to take polls on new hire candidates, submit feedback on business ideas, provide valuable user insights, or even help the company rethink it’s marketing strategy.
 </Item>


<Item title="What is a S.A.F.E?">
Built by the best in Silicon Valley with proven secure terms. The S.A.F.E, a simple agreement for future equity, is a gift from us to our Ugly Unicorn holders for becoming co-founders in our startup and supporting this project. The S.A.F.E includes terms that will grant each holder future equity in our startup. Holders that purchase on secondary markets will also become co-founders and gifted a SAFE with terms for equity at an equal value to the royalty amount that we receive from that particular secondary sale. *Equity will no longer be gifted once the valuation cap is reached per the terms agreed upon in the S.A.F.E 
</Item>


<Item title="Why equity and not just a hoody?">

Every year underrepresented founders face immense challenges when starting companies. One of those challenges, unfortunately, is the lack of funding they receive from venture capital investors. Of all venture capital funding only about 2.2% goes to underrepresented Founders, annually. The founder of this project is an underrepresented founder, so to combat such statistics the founder decided to start this social project in an effort to bring innovative minds along the journey of building a company. This is a journey like none other and we believe that each member apart of this historical project deserves far more than a shirt. 
 </Item>
                        <Item title="Wen equity in the startup?">
                            Equity is distributed when a company decides to IPO. In the event that there is an exit event other than an IPO, each co-founder will recieve all rewards agreed upon within specified within the terms of the S.A.F.E.
                        </Item>

<Item title="Wen does FMC stop taking members?">
Membership is limited, acceptance ends once we reach the valuation cap set in the terms of the S.A.F.E.
Once membership closes, the only way to become eligible for FMC membership acceptance will be through secondary market purchases. Although the new holder of the NFT won’t be able to claim a S.A.F.E after cap is reached with the currently held NFT, they will have access to some of the same utilities FMC members have and will be eligible to purchase a discounted NFT in the future where they then become a member eligible to claim a S.A.F.E. This means that whomever is the current holder of a NFT purchased after valuation cap is reached, will be able to use that NFT as FMC eligibility and to MINT a future NFT in one of our future sales. </Item>
                    </Box>
                </Grid>
            </Box>
        </Flex>
    )
}

function Item({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Collapsible
            onOpening={() => setIsOpen(true)}
            onClosing={() => setIsOpen(false)}
            trigger={
                <Flex
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTopStyle: 'solid',
                        borderTopColor: 'border',
                        borderTopWidth: 1,
                        cursor: 'pointer',
                        py: [4, 4, 6],
                    }}
                >
                    <Text as="h2" sx={{ fontSize: [3, 3, 4], fontWeight: 400 }}>
                        {title}
                    </Text>
                    {isOpen ? <Minus /> : <Plus />}
                </Flex>
            }
        >
            <Text as="p" sx={{ fontSize: [2, 2, 3], fontWeight: 300, pb: 7 }}>
                {children}
            </Text>
        </Collapsible>
    )
}
