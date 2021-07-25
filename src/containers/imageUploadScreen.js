import React, {useState, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Layout, Button, Modal, Text, Card} from '@ui-kitten/components';
import GridImageView from 'react-native-grid-image-viewer';

const ImageUploadScreen = props => {
  const [ShowImageOptions, setShowImageOptions] = useState(false);
  const [response, setResponse] = useState([]);
  const imageGrid = [
    'https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/01/hipertextual-star-wars-deseo-mas-grande-darth-vader-podria-hacerse-realidad-muy-pronto-2020659163.jpg?fit=2048%2C1365&ssl=1',
    'https://i.blogs.es/2e0c9a/anakin-luke/840_560.jpeg',
    'https://img.europapress.es/fotoweb/fotonoticia_20200322195126_1200.jpg',
  ];

  const cameraLauncher = useCallback(options => {
    launchCamera(options, setResponse);
    // eslint-disable-next-line prettier/prettier
  }, []);

  const imageLibraryLauncher = useCallback(options => {
    launchImageLibrary(options, setResponse);
    // eslint-disable-next-line prettier/prettier
  }, []);

  return (
    <Layout style={styles.background}>
      <GridImageView data={imageGrid} />
      <Button onPress={() => setShowImageOptions(true)}>Agregar Imagen</Button>

      <Modal visible={ShowImageOptions}>
        <Card disabled={true}>
          <Text>Deez Nuts😻</Text>
          <Button
            onPress={() =>
              cameraLauncher({
                saveToPhotos: true,
                mediaType: 'photo',
                includeBase64: false,
              })
            }>
            Camara
          </Button>
          <Button
            onPress={() =>
              imageLibraryLauncher({
                maxHeight: 200,
                maxWidth: 200,
                selectionLimit: 0,
                mediaType: 'photo',
                includeBase64: false,
              })
            }>
            Galería
          </Button>
          <Button onPress={() => setShowImageOptions(false)}>DISMISS</Button>
        </Card>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    minHeight: 192,
  },
  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600',
  },
});
export default ImageUploadScreen;
