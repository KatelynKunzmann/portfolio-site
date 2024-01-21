import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/layouts/grid-item'
import awsthumb from '../public/images/projects/awsthumb01.png'
import bug from '../public/images/projects/bug.png'
import fsa from '../public/images/projects/fsa.png'
import interest from '../public/images/projects/interest.png'
import catcafe from '../public/images/projects/catcafe.png'
import typetest from '../public/images/projects/typing-test.png'

const Software = () => {
    return (
        <Container>
            <Section delay={0.1}>
                <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                    Software
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <WorkGridItem id="aws_proxy_server" title="AWS Proxy Server" thumbnail={awsthumb}>
                        A reverse proxy server that securely stores customer AWS credentials and
                        facilitates interactions with AWS services on behalf of customers
                    </WorkGridItem>
                    <WorkGridItem id="mal_monthly" title="Malware Data Scraper" thumbnail={bug}>
                        A web application that displays the most shared malware for the past 30 days, which exceeds 15,000 entries
                    </WorkGridItem>
                </SimpleGrid>
            </Section>
            <Section delay={0.2}>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <WorkGridItem id="file_sharing_cli_application" title="Secure File-Sharing CLI Application" thumbnail={fsa}>
                        Secure group-based file-sharing CLI application that is secure
                        against a number of different types of security threats
                    </WorkGridItem>
                    <WorkGridItem id="student_loan_site" title="Student Loan Calculation Website" thumbnail={interest}>
                        A web application that calculates your student loan payments
                        Provides an amortization table of payments, a loan summary,
                        and a loan safety ratio
                    </WorkGridItem>
                </SimpleGrid>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <WorkGridItem id="cat_cafe_site" title="Cat Cafe Website" thumbnail={catcafe}>
                        Cat Cafe website - currently in development
                    </WorkGridItem>
                    <WorkGridItem id="typing_test_site" title="Typing Test Website" thumbnail={typetest}>
                        Inspired by my niece who is learning how to type
                        and I will soon start teaching her how to code
                    </WorkGridItem>
                </SimpleGrid>
            </Section>
        </Container>
    )
}

export default Software