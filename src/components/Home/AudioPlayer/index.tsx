import { useState } from "react";
import useSound from "use-sound";
import classNames from "classnames";
import soundUrl from "../../../assets/mp3/Eric Clapton & B.B.King - Three O`Clock BLues.mp3";
import "./audioplayer.scss";

const AudioPlayer = () => {
  const [play, { stop }] = useSound(soundUrl, { volume: 0.3 });
  const [on, setOn] = useState(false);

  const hand = (on: boolean) => {
    if (on) {
      stop();
      setOn(false);
    } else {
      play();
      setOn(true);
    }
  };

  return (
    <button
      type="button"
      className="voice-btn-fixed"
      id="my_audio"
      onClick={() => hand(on)}
    >
      <div className="voice-btn">
        <div className={classNames("volume-up", { none: on === false })}></div>
        <div className={classNames("volume-mute", { none: on === true })}></div>
      </div>
    </button>
  );
};

export default AudioPlayer;
