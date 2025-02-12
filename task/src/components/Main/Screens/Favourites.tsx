import React from "react";
import { View, FlatList, Text } from "react-native";
import EventItem from "../Common/EventItem";
import { useFavorites } from "../../../hooks/useFavourite";

const FavouritesScreen = () => {
  const { favoriteEvents } = useFavorites();

  return (
    <View>
      {favoriteEvents.length === 0 ? (
        <Text>No favorite events yet.</Text>
      ) : (
        <FlatList
          data={favoriteEvents}
          keyExtractor={(item) => item.event_date_id.toString()}
          renderItem={({ item }) => <EventItem event={item} />}
        />
      )}
    </View>
  );
};

export default FavouritesScreen;
