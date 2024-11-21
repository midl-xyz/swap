'use client';

import { Button, Input } from '@/shared';
import { CoinMarketcap, Medium, TelegramPlane } from '@/shared/assets';
import { AccordionDemo } from '@/shared/ui/accardion/Accardion';
import { Card } from '@/widgets/landing/ui/Card';
import Twitter from '@/shared/assets/Twitter';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { css } from '~/styled-system/css';
import { Container, HStack, Stack, VStack } from '~/styled-system/jsx';
import { hstack } from '~/styled-system/patterns';
import Image1 from '@/shared/assets/landing/Image1.png';
import Gradient from '@/shared/assets/landing/Gradient.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image12 from '@/shared/assets/landing/image12.png';
import Image from '@/shared/assets/landing/Image33.png';
import Frame1 from '@/shared/assets/landing/Frame1.png';
import Frame3 from '@/shared/assets/landing/Frame3.png';
import Ellipse2 from '@/shared/assets/landing/Ellipse2.png';
import Ellipse3 from '@/shared/assets/landing/Ellipse3.png';
import axios from 'axios';

type FormValues = {
  email: string;
};

export const Landing = () => {
  const { reset, register, handleSubmit, watch } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await axios.post('/api/sendEmail', {
        email: data.email,
      });

      toast.success('Email successfully submitted');
      reset();
    } catch (error) {
      toast.error('Error submitting email');
    }
  };

  return (
    <Container maxWidth="1920px" width="100%" mt={10}>
      <VStack width="100%">
        <Stack
          width="100%"
          gap={8}
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
          marginBottom="100px"
        >
          <VStack
            width="100%"
            maxWidth="748px"
            background="#ECEDEE"
            padding={{
              base: 3,
              md: 10,
            }}
            gap={10}
            borderRadius="20px"
            alignItems="baseline"
          >
            <h1
              className={css({
                textStyle: 'Display',
                maxWidth: '360px',
              })}
            >
              Welcome to V60
            </h1>
            <span
              className={css({
                textStyle: 'h1',
                fontSize: '38px',
                fontWeight: 500,
                color: '#9498A2',
              })}
            >
              Your Gateway to the Prom Ecosystem
            </span>
            <Link href="/swap">
              <Button
                width={{
                  base: '100%',
                  md: '322px',
                }}
                appearance="primary"
                color="white"
                background="#111"
              >
                Launch platform
              </Button>
            </Link>
          </VStack>
          <VStack width="100%" height="520px" position="relative">
            <img
              style={{
                width: '100%',
                height: '340px',
              }}
              src={Image1.src}
            />
            <Stack position="absolute" bottom={0}>
              <span
                className={css({
                  textStyle: 'h2',
                  position: 'absolute',
                  bottom: '32px',
                  left: {
                    base: '10px',
                    md: '32px',
                  },
                  maxWidth: '495px',
                })}
              >
                Trade and earn cross-chain pairs & meme coins with lowest fees
              </span>
              <img
                style={{
                  width: '100%',
                  height: '340px',
                }}
                src={Gradient.src}
              />
            </Stack>
          </VStack>
        </Stack>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          grabCursor={true}
          style={{ width: '100%' }}
          className={css({
            '& .swiper-wrapper': {
              justifyContent: {
                base: 'initial',
                md: 'center',
              },
            },
          })}
        >
          <SwiperSlide style={{ maxWidth: '500px' }}>
            <VStack
              padding={3}
              gap={1}
              border="1px solid #FF927A"
              borderRadius="80px"
              width="100%"
              maxWidth="601px"
            >
              <span
                className={css({
                  textStyle: 'h2',
                  fontWeight: 500,
                })}
              >
                Seamless Trading
              </span>
              <span>Fast, secure transactions</span>
            </VStack>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '500px' }}>
            <VStack
              padding={3}
              gap={1}
              border="1px solid #FF927A"
              borderRadius="80px"
              width="100%"
              maxWidth="601px"
            >
              <span
                className={css({
                  textStyle: 'h2',
                  fontWeight: 500,
                })}
              >
                Decentralized Power
              </span>
              <span>Full control, no limits</span>
            </VStack>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '500px' }}>
            <VStack
              padding={3}
              gap={1}
              border="1px solid #FF927A"
              borderRadius="80px"
              width="100%"
              maxWidth="601px"
            >
              <span
                className={css({
                  textStyle: 'h2',
                  fontWeight: 500,
                })}
              >
                Effortless Growth
              </span>
              <span>Grow assets with ease</span>
            </VStack>
          </SwiperSlide>
        </Swiper>
        <VStack marginTop="100px">
          <Stack
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
            gap={8}
          >
            <VStack alignItems="baseline" gap={10}>
              <span
                className={css({
                  textStyle: 'h2',
                  color: '#FF927A',
                  maxWidth: '620px',
                  fontWeight: 500,
                })}
              >
                V60 is a decentralized platform enabling smooth trading within
                the Prom ecosystem
              </span>
              <VStack alignItems="baseline" gap={6}>
                <Card
                  img={Image12.src}
                  link="/swap"
                  button={
                    <>
                      Start trading <ChevronRight />
                    </>
                  }
                  title="Low Fees with Ultimate efficiency"
                  description="V60 Dex operates on the Prom, ensuring instant swaps and minimal fees. Trade across a multitude of coins leveraging Prom’s cost-efficiency."
                />
                <Stack
                  className={css({
                    display: {
                      base: 'block',
                      md: 'none',
                    },
                  })}
                >
                  <Card
                    img={Image.src}
                    link="/liquidity"
                    button={
                      <>
                        Start earning <ChevronRight />
                      </>
                    }
                    title="Provide Liquidity and Get Passive Yield"
                    description="Deposit into our liquidity pools to earn from the transaction fees of the platform."
                  />
                </Stack>
                <Stack
                  className={css({
                    display: {
                      base: 'none',
                      md: 'block',
                    },
                  })}
                >
                  <Card
                    img={Frame1.src}
                    link="https://x.com/v60dex"
                    button={
                      <HStack>
                        <span>Follow V60 on</span>
                        <Twitter />{' '}
                      </HStack>
                    }
                    title="Join Our Community"
                    description="Track upcoming trading activities, incentivized campaigns, and connect with fellow traders."
                  />
                </Stack>
              </VStack>
            </VStack>
            <VStack
              marginTop={{
                base: 0,
                md: '72px',
              }}
              gap={6}
            >
              <Stack
                className={css({
                  display: {
                    base: 'block',
                    md: 'none',
                  },
                })}
              >
                <Card
                  img={Frame1.src}
                  link="https://x.com/v60dex"
                  button={
                    <HStack>
                      <span>Follow V60 on</span>
                      <Twitter />{' '}
                    </HStack>
                  }
                  title="Join Our Community"
                  description="Track upcoming trading activities, incentivized campaigns, and connect with fellow traders."
                />
              </Stack>
              <Stack
                className={css({
                  display: {
                    base: 'none',
                    md: 'block',
                  },
                })}
              >
                <Card
                  img={Image.src}
                  link="/liquidity"
                  button={
                    <>
                      Start earning <ChevronRight />
                    </>
                  }
                  title="Provide Liquidity and Get Passive Yield"
                  description="Deposit into our liquidity pools to earn from the transaction fees of the platform."
                />
              </Stack>
              <Card
                img={Frame3.src}
                link="https://prom.io/"
                button={
                  <>
                    Learn more about Prom <ChevronRight />
                  </>
                }
                title="Seamless integration with Prom ecosystem"
                description="Leverage the opportunities to tap into the ecosystem products and be among the early supporters of various projects built on Prom."
              />
            </VStack>
          </Stack>
        </VStack>
        <Stack
          flexDirection={{ base: 'column', md: 'row' }}
          gap={7}
          marginTop="117px"
          width="100%"
          maxWidth="1128px"
        >
          <VStack
            gap={7}
            maxWidth={{
              base: '100%',
              md: '276px',
            }}
            alignItems="baseline"
          >
            <span className={css({ textStyle: 'h2' })}>FAQ</span>
            <span className={css({ textStyle: 'subtitle3', color: '#9498A2' })}>
              If you have any additional issues or questions, reach out to V60’s
              customer support via email{' '}
              <Link href={`mailto:contact@v60.io?`} legacyBehavior>
                contact@v60.io
              </Link>{' '}
              or official social media channels
            </span>
            <div className={hstack({ gap: 7, fontSize: '2xl' })}>
              <a
                href="https://t.me/v60"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramPlane />
              </a>
              <a
                href="https://x.com/v60dex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <CoinMarketcap />
              </a>
              <a
                href="https://medium.com/@v60dex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Medium />
              </a>
            </div>
          </VStack>
          <AccordionDemo />
        </Stack>
        {/*<img src={Ellipse2.src} style={{ position: 'absolute' }} />*/}
        <VStack
          padding={3}
          marginY="100px"
          maxWidth="1128px"
          width="100%"
          gap={5}
          height="296px"
          backgroundColor="#ECEDEE"
          borderRadius="20px"
          alignItems="center"
          justify="center"
        >
          <span
            className={css({
              textStyle: 'h2',
            })}
          >
            Stay Connected
          </span>
          <span
            className={css({
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '32px',
              color: '#9498A2',
            })}
          >
            Subscribe to our newsletter
          </span>
          <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
            <Stack
              gap={8}
              width="100%"
              justifyContent="center"
              alignItems="center"
              flexDirection={{
                base: 'column',
                md: 'row',
              }}
            >
              <Input
                placeholder="Enter your e-mail"
                className={css({
                  maxWidth: {
                    base: '100%',
                    md: '450px',
                  },
                  width: '100%',
                  background: 'transparent',
                  color: '#9FA0A6',
                  borderRadius: '10px',
                  border: '1px solid #DADADA',
                  height: '40px',
                  padding: 3,
                })}
                {...register('email', {
                  required: 'Input email',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Provide correct email',
                  },
                })}
              />
              <Button
                type="submit"
                appearance="primary"
                color="white"
                background="#111"
                className={css({
                  width: {
                    base: '100%',
                    md: 'initial',
                  },
                })}
              >
                Subscribe
              </Button>
            </Stack>
          </form>
        </VStack>
        {/*<img src={Ellipse3.src} style={{ position: 'absolute' }} />*/}
      </VStack>
    </Container>
  );
};
