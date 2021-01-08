import React, {useState} from "react";
import {StyleSheet, FlatList, View} from "react-native";
import AppListItem from "../components/AppListItem";
import AppListItemDeleteAction from "../components/AppListItemDeleteAction";
import AppListItemSeparator from "../components/AppListItemSeparator";
import AppScreen from "../components/AppScreen";

const initialMessages = [
  {
    id: 1,
    title: "t1",
    description: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/mosh.jpg"),
  },
];
export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDeleteMessages = (msg) => {
    setMessages(messages.filter((m) => m.id !== msg.id));
  };
  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({item}) => (
          <AppListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Selected", item)}
            renderRightActions={() => (
              <AppListItemDeleteAction
                onPress={() => handleDeleteMessages(item)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={AppListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "t2",
              description: "d2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
