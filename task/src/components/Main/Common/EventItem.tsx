import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFavorites } from "../../../hooks/useFavourite";
import { Event } from "../../../utils/types";
import { styles } from "../../../Styles/EventItemStyles";

type EventItemProps = {
  event: Event;
};

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const { isFavorite, toggleFavoriteEvent } = useFavorites();

  return (
    <View style={styles.container}>
      <Image source={{ uri: event.event_profile_img }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.eventName}>{event.event_name}</Text>
        <Text style={styles.date}>{event.readable_from_date} @8pm</Text>
        <Text style={styles.price}>€{event.event_price_from}</Text>
        <View style={styles.tagsContainer}>
          {event.keywords.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity>
          <Ionicons name="arrow-forward" size={18} color="#000" />
        </TouchableOpacity>
        <Text style={styles.location}>
          {event.city}, {event.country}
        </Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconSpacing}>
            <Ionicons name="share-outline" size={18} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavoriteEvent(event)}>
            <Ionicons
              name={isFavorite(event.event_date_id) ? "heart" : "heart-outline"}
              size={18}
              color={isFavorite(event.event_date_id) ? "green" : "#000"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EventItem;
