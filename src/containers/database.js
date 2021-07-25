import {Button, Layout, Text, Spinner, Card} from '@ui-kitten/components';
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {GetCases} from '../services/services';

const Database = () => {
  const [cases, setCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleGetCases();
  }, []);

  const handleGetCases = async () => {
    let response = [];
    await GetCases().then(res => (response = res.data.data));
    setCases(response);
    setIsLoading(false);
  };

  return (
    <Layout>
      {isLoading && isLoading ? (
        <Layout
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            width: 300,
          }}>
          <Spinner size="giant" />
          <Text>Loading...</Text>
        </Layout>
      ) : (
        <FlatList
          data={cases}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <Layout>
              <Card
                header={() => (
                  <Layout>
                    <Text category="h6">ID: {item._id}</Text>
                    {/* <Text category="s1">ID</Text> */}
                  </Layout>
                )}>
                <Text>{item.stole_item}</Text>
              </Card>
            </Layout>
          )}
        />
      )}
      {/* <Button onPress={() => handleGetCases()}> Show Cases! </Button> */}
    </Layout>
  );
};

export default Database;
