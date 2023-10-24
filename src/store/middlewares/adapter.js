const adaptToClient = (offer)=> {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        host: {
          avatarUrl: offer.host.avatar_url,
          id: offer.host.id,
          isPro: offer.host.is_pro,
          name: offer.host.name,
        },
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image,
      },
  );

  // Ненужные ключи мы удаляем
  //delete adaptedOffer.host;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

const adaptToServer = (offer)=> {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        'avatar_url': offer.host.avatarUrl,
        'is_pro': offer.host.isPro,
        'is_favorite': offer.isFavorite,
        'is_premium': offer.isPremium,
        'max_adults': offer.maxAdults,
        'preview_image': offer.previewImage
      },
  );

  // Ненужные ключи мы удаляем
  delete adaptedOffer.host.avatarUrl;
  delete adaptedOffer.host.isPro;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.maxAdults;
  delete adaptedOffer.previewImage;


  return adaptedOffer;
};

export {adaptToClient, adaptToServer};
