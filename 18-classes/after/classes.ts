class Song {
  isPlaying: boolean;
  name: string;

  constructor(name: string) {
    this.isPlaying = false;
    this.name = name;
  }

  play(speed: number) {
    this.isPlaying = true;
    console.log(`play`);
  }

  song() {
    this.isPlaying = false;
    console.log(`stop`);
  }
}

function playAll(songs: Array<Song>) {
  songs.forEach(s => s.play(1));
}

const s = new Song("hey you");
playAll([s]);

