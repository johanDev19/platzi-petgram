import React, { Fragment } from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { Link } from '@reach/router'

import { useLocalStorage } from "./../../hooks/useLocalStorage";
import { useNearScreen } from "./../../hooks/useNearScreen";
import { ToggleLikeMutation } from "./../../container/ToggleLikeMutation";

import { FavButton } from "./../FavButton";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavButton = () => {
                toggleLike({
                  variables: {
                    input: {
                      id,
                    },
                  },
                });
              };

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavButton}
                />
              );
            }}
          </ToggleLikeMutation>
        </Fragment>
      )}
    </Article>
  );
};
