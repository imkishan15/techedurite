import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import EventItem from "../Common/EventItem";
import { fetchEvents } from "../../../utils/api";

const EventList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { events, loading, error } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" color="blue" />;
  if (error)
    return <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>;

  return (
    <View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.event_date_id.toString()}
        renderItem={({ item }) => <EventItem event={item} />}
      />
    </View>
  );
};

export default EventList;
