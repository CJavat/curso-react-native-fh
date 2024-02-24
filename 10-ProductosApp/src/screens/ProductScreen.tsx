import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import {Picker} from '@react-native-picker/picker';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'>{};

export const ProductScreen = ( { navigation, route }: Props ) => {

  const { id = "", name = ""} = route.params;
  const [tempUri, setTempUri] = useState<string>('');

  const { categories, isLoading } = useCategories();
  const { loadProductById, addProduct, updateProduct, deleteProduct, uploadImage } = useContext( ProductsContext );

  const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
    _id: id,
    categoriaId: '',
    nombre: name,
    img: '',
  });

  useEffect(() => {
    loadProduct();
  }, []);
  

  useEffect(() => {
    navigation.setOptions({
      title: ( nombre ) ? nombre : 'Producto Sin Nombre'
    });
  }, [ nombre ]);

  const loadProduct = async () => {
    if( id.length === 0 ) return;

    const product = await loadProductById( id );
    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      nombre: nombre,
      img: product.img || '',
    });
  };
  
  const saveOrUpdate = async () => {
    if( id.length > 0 ) {
      updateProduct( categoriaId, nombre, id );
    } else {
      const tempCategoriaid = categoriaId || categories[0]._id;
      const newProduct = await addProduct( tempCategoriaid, nombre );
      onChange( newProduct._id, '_id' );
    }
  };

  const delProduct = async () => {
    await deleteProduct( id );
    navigation.goBack();
  }

  const takePhoto = () => {
    launchCamera({
      mediaType: 'photo',
      quality: 0.5,
    }, (resp) => {
      if( resp.didCancel ) return;
      if( !resp.assets ) return;
      if( !resp.assets[0].uri ) return;

      setTempUri( resp.assets[0].uri );
      uploadImage( resp.assets[0], _id );
    });
  };

  const takePhotoFromGallery = () => {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
    }, (resp) => {
      if( resp.didCancel ) return;
      if( !resp.assets ) return;
      if( !resp.assets[0].uri ) return;

      setTempUri( resp.assets[0].uri );
      uploadImage( resp.assets[0], _id );
    });
  };

  return (
    <View style={ styles.container }>
      <ScrollView>
        <Text style={ styles.label }>Nombre del Producto:</Text>
        <TextInput 
          style={ styles.textInput }
          placeholder='Producto'
          value={ nombre }
          onChangeText={ ( value ) => onChange( value, 'nombre' ) }
        />

        {/* Picker / Selector */}
        <Text style={ styles.label }>Categoría:</Text>
        <Picker
          selectedValue={ categoriaId }
          onValueChange={(itemValue) => onChange(itemValue, 'categoriaId') }
        >
          {
            categories.map( category => (
              <Picker.Item 
                label={ category.nombre }
                value={ category._id }
                key={ category._id }
              />
            ))
          }
        </Picker>


        <Button 
          title='Guardar'
          onPress={ saveOrUpdate }
          color='#5856D6'
        />
        <View style={{ marginVertical: 5 }} />
        <Button 
          title='Eliminar'
          onPress={ delProduct }
          color='#DC2626'
        />

        {
          (_id.length > 0) && (
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, gap: 10 }}>
              <Button 
                title='Cámara'
                onPress={ takePhoto }
                color='#5856D6'
              />

              <Button 
                title='Galería'
                onPress={ takePhotoFromGallery }
                color='#5856D6'
              />
            </View>
          )
        }


        {
          (img.length > 0 && !tempUri) && (
            <Image 
              source={{ uri: img }}
              style={{
                width: '100%',
                height: 300,
                objectFit: 'contain',
              }}
            />
          )
        }

        {/* Todo: Mostrar imagen temporal */}
        {
          (tempUri) && (
            <Image 
              source={{ uri: tempUri }}
              style={{
                width: '100%',
                height: 300,
                objectFit: 'contain',
              }}
            />
          )
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
});