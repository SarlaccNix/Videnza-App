import {Input, Layout, Text} from '@ui-kitten/components';
import React, {Component, useState} from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {CaseUpload} from '../services/services';

function NewCase() {
  // const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = async form => {
    console.log('Dispatch form data', form);
    let response = '';
    //   dispatch({type: 'ADD_NEW_CASE', payload: form});
    await CaseUpload(form).then(res => (response = res));
  };

  return (
    <Layout>
      <Text>stole_item</Text>
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="stole_item"
          />
        )}
        name="stole_item"
        defaultValue=""
      />
      <Text>where_was_item</Text>
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="where_was_item"
          />
        )}
        name="where_was_item"
        defaultValue=""
      />
      <Text>folder_number</Text>
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="folder_number"
          />
        )}
        name="folder_number"
        defaultValue=""
      />

      <Text>unit_number</Text>
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="unit_number"
          />
        )}
        name="unit_number"
        defaultValue=""
      />

      <Text>agency_number</Text>

      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="agency_number"
          />
        )}
        name="agency_number"
        defaultValue=""
      />
      <Text>detail_item</Text>
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="detail_item"
          />
        )}
        name="detail_item"
        defaultValue=""
      />
      <Button title="Submit Form" onPress={handleSubmit(onSubmit)} />
    </Layout>
  );
}

export default NewCase;
