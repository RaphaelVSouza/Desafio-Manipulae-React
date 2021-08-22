import { useState, useEffect, useRef } from 'react'
import * as S from './styles'
import { calculateTime } from 'utils/calculateTime';

type AudioTrackProps = {
  audioSource: string
}

const AudioTrack = ({ audioSource }: AudioTrackProps) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioPlayer = useRef(document.createElement("audio"));
  const progressBar = useRef(document.createElement("input"));
  const animationRef = useRef() as any;

  // Set max range input
  useEffect(() => {

    audioPlayer.current.addEventListener('loadedmetadata', () => {
      setDuration(audioPlayer.current.duration)
    })
    
  }, []);

  
  useEffect(() => {
    progressBar.current.max = duration.toString();
  }, [duration])

  async function togglePlayPause() {

    if(!isPlaying) {
      await audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);

    } else {
      await audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
      
    }
    
    setIsPlaying(!isPlaying);
  }

  function whilePlaying() {

    progressBar.current.value = audioPlayer.current.currentTime.toString();
    setCurrentTime(+progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);


  }

  function changeRange() {
    audioPlayer.current.currentTime = +progressBar.current.value;
    setCurrentTime(+progressBar.current.value);
    
  }

  audioPlayer.current.addEventListener('ended', () => {
    setIsPlaying(false);
  });

  return (
  <S.AudioPlayer>
    <audio ref={audioPlayer} src={audioSource} preload="metadata">
    </audio>
    <S.PlayPauseButton onClick={togglePlayPause}>
      {
      isPlaying ? <S.PauseIcon size="22"/> : <S.PlayIcon size="22"/> 
      }
    </S.PlayPauseButton>

    {/* Current time */}
    <S.CurrentTime>{calculateTime(currentTime)}</S.CurrentTime>

    {/* Progress bar */}
    <S.ProgressBarWrapper>
      <S.ProgressBar 
      defaultValue="0" 
      type="range" 
      ref={progressBar}
      onChange={changeRange}
      />
    </S.ProgressBarWrapper>

    <S.TotalDuration>{
      calculateTime(audioPlayer.current.duration)}
      </S.TotalDuration>
  </S.AudioPlayer>
  )
}

export default AudioTrack
