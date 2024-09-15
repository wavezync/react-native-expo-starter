import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Image } from 'expo-image';
import { queries } from '@/lib/queries';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Page = () => {
  const { styles, theme } = useStyles(stylesheet);
  const [page] = React.useState(1);
  const { data, isLoading } = useQuery({
    ...queries.rickAndMorty.list(page),
  });

  if (isLoading) {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={[styles.container]}>
      <FlatList
        data={data?.results}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.detailsContainer}>
              <Text
                style={[styles.cardText, { fontSize: 22, fontWeight: '700' }]}
              >
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MaterialCommunityIcons
                  name="alien"
                  size={18}
                  color={theme.colors.text}
                  style={styles.detailsIcon}
                />
                <Text style={styles.cardText}>{item.species}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name="planet"
                  size={18}
                  color={theme.colors.text}
                  style={styles.detailsIcon}
                />
                <Text style={styles.cardText}>{item.location.name}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    margin: theme.margins.md,
    padding: theme.margins.lg,
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    color: theme.colors.text,
  },
  cardText: {
    color: theme.colors.text,
    fontSize: 18,
    overflow: 'visible',
    maxWidth: '90%',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: theme.margins.md,
  },
  detailsIcon: {
    color: theme.colors.text,
    padding: theme.margins.sm,
  },
  lifeStatusIndicator: {
    borderRadius: 50,
    width: 10,
    height: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
}));

export default Page;
