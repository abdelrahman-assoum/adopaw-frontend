// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'house': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'magnifyingglass.circle.fill': 'search',
  'magnifyingglass.circle': 'search',
  'magnifyingglass': 'search',
  'heart.fill': 'favorite',
  'heart': 'favorite-border',
  'person.fill': 'person',
  'person': 'person-outline',
  'slider.horizontal.3': 'tune',
  'xmark': 'close',
  'globe': 'language',
  'bell': 'notifications',
  'lock': 'lock',
  'questionmark.circle': 'help',
  'info.circle': 'info',
  'pawprint.fill': 'pets',
  'dog.fill': 'pets',
  'cat.fill': 'pets',
  'bird.fill': 'pets',
  'hare.fill': 'pets',
  'fish.fill': 'pets',
  'location.fill': 'location-on',
  'location': 'location-on',
  'star.fill': 'star',
  'graduationcap.fill': 'school',
  'cross.fill': 'local-hospital',
  'plus': 'add',
  'chat.bubble.fill': 'chat',
  'chat.bubble': 'chat-bubble-outline',
  'calendar': 'event',
} as unknown as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
