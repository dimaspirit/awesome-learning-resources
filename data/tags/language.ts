// Languages: synced with provided list; deduplicated and sorted alphabetically (A–Z)
const LANGUAGES = [
  {
    value: "ar",
    label: "Arabic",
    nativeName: "العربية",
  },
  {
    value: "hy",
    label: "Armenian",
    nativeName: "Հայերեն",
  },
  {
    value: "as",
    label: "Assamese",
    nativeName: "অসমীয়া",
  },
  {
    value: "az",
    label: "Azerbaijani",
    nativeName: "Azərbaycan dili",
  },
  {
    value: "bn",
    label: "Bengali",
    nativeName: "বাংলা",
  },
  {
    value: "bg",
    label: "Bulgarian",
    nativeName: "Български",
  },
  {
    value: "my",
    label: "Burmese",
    nativeName: "မြန်မာ",
  },
  {
    value: "zh",
    label: "Chinese (Simplified)",
    nativeName: "中文（简体）",
  },
  {
    value: "cs",
    label: "Czech",
    nativeName: "Čeština",
  },
  {
    value: "da",
    label: "Danish",
    nativeName: "Dansk",
  },
  {
    value: "nl",
    label: "Dutch",
    nativeName: "Nederlands",
  },
  {
    value: "en",
    label: "English",
    nativeName: "English",
  },
  {
    value: "fi",
    label: "Finnish",
    nativeName: "Suomi",
  },
  {
    value: "fr",
    label: "French",
    nativeName: "Français",
  },
  {
    value: "de",
    label: "German",
    nativeName: "Deutsch",
  },
  {
    value: "el",
    label: "Greek",
    nativeName: "Ελληνικά",
  },
  {
    value: "hi",
    label: "Hindi",
    nativeName: "हिन्दी",
  },
  {
    value: "mr",
    label: "Marathi",
    nativeName: "मराठी",
  },
  {
    value: "hu",
    label: "Hungarian",
    nativeName: "Magyar",
  },
  {
    value: "id",
    label: "Indonesian",
    nativeName: "Bahasa Indonesia",
  },
  {
    value: "it",
    label: "Italian",
    nativeName: "Italiano",
  },
  {
    value: "ja",
    label: "Japanese",
    nativeName: "日本語",
  },
  {
    value: "kn",
    label: "Kannada",
    nativeName: "ಕನ್ನಡ",
  },
  {
    value: "km",
    label: "Khmer",
    nativeName: "ភាសាខ្មែរ",
  },
  {
    value: "ko",
    label: "Korean",
    nativeName: "한국어",
  },
  {
    value: "kk",
    label: "Kazakh",
    nativeName: "Қазақ тілі",
  },
  {
    value: "ky",
    label: "Kyrgyz",
    nativeName: "Кыргызча",
  },
  {
    value: "lv",
    label: "Latvian",
    nativeName: "Latviešu",
  },
  {
    value: "lt",
    label: "Lithuanian",
    nativeName: "Lietuvių",
  },
  {
    value: "mn",
    label: "Mongolian",
    nativeName: "Монгол",
  },
  {
    value: "no",
    label: "Norwegian",
    nativeName: "Norsk",
  },
  {
    value: "or",
    label: "Odia",
    nativeName: "ଓଡ଼ିଆ",
  },
  {
    value: "pl",
    label: "Polish",
    nativeName: "Polski",
  },
  {
    value: "pt",
    label: "Portuguese",
    nativeName: "Português",
  },
  {
    value: "pa",
    label: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
  },
  {
    value: "ro",
    label: "Romanian",
    nativeName: "Română",
  },
  {
    value: "ru",
    label: "Russian",
    nativeName: "Русский",
  },
  {
    value: "sr",
    label: "Serbian",
    nativeName: "Српски",
  },
  {
    value: "es",
    label: "Spanish",
    nativeName: "Español",
  },
  {
    value: "sw",
    label: "Swahili",
    nativeName: "Kiswahili",
  },
  {
    value: "sv",
    label: "Swedish",
    nativeName: "Svenska",
  },
  {
    value: "tr",
    label: "Turkish",
    nativeName: "Türkçe",
  },
  {
    value: "uk",
    label: "Ukrainian",
    nativeName: "Українська",
  },
  {
    value: "uz",
    label: "Uzbek",
    nativeName: "Oʻzbek",
  },
  {
    value: "ur",
    label: "Urdu",
    nativeName: "اردو",
  },
  {
    value: "vi",
    label: "Vietnamese",
    nativeName: "Tiếng Việt",
  },
  {
    value: "ka",
    label: "Georgian",
    nativeName: "ქართული",
  },
] as const;

export { LANGUAGES };