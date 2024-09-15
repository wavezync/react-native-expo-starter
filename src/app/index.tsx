import { Button } from '@/components/ui/button';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Page = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <View style={{ padding: 10 }}>
        <Text style={styles.text}>Welcome to WaveZync 🌊</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <Link asChild href="/(tabs)/characters" push>
          <Button color="primary" size="sm" text="Characters" />
        </Link>

        <Link asChild href="/(tabs)/locations" push>
          <Button color="secondary" size="md" text="Locations" />
        </Link>

        <Link asChild href="/(tabs)/episodes" push>
          <Button color="accent" size="lg" text="Episodes" />
        </Link>

        <Button
          color="primary"
          text="Alert 1"
          onPress={() => alert('Hi mom')}
        />

        <Button
          color="secondary"
          text="Alert 2"
          outlined
          onPress={() => alert('Hi mom')}
        />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    flexDirection: 'column',
  },
  text: {
    color: theme.colors.text,
    fontSize: 24,
    fontFamily: theme.fonts.semiBold,
    textAlign: 'center',
  },
  button: {
    marginTop: theme.margins.md,
    backgroundColor: theme.colors.primary,
    padding: theme.margins.lg,
    borderRadius: 5,
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: 22,
    fontFamily: theme.fonts.primary,
  },
}));

export default Page;
