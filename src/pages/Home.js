import React from "react";

import { ListOfCategories } from "./../components/ListOfCategories";
import { ListOfPhotoCards } from "./../container/ListOfPhotoCards";
import {Layout} from './../components/Layout';

export const Home = ({ categoryId }) => {
  return (
    <Layout title="Tu app de foto de mascotas" subtitle="Con Petgram puedes encontrar fotos de animales domesticos muy bonitos">
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};
