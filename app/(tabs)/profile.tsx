import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { languageService, supportedLanguages } from '@/services/languageService';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [currentLanguage, setCurrentLanguage] = React.useState('en');

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    languageService.setLanguage(languageCode);
  };

  const menuItems = [
    {
      id: 'language',
      title: 'Language',
      icon: 'globe' as const,
      action: () => console.log('Language settings'),
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: 'bell' as const,
      action: () => console.log('Notification settings'),
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: 'lock' as const,
      action: () => console.log('Privacy settings'),
    },
    {
      id: 'help',
      title: 'Help & Support',
      icon: 'questionmark.circle' as const,
      action: () => console.log('Help & Support'),
    },
    {
      id: 'about',
      title: 'About',
      icon: 'info.circle' as const,
      action: () => console.log('About'),
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title">{languageService.translate('profile')}</ThemedText>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* User Info Section */}
        <View style={styles.userSection}>
          <View style={[styles.avatar, { backgroundColor: colors.tint }]}>
            <IconSymbol name="person.fill" size={40} color="#fff" />
          </View>
          <View style={styles.userInfo}>
            <ThemedText type="subtitle">John Doe</ThemedText>
            <ThemedText style={styles.userEmail}>john.doe@example.com</ThemedText>
          </View>
        </View>

        {/* Language Selection */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Language
          </ThemedText>
          <View style={styles.languageOptions}>
            {supportedLanguages.map((language) => (
              <TouchableOpacity
                key={language.code}
                style={[
                  styles.languageOption,
                  {
                    backgroundColor:
                      currentLanguage === language.code ? colors.tint : colors.background,
                    borderColor: colors.tint,
                  },
                ]}
                onPress={() => handleLanguageChange(language.code)}
              >
                <ThemedText style={styles.languageFlag}>{language.flag}</ThemedText>
                <ThemedText
                  style={[
                    styles.languageName,
                    {
                      color: currentLanguage === language.code ? '#fff' : colors.text,
                    },
                  ]}
                >
                  {language.name}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.section}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.menuItem, { borderBottomColor: colors.icon }]}
              onPress={item.action}
            >
              <View style={styles.menuItemLeft}>
                <IconSymbol name={item.icon} size={24} color={colors.text} />
                <ThemedText style={styles.menuItemTitle}>{item.title}</ThemedText>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.icon} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={[styles.logoutButton, { borderColor: colors.tint }]}
          onPress={() => console.log('Logout')}
        >
          <ThemedText style={[styles.logoutText, { color: colors.tint }]}>
            Logout
          </ThemedText>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  content: {
    flex: 1,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userEmail: {
    opacity: 0.7,
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  languageOptions: {
    paddingHorizontal: 16,
    gap: 8,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  languageFlag: {
    fontSize: 20,
    marginRight: 12,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '500',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemTitle: {
    fontSize: 16,
    marginLeft: 12,
  },
  logoutButton: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 40,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
  },
}); 