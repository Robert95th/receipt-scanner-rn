import { View, Text } from 'react-native';
import { styles } from '@/utils/styling';

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Receipt</Text>
      <Text style={styles.emptyText}>Camera scanner coming soon</Text>
    </View>
  );
}