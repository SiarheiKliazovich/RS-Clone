import { useState } from "react";
import useSound from "use-sound";
import classNames from "classnames";
import soundUrl from "../../../assets/mp3/Eric Clapton & B.B.King - Three O`Clock BLues.mp3";
import "./audioplayer.scss";

const AudioPlayer = () => {
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });
  const [on, setOn] = useState(false);

  const hand = (on: boolean) => {
    setOn(on) === play();
    setOn(!on) === stop();
  };

  return (
    <button
      type="button"
      className="voice-btn-fixed"
      id="my_audio"
      onClick={() => hand(on)}
    >
      <div className="voice-btn">
        <img className={classNames("volume-up", { none: on === false })} />
        <img className={classNames("volume-mute", { none: on === true })} />
      </div>
    </button>
  );
};

export default AudioPlayer;
