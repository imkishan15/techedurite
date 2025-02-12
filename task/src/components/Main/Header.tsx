import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamList } from "../../utils/types";
import { styles } from "../styles/HeaderStyles";

type NavigationProps = StackNavigationProp<RootParamList, "Main">;

const HeaderLayout = ({ children }: any) => {
  const navigation = useNavigation<NavigationProps>();

  const handleLogout = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hello Renzo!</Text>
          <Text style={styles.description}>
            Are you ready to dance?
          </Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="black" />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default HeaderLayout;
