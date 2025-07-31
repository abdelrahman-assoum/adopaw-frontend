# Adopaw - Pet Adoption App

A modern React Native pet adoption app built with Expo Router, featuring a beautiful UI, multi-language support, and comprehensive pet management features.

## Features

### 🏠 Home Page
- **Pet Categories**: Horizontal scrollable categories (All Pets, Dogs, Cats, Birds, Rabbits, Fish)
- **Pet Cards**: Beautiful cards displaying pet information with images, names, breeds, ages, and locations
- **Search Component**: Real-time search functionality with filter button
- **Filter Component**: Advanced filtering by age, size, and gender
- **API Integration**: Mock API service ready for backend integration

### 🔍 Search & Filtering
- **Real-time Search**: Search pets by name, breed, or location
- **Category Filtering**: Filter by pet type
- **Advanced Filters**: Filter by age, size, and gender
- **Filter Modal**: Beautiful modal interface for filter options

### 🌐 Multi-Language Support
- **4 Languages**: English, Spanish, French, Arabic
- **Language Service**: Centralized translation management
- **Dynamic UI**: All text elements support multiple languages
- **Easy Extension**: Simple to add new languages

### 📱 Bottom Navigation
- **4 Tabs**: Home, Explore, Favorites, Profile
- **Active States**: Visual feedback for active tabs
- **Icons**: SF Symbols with Material Icons fallback
- **Haptic Feedback**: Enhanced user experience

### 🎨 UI/UX Features
- **Dark/Light Mode**: Automatic theme switching
- **Responsive Design**: Works on all screen sizes
- **Modern Design**: Clean, intuitive interface
- **Loading States**: Smooth loading experiences
- **Empty States**: Helpful messages when no data

## Project Structure

```
adopaw-frontend/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Home page with pets listing
│   │   ├── explore.tsx        # Resources and information
│   │   ├── favorites.tsx      # Saved pets
│   │   ├── profile.tsx        # User profile and settings
│   │   └── _layout.tsx        # Tab navigation layout
│   └── _layout.tsx            # Root layout
├── components/
│   ├── pets/
│   │   ├── PetCard.tsx        # Individual pet card component
│   │   └── PetCategories.tsx  # Category selection component
│   ├── search/
│   │   └── SearchBar.tsx      # Search input with filter button
│   ├── filter/
│   │   └── FilterModal.tsx    # Filter options modal
│   └── ui/
│       └── IconSymbol.tsx     # Cross-platform icon component
├── services/
│   ├── petService.ts          # Pet data and API management
│   └── languageService.ts     # Multi-language support
└── constants/
    └── Colors.ts              # Theme colors
```

## Components

### PetCard
- Displays pet information in an attractive card format
- Shows pet image, name, breed, age, and location
- Touchable with navigation support
- Responsive design with shadows and rounded corners

### PetCategories
- Horizontal scrollable category buttons
- Active state highlighting
- Supports all pet types
- Easy to extend with new categories

### SearchBar
- Search input with magnifying glass icon
- Filter button for advanced options
- Real-time search functionality
- Placeholder text support

### FilterModal
- Modal overlay with filter options
- Age, size, and gender filters
- Reset and apply functionality
- Beautiful UI with proper spacing

## Services

### PetService
- Mock API implementation
- Pet data management
- Filtering and search logic
- Ready for real API integration

### LanguageService
- Multi-language translation system
- 4 supported languages
- Easy to add new languages
- Fallback to English

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Run on Platform**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## API Integration

The app currently uses mock data but is designed for easy API integration:

1. Update `services/petService.ts` with your API endpoints
2. Replace mock data with actual API calls
3. Update the base URL in the service
4. Handle authentication if required

## Adding New Languages

1. Add language to `supportedLanguages` array in `languageService.ts`
2. Add translations to the `translations` object
3. Update the language selection UI if needed

## Customization

### Colors
- Update `constants/Colors.ts` for theme customization
- Supports light and dark mode
- Easy to modify tint colors

### Icons
- Add new icon mappings in `components/ui/IconSymbol.tsx`
- Uses SF Symbols on iOS, Material Icons on Android/Web

### Styling
- All components use StyleSheet for consistent styling
- Easy to modify colors, spacing, and layout
- Responsive design principles

## Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo Router**: File-based routing
- **TypeScript**: Type safety and better development experience
- **Expo**: Development platform and tools
- **React Native Reanimated**: Smooth animations
- **Expo Image**: Optimized image loading

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple platforms
5. Submit a pull request

## License

This project is licensed under the MIT License.
