import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Switch, Text, View } from 'react-native';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  console.log(colorScheme);
  return (
    <View className="flex-1 justify-center items-center bg-red-500">
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-xl">Toggle Theme</Text>
        <Switch value={colorScheme} onChange={toggleColorScheme} />
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
