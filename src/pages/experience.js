import { Box, Container, Link, useColorModeValue, Heading, Button } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const data = {
    labels: [
        'Red',
        'Blue',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
        ],
        hoverOffset: 4
    }]
};

const Experience = () => {
    return (
        <Layout>
            <Container>
                <Section>
                    <Heading as="h3" variant="title">
                        Professional Experience
                    </Heading>
                    <Heading variant="paragraph-title">
                        Software Engineer Associate
                    </Heading>
                    <Heading variant="subtitle">
                        {' '}
                        <Link
                            href="https://www.upmc.com/"
                            color={useColorModeValue('theme_colors.dark_purple', 'theme_colors.purplish')}
                            fontWeight="bold"
                            _hover={{ color: 'theme_colors.lavendar' }}
                        >
                            UPMC
                        </Link>{' '}
                    </Heading>
                    <Heading variant="date">November 2023 - Current</Heading>
                    <Box>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li>
                                Maintained and developed critical features for entire claims and billing system ensuring compliance with HIPAA and industry
                                standards
                            </li>
                            <li>
                                Provided effective support for production issues, identifying root causes and implementing corrective actions
                            </li>
                            <li>
                                Improved technical documentation
                            </li>
                        </ul>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading variant="paragraph-title">
                        Software Engineer Intern
                    </Heading>
                    <Heading variant="subtitle">
                        {' '}
                        <Link
                            href="https://tackle.io/"
                            color={useColorModeValue('theme_colors.dark_purple', 'theme_colors.purplish')}
                            fontWeight="bold"
                            _hover={{ color: 'theme_colors.lavendar' }}
                        >
                            Tackle.io
                        </Link>{' '}
                    </Heading>
                    <Heading variant="date">June 2023 - August 2023</Heading>
                    <Box>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li>
                                Designed, developed and deployed a reverse proxy server that securely stores AWS credentials and facilitates API calls with
                                AWS services
                            </li>
                            <li>
                                Set up PostgreSQL database that securely holds 500 AWS account credentials
                            </li>
                            <li>
                                Containerized application into a Linux Docker container
                            </li>
                        </ul>
                    </Box>
                </Section>
                <Section delay={.3}>
                    <Heading variant="paragraph-title">
                        Malware Analyst Intern
                    </Heading>
                    <Heading variant="subtitle">
                        {' '}
                        <Link
                            href="https://ncfta.net/"
                            color={useColorModeValue('theme_colors.dark_purple', 'theme_colors.purplish')}
                            fontWeight="bold"
                            _hover={{ color: 'theme_colors.lavendar' }}
                        >
                            NCFTA
                        </Link>{' '}
                    </Heading>
                    <Heading variant="date">January 2023 - March 2023</Heading>
                    <Box>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li>
                                Developed a new malware analysis tool

                            </li>
                            <li>
                                Conducted static and dynamic analysis on malware and ransomware variants
                            </li>
                            <li>
                                Wrote technical reports on malware variants that were delivered to 100&apos;s of companies and law enforcement agencies around
                                the world
                            </li>
                        </ul>
                    </Box>
                </Section>
                <Box display={'flex'} justifyContent={'center'}>
                    <Link
                        href="https://drive.google.com/file/d/1C3XT_cBHmo4ZCdcI9Q6flAPvfmMh5A9E/view?usp=sharing"
                        isExternal
                        style={{ textDecoration: 'none' }}
                        color={useColorModeValue('theme_colors.light_green', 'theme_colors.evergreen')}
                    >
                        <Button
                            rightIcon={<DownloadIcon />}
                            aria-label="Resume"
                            border={useColorModeValue('2px solid #1a1333', '2px solid #64ffda')}
                            borderRadius='md'
                            padding='1.25rem 1.75rem'
                            bg='transparent'
                            color={useColorModeValue('theme_colors.dark_evergreen', 'theme_colors.evergreen')}
                            px={4}
                            h={8}
                            mb={4}
                            _hover={{
                                outline: "none",
                                boxShadow: '5px 5px 0 0 #5cdb95',
                                transform: "translate(-5px, -5px)",
                            }}
                        >
                            View Resume
                        </Button>
                    </Link>
                </Box>
                <Section>
                    <Heading mt={20} as="h3" variant="title">
                        Coding Skills
                    </Heading>
                    <Doughnut
                        data={data}
                    />
                </Section>
            </Container>
        </Layout>
    )
};
export default Experience;