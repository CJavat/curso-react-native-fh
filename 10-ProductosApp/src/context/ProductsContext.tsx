import React, { createContext, useEffect, useState } from "react";
import { Asset } from "react-native-image-picker";
import { Producto, ProductsResponse } from "../interfaces/appInterfaces";
import cafeApi from "../api/cafeApi";

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: ( categoryId: string, productName: string ) => Promise<Producto>;
  updateProduct: ( categoryId: string, productName: string, productId: string ) => Promise<void>;
  deleteProduct: ( id: string ) => Promise<void>;
  loadProductById: ( id: string ) => Promise<Producto>;
  uploadImage: ( data: Asset, id: string ) => Promise<void>; //TODO: Cambiar tipado any.
}

export const ProductsContext = createContext( {} as ProductsContextProps );


export const ProductsProvider = ( { children }: any ) => {
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    loadProducts();
  }, [])
  

  const loadProducts = async () => {
    const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');
    setProducts([
      ...products,
      ...resp.data.productos
    ]);

  }
  
  const addProduct = async ( categoryId: string, productName: string ): Promise<Producto> => {
    
    const resp = await cafeApi.post<Producto>('/productos', {
      nombre: productName,
      categoria: categoryId
    });

    setProducts([ ...products, resp.data ]);

    return resp.data;
  }
  
  const updateProduct = async ( categoryId: string, productName: string, productId: string ) => {
    const resp = await cafeApi.put<Producto>(`/productos/${ productId }`, {
      nombre: productName,
      categoria: categoryId
    });

    setProducts( products.map( product => {
      return ( product._id === productId )
        ? resp.data
        : product
    }));
  }
  
  const deleteProduct = async ( id: string ) => {
    try {
      const { data } = await cafeApi.delete(`/productos/${ id }`);
      const updateProducts = products.filter( product => product._id !== data._id );
      
      setProducts( updateProducts );
    } catch (error) {
      console.log(error);
    }
  }
  
  const loadProductById = async ( id: string ): Promise<Producto> => {
    const resp = await cafeApi.get<Producto>(`/productos/${ id }`);

    return resp.data;
  }
  
  const uploadImage = async ( data: Asset, id: string ) => {

    const fileToUpload = {
      uri: data.uri,
      type: data.type,
      name: data.fileName
    }

    console.log(fileToUpload);

    const formData = new FormData();
    formData.append('archivo', fileToUpload);

    try {
      const resp = await cafeApi.put(`/uploads/productos/${ id }`, formData);
    } catch (error) {
      console.log( error );
    }

  }


  return (
    <ProductsContext.Provider value={{
      products,
      loadProducts,
      addProduct,
      updateProduct,
      deleteProduct,
      loadProductById,
      uploadImage,
    }}>
      { children }
    </ProductsContext.Provider>
  )
} 