import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shield, Lock, KeyRound } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const { theme } = useTheme();

  const items: Array<{ id: string; title: string; icon: React.ComponentType<any>; route: string; subtitle: string }>= [
    { id: 'policies', title: 'Insurance Policies', icon: Shield, route: '/security', subtitle: 'Health, Term, Vehicle' },
    { id: 'passwords', title: 'Passwords & Keys', icon: KeyRound, route: '/security', subtitle: 'Secure info vault' },
    { id: 'lock', title: 'App Lock', icon: Lock, route: '/security', subtitle: 'FaceID / PIN' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <View style={[styles.header, { backgroundColor: theme.colors.background, borderBottomColor: theme.colors.border }]}>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Security</Text>
        <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>Protect your data</Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <TouchableOpacity
              key={it.id}
              style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}
              onPress={() => router.push(it.route)}
              testID={`security-card-${it.id}`}
            >
              <View style={[styles.iconWrap, { backgroundColor: theme.colors.primary + '20' }]}>
                <Icon size={22} color={theme.colors.primary} />
              </View>
              <View style={styles.cardText}>
                <Text style={[styles.cardTitle, { color: theme.colors.text }]}>{it.title}</Text>
                <Text style={[styles.cardSubtitle, { color: theme.colors.textSecondary }]}>{it.subtitle}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 12, borderBottomWidth: 1 },
  headerTitle: { fontSize: 24, fontWeight: '700' },
  headerSubtitle: { fontSize: 13, marginTop: 2 },
  scroll: { flex: 1 },
  scrollContent: { padding: 16 },
  card: { flexDirection: 'row', alignItems: 'center', padding: 14, borderRadius: 12, borderWidth: 1, marginBottom: 12 },
  iconWrap: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  cardText: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: '600' },
  cardSubtitle: { fontSize: 12 },
});