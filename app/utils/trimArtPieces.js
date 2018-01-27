function trimArtPieces(artPieces) {
  return artPieces.map((piece) => {
    return {
      title: piece.title,
      artist: piece.artist,
      _id: piece._id
    };
  });
}

module.exports = trimArtPieces;
