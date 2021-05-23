import {Input, Layout, Text} from '@ui-kitten/components';
import React, {Component} from 'react';
import {Button} from 'react-native';
import {connect, mapDispatchToProps} from 'react-redux';

class _newCase extends Component {
  state = {
    stole_item: '',
    where_was_item: '',
    folder_number: '',
    unit_number: '',
    agency_number: '',
    detail_item: '',
  };
  render() {
    const handleSubmit = () => {
      console.log('Dispatch Form');
      this.onSubmit(this.state);
    };

    const changeHandler = (text, id) => {
      this.setState(id, text);
    };
    return (
      <Layout>
        <Text>stole_item</Text>
        <Input
          placeholder="stole_item"
          id="stole_item"
          onChange={(text, id) => changeHandler(text, id)}
        />
        <Text>where_was_item</Text>
        <Input
          placeholder="where_was_item"
          id="where_was_item"
          onChange={(text, id) => changeHandler(text, id)}
        />
        <Text>folder_number</Text>
        <Input
          placeholder="folder_number"
          id="folder_number"
          onChange={(text, id) => changeHandler(text, id)}
        />
        <Text>unit_number</Text>
        <Input
          placeholder="unit_number"
          id="unit_number"
          onChange={(text, id) => changeHandler(text, id)}
        />
        <Text>agency_number</Text>
        <Input
          placeholder="agency_number"
          id="agency_number"
          onChange={(text, id) => changeHandler(text, id)}
        />
        <Text>detail_item</Text>
        <Input
          placeholder="detail_item"
          id="detail_item"
          onChange={(text, id) => changeHandler(text, id)}
        />
        <Button title="Submit Form" onPress={() => handleSubmit()} />
      </Layout>
    );
  }
  mapDispatchToProps = dispatch => {
    return {
      onSubmit: form => dispatch({type: 'ADD_NEW_CASE', payload: form}),
    };
  };
}

const newCase = connect(mapDispatchToProps)(_newCase);

export default newCase;
