import { useCallback } from 'react';
import { IntlProvider } from 'react-intl';
import { WetProvider, useLanguage, Language } from '../../arcnovuslean/wet-boew-react';
import { Route, useLocation, useNavigate } from 'react-router-dom';
import { AppLayout, LangLandingLayout } from '../../layouts';
import { HomePage, AboutPage } from '../../mainpages';
import { LocalizedRoutes, i18nMessages } from '../../i18n';
import AppRoute from '../../AppRoute';
import Link from 'next/Link'

const FirstPost = () => {
  const { currentLanguage } = useLanguage(useLocation());
  const navigate = useNavigate();

  const handleClick = useCallback(
    
    (a) => {
      // navigate(a.href.replace(window.location.origin, ''));
      // navigate(a.href.replace(window.location.origin, ''));
    },
    [navigate]
  );

  return (
    <WetProvider linkHandler={handleClick} >
      <IntlProvider
        locale={`${currentLanguage || 'en'}`}
        messages={
          currentLanguage === Language.FR ? i18nMessages.fr : i18nMessages.en
        }
      >
        {currentLanguage == null ? (
          <LangLandingLayout />
        ) : (
          <AppLayout> look at me
            <LocalizedRoutes>
              <Route path="/" element={<HomePage />} />
              <Route path={AppRoute.Home} element={<HomePage />} />
              <Route path={AppRoute.About} element={<AboutPage />} />
            </LocalizedRoutes>
          </AppLayout>
        )}
      </IntlProvider>
    // </WetProvider>
  );
};

export default FirstPost;
