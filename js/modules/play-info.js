import Playlist from './playlist.js';

const PlayInfo = (() => {

    const state = {
        songLength: 0,
        isPlaying: false
    }

    const playerCount = document.querySelector(".player__count");
    const playerTrigger = document.querySelector(".player__trigger");

    const init = () => {
        render();
        listeners();
    }

    const listeners = () => {
        //Render playInfo's state for Play/Pause Button
        playerTrigger.addEventListener("click", () => {
            state.isPlaying = state.isPlaying ? false : true;
            render();
            Playlist.flipState();
        });
    }

    const setState = (obj) => {
        state.songLength = obj.songLength;
        state.isPlaying = obj.isPlaying;
        render();
    }

    const render = () => {
        playerCount.innerHTML = state.songsLength;
        playerTrigger.innerHTML = state.isPlaying ? "Pause" : "Play";
    }

    return {
        init,
        setState
    }
})();

export default PlayInfo;