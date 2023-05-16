import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-bold text-4xl text-gray-50">Rocketseat</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
