import { Container, Heading, Box } from '@chakra-ui/react'
import aws from '../../public/images/projects/aws.png'
import malware from '../../public/images/projects/malware.png'
import fsa from '../../public/images/projects/fsa.png'
import interest from '../../public/images/projects/interest.png'
import catcafe from '../../public/images/projects/catcafe.png'
import typetest from '../../public/images/projects/typing-test.png'
import GlossyBox from '../components/GlossyBox'

const Software = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                Software
            </Heading>
            <Box flexWrap="wrap">
                <GlossyBox id="aws_proxy_server" title="AWS Proxy Server" thumbnail={aws}>
                    A reverse proxy server that securely stores customer AWS credentials and
                    facilitates interactions with AWS services on behalf of customers
                </GlossyBox>
                <GlossyBox id="https://github.com/KatelynKunzmann/Mal-Monthly" title="Malware Data Scraper" thumbnail={malware}>
                    A web application that displays the most shared malware for the past 30 days, exceeding 15,000 entries
                </GlossyBox>
                <GlossyBox id="https://github.com/KatelynKunzmann/File-Application-System" title="Secure File-Sharing CLI Application" thumbnail={fsa}>
                    Secure group-based file-sharing CLI application that is secure
                    against a number of different types of security threats
                </GlossyBox>
                <GlossyBox id="https://github.com/KatelynKunzmann/interest" title="Student Loan Calculation Website" thumbnail={interest}>
                    A web application that calculates your student loan payments and
                    provides an amortization table of payments, a loan summary,
                    and a loan safety ratio
                </GlossyBox>
                <GlossyBox id="https://github.com/KatelynKunzmann/typing-test" title="Typing Test Website" thumbnail={typetest}>
                    Inspired by my niece who is learning how to type
                    and I will soon start teaching her how to code
                </GlossyBox>
                <GlossyBox id="https://github.com/KatelynKunzmann/MeowMatch" title="Cat Cafe Website" thumbnail={catcafe}>
                    Cat Cafe website - currently in development
                </GlossyBox>
            </Box>
        </Container>
    )
}

export default Software