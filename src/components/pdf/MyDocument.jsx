import { View } from "@react-pdf/renderer";
import React from "react";
import { Document, Page } from "react-pdf";

export default function MyDocument() {
  return (
    <Document>
      <Page>
        <View>halo</View>
      </Page>
    </Document>
  );
}
