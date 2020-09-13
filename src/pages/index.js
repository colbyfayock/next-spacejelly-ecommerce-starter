import { Helmet } from 'react-helmet';
import styles from 'styles/App.module.scss';

import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Button from 'components/Button';
import FeatureList from 'components/FeatureList';

import imageShirt from 'images/spacejelly-tshirt.jpg';
import imageSticker from 'images/spacejelly-sticker.jpg';

export default function Home() {
  const { metadata } = useSite();
  const { siteName } = metadata;

  return (
    <Layout>

      <Helmet>
        <title>{ siteName }</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Section className={styles.homeHeader}>
        <Container>
          <h1 className={styles.homeTitle}>
            { siteName }
          </h1>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul className={styles.productGrid}>
            <li>
              <img src={imageShirt} />
              <h2>Space Jelly Tshirt</h2>
              <p>
                Bring Cosmo the space Jellyfish to your wardrobe
                with this high quality tshirt.
              </p>
              <Button>Add to Cart</Button>
            </li>
            <li>
              <img src={imageSticker} />
              <h2>Space Jelly Stickers</h2>
              <p>
                Add some flare to your laptop with a sticker
                of Cosmo the Space Jellyfish.
              </p>
              <Button>Add to Cart</Button>
            </li>
          </ul>
        </Container>
      </Section>

    </Layout>
  )
}
