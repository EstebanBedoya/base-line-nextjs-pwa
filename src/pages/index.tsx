// @packages
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Pwa project</h1>
      <h1>{t('description')}</h1>
    </div>
  );
}

export default Home;