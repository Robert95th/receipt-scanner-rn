import { View, Text } from 'react-native';
import { styles } from '@/utils/styling';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.emptyText}>Profile coming soon</Text>
    </View>
  );
}