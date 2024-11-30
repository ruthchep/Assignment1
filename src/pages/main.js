const playlist = document.getElementById('playlist');
const shuffleButton = document.getElementById('shuffleBtn');

let songs = Array.from(playlist.getElementsByTagName('li'));
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  
    }
}
function updatePlaylist() {
    playlist.innerHTML = '';
    songs.forEach(song => playlist.appendChild(song)); 
}

shuffleButton.addEventListener('click', () => {
    shuffleArray(songs);
    updatePlaylist(); 
});

const form = document.getElementById('addSongForm');
const songInput = document.getElementById('songName');
const playlist = document.getElementById('playlist');

// Function
function addSongToPlaylist(songName) {
    const newSong = document.createElement('li');
    newSong.textContent = songName;

    playlist.appendChild(newSong);
}


form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const songName = songInput.value.trim();

    if (songName) {
        addSongToPlaylist(songName);
        songInput.value = '';
    } else {
        alert('Please enter a valid song name!');
    }
});
