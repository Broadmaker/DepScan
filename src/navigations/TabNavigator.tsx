/** @jsxImportSource nativewind */
// src/navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { TabParamList } from '@/types';

import ClassStack from './ClassStack';
import StudentStack from './StudentStack';
import ExamStack from './ExamStack';
import ScannerStack from './ScannerStack';


const Tab = createBottomTabNavigator<TabParamList>();

const TAB_ICONS: Record<string, [string, string]> = {
  ClassTab: ['school-outline', 'school'],
  ExamTab: ['document-text-outline', 'document-text'],
  ResultTab: ['stats-chart-outline', 'stats-chart'],
  ScannerTab: ['qr-code-outline', 'qr-code'],
  SettingTab: ['settings-outline', 'settings'],
  StudentTab: ['people-outline', 'people'],
  SyncTab: ['sync-outline', 'sync'],
};


export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = TAB_ICONS[route.name];
          const iconName = icons ? (focused ? icons[1] : icons[0]) : 'ellipse';
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1D4ED8',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // headers handled by stacks
      })}
    >
      <Tab.Screen name="ClassTab" component={ClassStack} />
      <Tab.Screen name="StudentTab" component={StudentStack} />
      <Tab.Screen name="ExamTab" component={ExamStack} />
      <Tab.Screen name="ScannerTab" component={ScannerStack} />
      
     {/*  
      <Tab.Screen name="ResultTab" component={ResultStack} />
       />
      <Tab.Screen name="SettingTab" component={SettingStack} />
 
      <Tab.Screen name="SyncTab" component={SyncStack} /> */}
    </Tab.Navigator>
  );
}