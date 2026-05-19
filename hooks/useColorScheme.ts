import { useColorScheme as useColorSchemeNative } from 'react-native';

export function useColorScheme() {
  return useColorSchemeNative() || 'light';
}