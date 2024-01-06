import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"
import supabase from "../lib/supabase"
import { TouchableOpacity } from "react-native-gesture-handler"

export default function ModalScreen() {
  const signOut = () => supabase.auth.signOut()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/modal.tsx" />

      <TouchableOpacity onPress={signOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
