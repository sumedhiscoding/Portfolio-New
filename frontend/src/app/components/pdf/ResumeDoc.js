"use client";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 600,
  },
});

export const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Sumedh Gavai</Text>
        <Text>Full Stack Developer</Text>
        <Text>sumedh@example.com</Text>
      </View>
    </Page>
  </Document>
);
