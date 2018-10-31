

const TrackBar = (() => {

    const state = {
        currentTrackTime: 0,
        trackTime: 0,
        fillWidth: 0
    }

    const trackBarFillEl = document.querySelector('.trackbar__fill');

    const init = () => {
        render();
    }

    const render = () => {
        trackBarFillEl.style.width = `${state.fillWidth}%`;
    }

    const getPercent = (current, songLength) => {
        return (current / songLength) *100;
    }

    const setState = (obj) => {
        state.currentTrackTime = obj.currentTime;
        state.fullTrackTime = obj.duration;
        state.fillWidth = getPercent(state.currentTrackTime, state.fullTrackTime);
        render();
    }

    return {
        init, 
        setState
    }
})();

export default TrackBar;