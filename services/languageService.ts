export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translations {
  [key: string]: {
    [languageCode: string]: string;
  };
}

export const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export const translations: Translations = {
  // Navigation
  home: {
    en: 'Home',
    es: 'Inicio',
    fr: 'Accueil',
    ar: 'الرئيسية',
  },
  explore: {
    en: 'Explore',
    es: 'Explorar',
    fr: 'Explorer',
    ar: 'استكشاف',
  },
  profile: {
    en: 'Profile',
    es: 'Perfil',
    fr: 'Profil',
    ar: 'الملف الشخصي',
  },
  favorites: {
    en: 'Favorites',
    es: 'Favoritos',
    fr: 'Favoris',
    ar: 'المفضلة',
  },

  // Search and Filters
  searchPets: {
    en: 'Search by pet name...',
    es: 'Buscar por nombre...',
    fr: 'Rechercher par nom...',
    ar: 'البحث بالاسم...',
  },
  filters: {
    en: 'Filters',
    es: 'Filtros',
    fr: 'Filtres',
    ar: 'المرشحات',
  },
  applyFilters: {
    en: 'Apply Filters',
    es: 'Aplicar Filtros',
    fr: 'Appliquer les Filtres',
    ar: 'تطبيق المرشحات',
  },
  reset: {
    en: 'Reset',
    es: 'Restablecer',
    fr: 'Réinitialiser',
    ar: 'إعادة تعيين',
  },

  // Categories
  allPets: {
    en: 'All Pets',
    es: 'Todas las Mascotas',
    fr: 'Tous les Animaux',
    ar: 'جميع الحيوانات الأليفة',
  },
  dogs: {
    en: 'Dogs',
    es: 'Perros',
    fr: 'Chiens',
    ar: 'الكلاب',
  },
  cats: {
    en: 'Cats',
    es: 'Gatos',
    fr: 'Chats',
    ar: 'القطط',
  },
  birds: {
    en: 'Birds',
    es: 'Aves',
    fr: 'Oiseaux',
    ar: 'الطيور',
  },
  rabbits: {
    en: 'Rabbits',
    es: 'Conejos',
    fr: 'Lapins',
    ar: 'الأرانب',
  },
  fish: {
    en: 'Fish',
    es: 'Peces',
    fr: 'Poissons',
    ar: 'الأسماك',
  },

  // Filter Options
  age: {
    en: 'Age',
    es: 'Edad',
    fr: 'Âge',
    ar: 'العمر',
  },
  size: {
    en: 'Size',
    es: 'Tamaño',
    fr: 'Taille',
    ar: 'الحجم',
  },
  gender: {
    en: 'Gender',
    es: 'Género',
    fr: 'Genre',
    ar: 'الجنس',
  },
  puppy: {
    en: 'Puppy (0-1 year)',
    es: 'Cachorro (0-1 año)',
    fr: 'Chiot (0-1 an)',
    ar: 'جرو (0-1 سنة)',
  },
  young: {
    en: 'Young (1-3 years)',
    es: 'Joven (1-3 años)',
    fr: 'Jeune (1-3 ans)',
    ar: 'شاب (1-3 سنوات)',
  },
  adult: {
    en: 'Adult (3-7 years)',
    es: 'Adulto (3-7 años)',
    fr: 'Adulte (3-7 ans)',
    ar: 'بالغ (3-7 سنوات)',
  },
  senior: {
    en: 'Senior (7+ years)',
    es: 'Mayor (7+ años)',
    fr: 'Senior (7+ ans)',
    ar: 'كبير السن (7+ سنوات)',
  },
  small: {
    en: 'Small',
    es: 'Pequeño',
    fr: 'Petit',
    ar: 'صغير',
  },
  medium: {
    en: 'Medium',
    es: 'Mediano',
    fr: 'Moyen',
    ar: 'متوسط',
  },
  large: {
    en: 'Large',
    es: 'Grande',
    fr: 'Grand',
    ar: 'كبير',
  },
  male: {
    en: 'Male',
    es: 'Macho',
    fr: 'Mâle',
    ar: 'ذكر',
  },
  female: {
    en: 'Female',
    es: 'Hembra',
    fr: 'Femelle',
    ar: 'أنثى',
  },

  // Common
  years: {
    en: 'years',
    es: 'años',
    fr: 'ans',
    ar: 'سنوات',
  },
  year: {
    en: 'year',
    es: 'año',
    fr: 'an',
    ar: 'سنة',
  },
};

class LanguageService {
  private currentLanguage: string = 'en';

  setLanguage(languageCode: string) {
    if (supportedLanguages.find(lang => lang.code === languageCode)) {
      this.currentLanguage = languageCode;
      // In a real app, you might want to persist this to AsyncStorage
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  getSupportedLanguages(): Language[] {
    return supportedLanguages;
  }

  translate(key: string): string {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }

    const translatedText = translation[this.currentLanguage];
    if (!translatedText) {
      console.warn(`Translation not found for key: ${key} in language: ${this.currentLanguage}`);
      return translation.en || key; // Fallback to English
    }

    return translatedText;
  }

  // Helper method to format text with placeholders
  translateWithParams(key: string, params: { [key: string]: string }): string {
    let text = this.translate(key);
    
    Object.keys(params).forEach(param => {
      text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
  }
}

export const languageService = new LanguageService(); 