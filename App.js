import React from "react";
import { ScrollView } from "react-native";
import CounterApp from "./CounterApp";


export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <CounterApp/> 


    </ScrollView>
  );
}