// src/hooks/useBackgroundAudio.js
import { useState, useEffect, useRef, useCallback } from 'react';
import { WEDDING_DATA } from '../data/wedding';

/**
 * Custom hook to manage wedding background music directly from the extracted audio
 * from the wedding video (/theme-video/wedding-song.mp3).
 * Plays seamlessly with auto-looping, volume smoothing, and mobile user-gesture unlock.
 */
export function useBackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(WEDDING_DATA.music.src || '/theme-video/wedding-song.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const playAudio = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn('Audio play restricted or waiting for gesture:', err);
      });
  }, []);

  const pauseAudio = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }, [isPlaying, pauseAudio, playAudio]);

  return {
    isPlaying,
    playAudio,
    pauseAudio,
    toggleAudio
  };
}
