import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  searchGroup: { padding: 16, backgroundColor: "#f5f5f5" },
  searchFormGroup: { flexDirection: "row", alignItems: "center" },
  searchControlGroup: { flex: 1, paddingRight: 8 },
  searchFormText: { fontSize: 16 },
  searchControl: { backgroundColor: "#fff", padding: 10, borderRadius: 8 },
  searchButton: { backgroundColor: "#34967C", padding: 12, borderRadius: 8 },
  filterGroup: { flexDirection: "row", paddingHorizontal: 8, paddingVertical: 10 },
  filterContainer: { width: 80, alignItems: "center", marginRight: 8 },
  listingContainer: { paddingHorizontal: 16, paddingTop: 10 },
  paginationContainer: { paddingVertical: 20, alignItems: "center" },
  showMoreButton: { backgroundColor: "#eee", padding: 12, borderRadius: 8 },
  showMoreButtonText: { color: "#333" },
});
