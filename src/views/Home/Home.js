import React, { useState, useEffect } from 'react'
import './styles/Home.scss'




var contentful = require('contentful');


export const Home = (props) => {

  const [bands, setBands] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    let client = contentful.createClient({
      space: 'm39lfmvapu06',
      accessToken: '19gu4QyhoZVHYEFBgkp3OgekwyOp2y-BJsarkUf8mbk'
    })

    client.getEntries({ content_type: 'band' }).then(res => {
      setBands(res.items);
    })
    client.getEntries({ content_type: 'artist' }).then(res => {
      setArtists(res.items);
    })
  }, [])

  console.log(artists)

  console.log(bands)

  return (
    <div className="Home">
      <div className="Header">
        <h1>Skivbolaget AB</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Vinyl_record.svg" />
        <p>Kontakt: 112</p>
      </div>
      <div className="Body">
        <div className="Bands">
          <h1>Bands</h1>
          {bands.map((band, index) => (
            <div key={index} className="band">
              {band.fields.band_images && band.fields.band_images.map((image, index2) => (
                <div key={index2} className="band_image_container">
                  <img className="band_image" src={image.fields.file.url} />
                </div>
              ))}
              <div className="band_name">{band.fields.band_name}</div>
              <div className="band_bio">{band.fields.band_biography}</div>
              <div className="band_genre">{band.fields.band_genre}</div>
              <div className="band_album">Albums: </div>
              {band.fields.band_albums && band.fields.band_albums.map((album, index3) => (
                <div key={index3} className="band_album_container">
                  <div>
                    <div className="band_album_name">{album.fields.album_name}</div>
                    <img className="band_album_image" src={album.fields.album_cover.fields.file.url} />
                  </div>
                  <div className="band_album_tracks">Tracks:

                {album.fields.album_songs.map((song, index4) => (
                    <div key={index4} className="band_album_song">{song}</div>
                  ))}
                  </div>
                </div>
              ))}
              <div className="band_members">Members:</div>
              {band.fields.band_members && band.fields.band_members.map((member, index5) => (
                <div key={index5} className="band_member_container">
                  <img className="band_member_image" src={member.fields.band_member_image.fields.file.url} />
                  <div className="band_member_name">{member.fields.band_member_name}</div>
                  <div className="band_member_bio">{member.fields.band_member_biography}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="Artists">
          <h1>Solo Artists</h1>
          {artists.map((artist, index) => (
            <div className="band">
              {artist.fields.artist_images && artist.fields.artist_images.map((image, index2) => (
                <div key={index2} className="band_image_container">
                  <img className="band_image" src={image.fields.file.url} />
                </div>
              ))}
              <div className="band_name">{artist.fields.artist_name}</div>
              <div className="band_bio">{artist.fields.artist_biography}</div>
              <div className="band_genre">{artist.fields.artist_genre}</div>
              <div className="band_album">Albums: </div>
              {artist.fields.artist_album && artist.fields.artist_album.map((album, index3) => (
                <div key={index3} className="band_album_container">
                  <div>
                    <div className="band_album_name">{album.fields.album_name}</div>
                    <img className="band_album_image" src={album.fields.album_cover.fields.file.url} />
                  </div>
                  <div className="band_album_tracks">Tracks:
                {album.fields.album_songs.map((song, index4) => (
                    <div key={index4} className="band_album_song">{song}</div>
                  ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

  )
};
export default Home;