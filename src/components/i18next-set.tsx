
import React from "react";
import { useTranslation } from "react-i18next";

function I18next() {
  const { i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value); 
  };

  return (
    <div>
      <select
        onChange={changeLanguage}
        className="p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:text-white"
        defaultValue={i18n.language} 
      >
        <option value="en">English</option>
        <option value="fr">French</option>
      
      </select>
    </div>
  );
}

export default I18next;
