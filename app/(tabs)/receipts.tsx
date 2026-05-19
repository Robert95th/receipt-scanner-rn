import { View, Text } from 'react-native';
import { styles } from '@/utils/styling';

export default function ReceiptsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receipts</Text>
      <Text style={styles.emptyText}>No receipts yet</Text>
    </View>
  );
}