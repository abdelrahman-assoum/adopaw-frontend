import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface BottomNavigationProps {
  activeTab: 'home' | 'map' | 'chats' | 'profile';
  onTabPress: (tab: 'home' | 'map' | 'chats' | 'profile') => void;
  onPlusPress: () => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
  onPlusPress,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const getTabIcon = (tabName: string, isActive: boolean) => {
    switch (tabName) {
      case 'home':
        return isActive ? 'house.fill' : 'house';
      case 'map':
        return isActive ? 'location.fill' : 'location';
      case 'chats':
        return isActive ? 'chat.bubble.fill' : 'chat.bubble';
      case 'profile':
        return isActive ? 'person.fill' : 'person';
      default:
        return 'house';
    }
  };

  const getTabColor = (tabName: string) => {
    return activeTab === tabName ? '#2196F3' : '#9E9E9E';
  };

  return (
    <View style={styles.overlayContainer}>
      <View style={styles.container}>
        {/* Home Tab */}
        <TouchableOpacity
          style={styles.tab}
          onPress={() => onTabPress('home')}
          activeOpacity={0.7}
        >
          <IconSymbol
            size={24}
            name={getTabIcon('home', activeTab === 'home')}
            color={getTabColor('home')}
          />
          <Text style={[styles.tabText, { color: getTabColor('home') }]}>
            Home
          </Text>
        </TouchableOpacity>

        {/* Map Tab */}
        <TouchableOpacity
          style={styles.tab}
          onPress={() => onTabPress('map')}
          activeOpacity={0.7}
        >
          <IconSymbol
            size={24}
            name={getTabIcon('map', activeTab === 'map')}
            color={getTabColor('map')}
          />
          <Text style={[styles.tabText, { color: getTabColor('map') }]}>
            Map
          </Text>
        </TouchableOpacity>

        {/* Plus Button */}
        <TouchableOpacity
          style={styles.plusButton}
          onPress={onPlusPress}
          activeOpacity={0.8}
        >
          <IconSymbol size={24} name="plus" color="#fff" />
        </TouchableOpacity>

        {/* Chats Tab */}
        <TouchableOpacity
          style={styles.tab}
          onPress={() => onTabPress('chats')}
          activeOpacity={0.7}
        >
          <IconSymbol
            size={24}
            name={getTabIcon('chats', activeTab === 'chats')}
            color={getTabColor('chats')}
          />
          <Text style={[styles.tabText, { color: getTabColor('chats') }]}>
            Chats
          </Text>
        </TouchableOpacity>

        {/* Profile Tab */}
        <TouchableOpacity
          style={styles.tab}
          onPress={() => onTabPress('profile')}
          activeOpacity={0.7}
        >
          <IconSymbol
            size={24}
            name={getTabIcon('profile', activeTab === 'profile')}
            color={getTabColor('profile')}
          />
          <Text style={[styles.tabText, { color: getTabColor('profile') }]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
  plusButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
}); 