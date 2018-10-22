import { songsList } from '../data/songs.js';

const Playlist = ( _ => {

    let songs = songsList;
    let currentPlayingIndex = 0;
    let currentSong = new Audio(songs[currentPlayingIndex].url);
    let isPlaying = false;

    //cache the DOM
    const playlistEl = document.querySelector(".playlist");

    const init = () => {
        render();
        listeners();
    }

    const updateAudioSrc = () => {
        currentSong.src = song[currentPlayingIndex].url;
    }

    const togglePlayPause = () => {
        return currentSong.paused ? currentSong.play() : currentSong.pause();
    }

    const mainPlay = (clickedIndex) => {
        /* Toggle Play/Pause on same song or on a new song */
        if(currentPlayingIndex === clickedIndex){
            togglePlayPause();
            console.log('same')
        } else {
            currentPlayingIndex = clickedIndex;
            updateAudioSrc();
            togglePlayPause();
        }
    }

    const listeners = () => {
        //get index of li tag  when user clicks on song
        playlistEl.addEventListener("click", (e) => {
            if(e.target && e.target.matches(".fa")) {
                const listEl = event.target.parentNode.parentNode
                //converts HTML collection to array
                const listElIndex = [...listEl.parentElement.children].indexOf(listEl);
                console.log(listElIndex);
                mainPlay(listElIndex)
                render();
            }
        });
        //change current index to index of li
    }

    

    const render = () => {
        let markup = '';

        //toggles icon to either pause or playing depending on state
        const toggleIcon = (itemIndex) => {
            if (currentPlayingIndex === itemIndex) {
                return currentSong.paused ? 'fa-play' : 'fa-pause';
              } else {
                return 'fa-play';
              }
        }

        songs.forEach((songObj, index) => {
            markup += `
              <li class="playlist__song ${index === currentPlayingIndex ? 'playlist__song--active' : ''}">
                <div class="play-pause">
                  <i class="fa ${toggleIcon(index)} pp-icon"></i>
                </div>
                <div class="playlist__song-details">
                  <span class="playlist__song-name">${songObj.title}</span>
                  <br>
                  <span class="playlist__song-artist">${songObj.artist}</span>
                </div>
                <div class="playlist__song-duration">
                  ${songObj.time}
                </div>
              </li>
            `;
          })

        playlistEl.innerHTML = markup;
    }



    return {
        init
    }

}) ();

export default Playlist;