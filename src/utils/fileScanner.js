export function fileScanner() {
  const songs = []; 
  const modules = import.meta.glob('/src/music/*');
  console.log('Filenames in the directory:');
    
  for (const path in modules) {
    const filename = path.split('/').pop();        
    const fileNameTrimmed = filename.split('.').slice(0, -1).join('.')

    songs.push(fileNameTrimmed);
  }

  console.log(songs);

  return songs;
}