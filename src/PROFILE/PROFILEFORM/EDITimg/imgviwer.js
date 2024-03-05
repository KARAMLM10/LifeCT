//imageviwer.js
import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, profileImageUrl }) {
  const imageSource = profileImageUrl ? { uri: profileImageUrl } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});