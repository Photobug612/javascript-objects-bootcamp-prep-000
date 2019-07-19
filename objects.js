var playlist = {artist: "unwell"}

function updatePlaylist(playlist, musician, song) {
  playlist[musician] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}