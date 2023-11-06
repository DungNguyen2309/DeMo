import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SvgHome from './assets/home.svg'; 
import SvgNotification from './assets/notification.svg'; 
import SvgReport from './assets/chart-bar.svg'; 
import SvgSettings from './assets/settings.svg'; 

const BottomNavigationBar = () => {
    const [selectedTab, setSelectedTab] = useState('Trang chủ');
  
    const handleTabPress = (tab) => {
      setSelectedTab(tab);
    };
  
    return (
      <View style={styles.container}>
        <TabButton
          label="Trang chủ"
          icon={<SvgHome />}
          isSelected={selectedTab === 'Trang chủ'}
          onPress={() => handleTabPress('Trang chủ')}
        />
        <TabButton
          label="Thông báo"
          icon={<SvgNotification fill={"black"}/>}
          isSelected={selectedTab === 'Thông báo'}
          onPress={() => handleTabPress('Thông báo')}
        />
        <TabButton
          label="Báo cáo"
          icon={<SvgReport fill={"black"} />}
          isSelected={selectedTab === 'Báo cáo'}
          onPress={() => handleTabPress('Báo cáo')}
        />
        <TabButton
          label="Thiết lập"
          icon={<SvgSettings fill={"black"} />}
          isSelected={selectedTab === 'Thiết lập'}
          onPress={() => handleTabPress('Thiết lập')}
        />
      </View>
    );
  };
  
  const TabButton = ({ label, icon, isSelected, onPress }) => (
    <TouchableOpacity style={[styles.tab, isSelected && styles.selectedTab]} onPress={onPress}>
      {icon}
      <Text style={isSelected ? styles.selectedLabel : styles.label}>{label}</Text>
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 82,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedTab: {
      backgroundColor: '#fff',
    },
    label: {
      fontSize: 12,
      color: 'gray',
    },
    selectedLabel: {
      fontSize: 12,
      color: '#007FFF',
    },
  });
  
  export default BottomNavigationBar;