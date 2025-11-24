import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  ImageBackground 
} from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* HERO SECTION WITH BACKGROUND */}
      <ImageBackground
        source={{ uri: "https://plus.unsplash.com/premium_photo-1682310071124-33632135b2ee?q=80&w=1212&     auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
        style={styles.heroBackground}
        imageStyle={{ opacity: 1, resizeMode: "cover" }}
      >
        <View style={styles.hero}>
        
          <Text style={styles.title}>Public Bus Navigation System</Text>

          <Text style={styles.subtitle}>
            Find safe and fast bus routes within seconds.
          </Text>

          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaText}>Find My Bus</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>

      {/* FEATURES SECTION */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Use Our App?</Text>

        <View style={styles.card}>
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/684/684908.png" }} 
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Real-Time Routes</Text>
          <Text style={styles.cardText}>Get accurate bus routes & stops instantly.</Text>
        </View>

        <View style={styles.card}>
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/535/535239.png" }} 
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Fare Estimates</Text>
          <Text style={styles.cardText}>See approximate fares before your journey.</Text>
        </View>

        <View style={styles.card}>
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/684/684831.png" }} 
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Fast & Easy Navigation</Text>
          <Text style={styles.cardText}>Clean UI designed for smooth city travelling.</Text>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Public Bus Navigation System</Text>
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  /* HERO BACKGROUND */
  heroBackground: {
    width: "100%",
  },

  /* HERO SECTION */
  hero: {
    alignItems: "center",
    paddingVertical: 60,
    backgroundColor: "#008000AA", 
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  heroImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#e6f2ff",
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 20,
  },

  ctaButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginTop: 10,
  },

  ctaText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008000",
  },

  /* FEATURES SECTION */
  section: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f5f9ff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
  },

  /* FOOTER */
  footer: {
    marginTop: 30,
    paddingVertical: 20,
  },

  footerText: {
    textAlign: "center",
    color: "#777",
  },
});
