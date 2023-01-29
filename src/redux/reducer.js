import { ADD_IMAGES, ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./action.js";

const initialState = {
  images: [
    {
      url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty574/product/media/images/20221023/2/200151273/603707788/1/1_org_zoom.jpg",
    },
    {
      url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty706/product/media/images/20230128/12/268336185/274464739/1/1_org_zoom.jpg",
    },
    {
      url: "https://img01.ztat.net/article/spp-media-p1/a56a25bb32c74dccb426c6cf8847b778/aa8b658700d044ca9c75a31caaa5531b.jpg?imwidth=762",
    },
    {
      url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty607/product/media/images/20221122/19/219736703/629232056/1/1_org_zoom.jpg",
    },
    {
      url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty536/product/media/images/20220916/2/175803590/570154184/1/1_org_zoom.jpg",
    },
    {
      url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty441/product/media/images/20220530/13/118256523/426428961/2/2_org_zoom.jpg",
    },
    {
      url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty291/product/media/images/20220110/10/23989630/225391893/2/2_org_zoom.jpg",
    },
    {
      url: "https://cdn.dsmcdn.com/mnresize/1200/1800/ty623/product/media/images/20221203/16/226809070/638545315/1/1_org_zoom.jpg",
    },
  ],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_IMAGES: {
      return { ...state, images: payload };
    }
    case ADD_TO_BASKET: {
      return { ...state, basket: payload };
    }
    case REMOVE_FROM_BASKET: {
      return { ...state, basket: payload };
    }
    default:
      return state;
  }
};

export default reducer;
