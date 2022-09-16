import { v4 as uuid } from "uuid";

export const emptyPlaceholderData = [
  {
    _id: uuid(),
    route: "playlist",
    heading: "Playlists",
    description:
      "Looks like you haven't created any playlist",
  },
  {
    _id: uuid(),
    route: "history",
    heading: "Looks like you haven't watched any video",
    description: "",
  },
  {
    _id: uuid(),
    route: "watch-later",
    heading: "No videos added to be watched later",
    description: "",
  },
  {
    _id: uuid(),
    route: "liked",
    heading: "No Liked Videos",
    description: "",
  },
];
