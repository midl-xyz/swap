export const parseSecondsToHuman = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  return `${h}:${m}:${s > 9 ? s : `0${s}`}` || '0 seconds';
};
