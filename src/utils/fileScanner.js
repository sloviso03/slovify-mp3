export function fileScanner() {
  const songs = []; 
  const modules = import.meta.glob('/public/music/*');
  console.log('Filenames in the directory:');
    
  for (const path in modules) {
    const filename = path.split('/').pop();        
    songs.push(filename);
  }

  console.log(songs);

  return songs;
}