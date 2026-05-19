import { View, Text, ScrollView } from 'react-native';
import { styles } from '@/utils/styling';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Spending</Text>
        <Text style={styles.amount}>$0.00</Text>
      </View>
    </ScrollView>
  );
}