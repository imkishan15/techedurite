import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toggleFavorite } from "../redux/favouritesSlice";
import { Event } from "../utils/types";

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favoriteEvents = useSelector(
    (state: RootState) => state.favorites.favoriteEvents
  );

  const isFavorite = (eventId: number) => {
    return favoriteEvents.some((event) => event.event_date_id === eventId);
  };

  const toggleFavoriteEvent = (event: Event) => {
    dispatch(toggleFavorite(event));
  };

  return { favoriteEvents, isFavorite, toggleFavoriteEvent };
};
