import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [isEn, setIsEn] = useState(false);

  return (
    <div className="flex gap-3">
      <div
        onClick={() => {
          changeLanguage("en");
          setIsEn(true);
        }}
        className="cursor-pointer hover:opacity-80"
      >
        <ReactCountryFlag
          className="emojiFlag"
          countryCode="US"
          style={{
            fontSize: "2.5em",
            opacity: !isEn ? "0.5" : "1",
          }}
        />
      </div>
      <div
        onClick={() => {
          changeLanguage("pl");
          setIsEn(false);
        }}
        className="cursor-pointer hover:opacity-80"
      >
        <ReactCountryFlag
          className="emojiFlag"
          countryCode="PL"
          style={{
            fontSize: "2.5em",
            opacity: isEn ? "0.5" : "1",
          }}
        />
      </div>
    </div>
  );
}

export default LanguageSwitcher;