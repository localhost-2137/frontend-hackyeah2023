import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-3">

      <div onClick={() => changeLanguage('en')} className="cursor-pointer hover:opacity-80">
        <ReactCountryFlag
          className="emojiFlag"
          countryCode="US"
          style={{
            fontSize: '2.5em',
          }}
        />
      </div>
      <div onClick={() => changeLanguage('pl')} className="cursor-pointer hover:opacity-80">
      <ReactCountryFlag
          className="emojiFlag"
          countryCode="PL"
          style={{
            fontSize: '2.5em',
          }}
        />
      </div>
    </div>
  );
}

export default LanguageSwitcher;