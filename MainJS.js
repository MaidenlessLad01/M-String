let picclick = document.getElementsByClassName('nxtpage');

Array.from(picclick).forEach(a => {
    // console.log(a);
    a.addEventListener('click',()=>{
        
        let img = a.getAttribute('src');
        let name = a.dataset.name;
        localStorage.setItem('artist',JSON.stringify({image:img,name:name}));
        window.location.href="MiddlePage.html"
    })
})



//assign elements para ilisan
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
let track_artist = document.querySelector(".track-artist");
let track_name = document.querySelector(".track-name");
let seek_slider = document.querySelector(".seek_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// variable dec
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element
let curr_track = document.createElement('audio');


//list of songs
let track_list = [
    {
        name: "Can't Stop",
        artist: "Red Hot Chili Peppers",
        lyrics: `<pre><div class="lyrics">Can't stop, addicted 
to the shindig
Chop Top, he says 
I'm gonna win big
Choose not a 
life of imitation
Distant cousin to 
the reservation
efunct, the pistol 
that you pay for
This punk, the feelin' 
that you stay for
In time, I want to be 
your best friend
East Side love is living 
on the West End

Knocked out, but boy, 
you better come to            
Don't die, you know, 
the truth is some do
Go write your message on 
the pavement
Burn so bright, I wonder 
what the wave meant
White heat is 
screamin' in the jungle
Complete the motion if you stumble
Go ask the dust for any answers
Come back strong with 
50 belly dancers

The world I love, the tears I drop
To be part of the wave, can't stop
Ever wonder if it's all for you?
The world I love, the trains I hop
To be part of the wave, can't stop
Come and tell me when it's time to

Sweetheart is bleeding 
in the snow cone
So smart, she's 
leading me to ozone
Music, the great 
communicator
Use two sticks to 
make it in the nature
I'll get you into penetration
The gender of a generation
The birth of every other nation
Worth your weight, 
the gold of meditation

This chapter's gonna 
be a close one
Smoke rings, I know 
you're gonna blow one
All on a spaceship, 
persevering
Use my hands for 
everything but steering
Can't stop the spirits 
when they need you
Mop tops are happy 
when they feed you
J. Butterfly is in 
the treetop
Birds that blow 
the meaning into bebop

The world I love, 
the tears I drop
To be part of the wave, 
can't stop
Ever wonder if 
it's all for you?
The world I love, 
the trains I hop
To be part of the wave,
can't stop
Come and tell me 
when it's time to

Wait a minute, I'm 
passin' out, win or lose
Just like you
Far more shocking 
than anything I ever knew
How about you?
Ten more reasons 
why I need somebody new
Just like you
Far more shocking 
than anything I ever knew
Right on cue

Can't stop, addicted 
to the shindig
Chop Top, he says 
I'm gonna win big
Choose not a life of imitation
Distant cousin 
to the reservation
Defunct, the pistol 
that you pay for
This punk, the feelin' 
that you stay for
In time, I want to 
be your best friend
East Side love is 
living on the West End

Knocked out, but boy, 
you better come to
Don't die, you know, 
the truth is some do
Go write your message 
on the pavement
Burn so bright, I 
wonder what the wave meant

Kick-start the
golden generator
Sweet talk but
don't intimidate her
Can't stop the
gods from engineering
Feel no need for
any interfering
Your image in
the dictionary
This life is more
than ordinary
Can I get two, maybe 
even three of these?
Comin' from space to
teach you of the Pleiades

Can't stop the spirits 
when they need you
This life is more than
just a read-through</div></pre>`,
        path: "songs/cantstop.mp3"
    },
    {
        name: "Blue",
        artist: "Yung Kai",
        lyrics: `<pre><div class="lyrics">Your morning eyes,
I could stare like
watching stars
I could walk you by,
and I'll tell
without a thought
You'd be mine,
would you mind if
I took your hand
tonight?
Know you're all
that I want this life

I'll imagine we
fell in love
I'll nap under
moonlight skies
with you
I think I'll
picture us,
you with the waves
The ocean's
colors on your face
I'll leave my
heart with your air
So let me fly with you
Will you be
forever with me?

My love will always
stay by you
I'll keep it safe,
so don't you worry
a thing, I'll tell
you I love you more
It's stuck with you
forever, so promise
you won't let it go
I'll trust the 
universe will
always bring me to you

I'll imagine we
fell in love
I'll nap under
moonlight skies with you
I think I'll picture us,
you with the waves
The ocean's colors
on your face
I'll leave my heart
with your air
So let me 
fly with you
Will you be
forever with me?</div></pre>`,
        path: "songs/blue.mp3"
    },
    {
        name: "Buddy Holly",
        artist: "Weezer",
        lyrics: `<pre><div class="lyrics">What's with these
homies, dissing my girl?
Why do they gotta front?
What did we ever
do to these guys
That made them so violent?
Woo-hoo
But you know I'm yours
Woo-hoo
And I know you're mine
Woo-hoo
(And that's for
all time)
Ooh-wee-hoo, I
look just like 
Buddy Holly
Oh-oh, and you're 
Mary Tyler Moore
I don't care what 
they say about us anyway
I don't care about that

Don't you ever fear,
I'm always near
I know that you
need help
Your tongue is 
twisted, your eyes 
are slit
You need a guardian

Woo-hoo
And you know I'm yours
Woo-hoo
And I know you're mine
Woo-hoo
(And that's for
all time)
Ooh-wee-hoo, I look
just like Buddy Holly
Oh-oh, and you're
Mary Tyler Moore
I don't care what
they say about us anyway
I don't care about that
I don't care about that

Bang, bang, a knock 
on the door
Another big bang 
and you're down on 
the floor
Oh no! What do we do?
Don't look now, 
but I lost my shoe
I can't run, and 
I can't kick
What's the matter babe, 
are you feeling sick?
What's the matter, what's 
the matter, what's the
matter you?
What's the matter babe, 
are you feeling blue?
Ooh-wee-hoo, I look just 
like Buddy Holly
Oh-oh, and you're 
Mary Tyler Moore
I don't care what 
they say about us anyway

I don't care about that
I don't care about that
I don't care about that
I don't care about that</div></pre>`,
        path: "songs/buddyholly.mp3"
    },
    ];

let artist_songs = {
    BrunoMars: [
        {
            songname: 'Die With A Smile',
            songduration: '4:11'
        },
        {
            songname: 'APT.',
            songduration: '2:49'
        },
        {
            songname: 'Locked Out Of Heaven',
            songduration: '3:53'
        },
        {
            songname: 'Just The Way You Are',
            songduration: '3:40'
        },
        {
            songname: `That's What I Like`,
            songduration: '3:26'
        }
    ],

    Weezer: [
        {
            songname: 'Buddy Holly',
            songduration: '2:39'
        },
        {
            songname: `Say It Ain't So`,
            songduration: '4:18'
        },
        {
            songname: 'Undone - The Sweater Song',
            songduration: '5:05'
        },
        {
            songname: 'Island In The Sun',
            songduration: '3:20'
        },
        {
            songname: 'Beverly Hills',
            songduration: '3:20'
        }
    ],

    TaylorShit: [
        {
            songname: 'You Belong With Me',
            songduration: '3:51'
        },
        {
            songname: `Love Story`,
            songduration: '3:56'
        },
        {
            songname: 'Back To December',
            songduration: '4:53'
        },
        {
            songname: 'Cardigan',
            songduration: '3:59'
        },
        {
            songname: 'Enchanted',
            songduration: '5:52'
        }
    ],
    NeYo: [
        {
            songname: 'Mad',
            songduration: '4:14'
        },
        {
            songname: `Miss Independent`,
            songduration: '3:52'
        },
        {
            songname: 'Closer',
            songduration: '3:54'
        },
        {
            songname: 'Because Of You',
            songduration: '4:26'
        },
        {
            songname: 'So Sick',
            songduration: '3:27'
        }
    ],
    RHCP: [
        {
            songname: 'Californication',
            songduration: '5:29'
        },
        {
            songname: `Can't Stop`,
            songduration: '4:29'
        },
        {
            songname: 'Snow (Hey Oh)',
            songduration: '5:34'
        },
        {
            songname: 'Otherside',
            songduration: '4:15'
        },
        {
            songname: 'Under The Bridge',
            songduration: '4:24'
        }
    ]
};


let singles = document.getElementsByClassName('singles')

Array.from(singles).forEach(b => {
    b.addEventListener('click',()=>{
        let track_name = b.getAttribute('alt')
        let track = track_list.findIndex(x => x.name == track_name)
        loadTrack(track)
        playTrack()
    })
}) 



function loadTrack(track_index) {
// Clear the timer
clearInterval(updateTimer);
resetValues();

// Load a new song
curr_track.src = track_list[track_index].path;
curr_track.load();

// Update details of the track
track_name.textContent = track_list[track_index].name;
// Update the lyrics with preformatted content
let lyrics_element = document.querySelector(".lyrics-container");
lyrics_element.innerHTML = track_list[track_index].lyrics;
track_artist.textContent = track_list[track_index].artist;
// Set an interval of 1000 milliseconds
// for updating the seek slider
updateTimer = setInterval(seekUpdate, 1000);

// Move to the next track if the current finishes playing
// using the 'ended' event
curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
curr_time.textContent = "00:00";
total_duration.textContent = "00:00";
seek_slider.value = 0;
}
function playpauseTrack() {
// Switch between playing and pausing
// depending on the current state
if (!isPlaying) playTrack();
else pauseTrack();
}

function playTrack() {
// Play the loaded track
curr_track.play();
isPlaying = true;
// Replace icon with the pause icon
playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
// Pause the loaded track
curr_track.pause();
isPlaying = false;
// Replace icon with the play icon
playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack() {
// Go back to the first track if the
// current one is the last in the track list
if (track_index < track_list.length - 1)
track_index += 1;
else track_index = 0;
// Load and play the new track
loadTrack(track_index);
playTrack();
}
function prevTrack() {
// Go back to the last track if the
// current one is the first in the track list
if (track_index > 0)
track_index -= 1;
else track_index = track_list.length - 1;

// Load and play the new track
loadTrack(track_index);
playTrack();
}
function seekTo() {
// Calculate the seek position by the
// percentage of the seek slider 
// and get the relative duration to the track
seekto = curr_track.duration * (seek_slider.value / 100);

// Set the current track position to the calculated seek position
curr_track.currentTime = seekto;
}

function setVolume() {
// Set the volume according to the
// percentage of the volume slider set
curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
let seekPosition = 0;

// Check if the current track duration is a legible number
if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
}
}

            
        



