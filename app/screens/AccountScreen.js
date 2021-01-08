import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import AppIcon from "../components/AppIcon";
import AppListItem from "../components/AppListItem";
import AppListItemSeparator from "../components/AppListItemSeparator";
import AppScreen from "../components/AppScreen";
import colors from "../config/colors";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
export default function AccountScreen() {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <AppListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={AppListItemSeparator}
        />
      </View>
      <AppListItem
        title="Logout"
        IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {marginVertical: 20},
  screen: {backgroundColor: colors.light},
});
