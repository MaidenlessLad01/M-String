let picclick = document.getElementsByClassName('nxtpage');

Array.from(picclick).forEach(a => {
    // console.log(a);
    a.addEventListener('click',()=>{
        
        let img = a.getAttribute('src');
        let name = a.dataset.name;
        localStorage.setItem('artist',JSON.stringify({image:img,name:name}));
        window.location.href="MiddlePage.html"

        localStorage.setItem('album',JSON.stringify({image:img, name:name}));
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
        name: "So Sick",
        artist: "Ne-Yo",
        lyrics:`<pre><div class="lyrics">
Mm, mm, yeah
Do, do, do, do, do, do, do-do
Ooh, yeah

Gotta change my answering machine
Now that I'm alone
'Cause right now it says that we
Can't come to the phone
And I know it makes no sense
'Cause you walked out the door
But it's the only way I hear your voice anymore

(It's ridiculous)
It's been months
And for some reason I just (Can't get over us)
And I'm stronger than this, yeah (Enough is enough)
No more walking 'round with my head down (Yeah)
I'm so over being blue
Cryin' over you

And I'm so sick of love songs, so tired of tears
So done with wishin' you were still here
Said I'm so sick of love songs, so sad and slow
So why can't I turn off the radio?

Gotta fix that calendar I have
That's marked July 15th
Because since there's no more you
There's no more anniversary
I'm so fed up with my thoughts of you
And your memory
And how every song reminds me of what used to be
That's the reason

I'm so sick of love songs, so tired of tears
So done with wishin' you were still here
Said I'm so sick of love songs, so sad and slow
So why can't I turn off the radio?

(Oh, leave me alone) Leave me alone
(Stupid love songs) Oh-oh, hey
Don't make me think about her smile
Or having my first child
I'm letting go
Turning off the radio

'Cause I'm so sick of love songs (Hey), so tired of tears (So tired of tears)
So done with wishin' she were still here (Oh)
Said I'm so sick of love songs, so sad and slow (Ooh, oh)
So why can't I turn off the radio? (Why can't I turn off the radio?)
And I'm so sick of love songs, so tired of tears (So tired of tears)
So done with wishing she were still here
Said I'm so sick of love songs, so sad and slow (Hey)
Why can't I turn off the radio? (Why can't I turn off the radio?)
And I'm so sick of love songs (So sick of love songs)
So tired of tears (And I'm so sick, so sick of love song)
So done with wishing you were still here
(And I'm so sick, so sick of love songs)
Said I'm so sick of love songs, so sad and slow (Hey)
So why can't I turn off the radio?

Why can't I turn off the radio?
Why can't I turn off the radio?
        </div></pre>`,
        path: "songs/sosick.mp3"
    },
    {
        name: "Hit 'Em Up",
        artist: "2Pac",
        lyrics:`<pre><div class="lyrics">
I ain't got no motherfucking friends
That's why I fucked your bitch, you fat motherfucker
Take Money
West Side, Bad Boy killers
Take Money
You know who the realest is
We bring it too
Take money, take money

[2Pac:]
First off, fuck your bitch and the clique you claim
Westside when we ride, come equipped with game
You claim to be a player, but I fucked your wife
We bust on Bad Boys, niggas fucked for life
Plus Puffy trying to see me, weak hearts I rip
Biggie Smalls and Junior M.A.F.I.A. some mark-ass bitches
We keep on coming while we running for your jewels
Steady gunning, keep on busting at them fools
You know the rules
Lil' Caesar go ask your homie how I'll leave you
Cut your young ass up, leave you in pieces, now be deceased
Little Kim, don't fuck around with real G's
Quick to snatch your ugly ass off the streets
So fuck peace! I'll let them niggas know it's on for life
Don't let the Westside ride the night haha
Bad Boy murdered on wax and killed
Fuck with me and get your caps peeled
You know

[2Pac:]
See, grab your Glocks when you see 2Pac
Call the cops when you see 2Pac, oh
Who shot me, but your punks didn't finish
Now you about to feel the wrath of a menace
Nigga, I hit 'em up

[2Pac:]
Check this out, you motherfuckers know what time it is
I don't know why I'm even on this track
Y'all niggas ain't even on my level
I'm going to let my little homies ride on you bitch-made ass Bad Boy bitches
Take money

[Hussein Fatal:]
Get out the way, yo, get out the way, yo
Biggie Smalls just got dropped
Little Moo' pass the MAC and let me hit him in his back
Frank White needs to get spanked right for setting traps
Little accident-murderer, and I ain't never heard of ya
Poisonous gats attack when I'm serving ya
Spank you, shank your whole style when I gank
Guard your rank cause I'ma slam your ass in the paint
Puffy weaker than the fuckin' block I'm running through, nigga
And I'm smoking Junior M.A.F.I.A. in front of you, nigga
With the ready-power
Tucked in my Guess under my Eddie Bauer
Your clout petty/sour, I push packages every hour
I hit 'em up

[2Pac:]
Grab your Glocks when you see 2Pac
Call the cops when you see 2Pac, oh
Who shot me, but your punks didn't finish
Now you about to feel the wrath of a menace
Nigga, I hit 'em up

[2Pac:]
Peep how we do it, keep it real as penitentiary steel
This ain't no freestyle battle
All you niggas getting killed with your mouths open
Trying to come up off of me, you in the clouds hoping
Smoking dope, it's like a sherm high
Niggas think they learned to fly
But they burn, motherfucker, you deserve to die
Talking about you getting money, but it's funny to me
All you niggas living bummy – why you fucking with me?
I'm a self-made millionaire
Thug livin', out of prison, pistols in the air haha
Biggie, remember when I used to let you sleep on the couch
And beg a bitch to let you sleep in the house?
Now it's all about Versace, you copied my style
Five shots couldn't drop me, I took it and smiled
Now I'm back to set the record straight
With my AK, I'm still the thug that you love to hate
Motherfucker, I'll hit 'em up

[Kadafi:]
I'm from N-E-W Jers' where plenty of murders occurs
No points or commas, we bring drama to all you herbs
Now go check the scenario: Lil' Cease
I'll bring you fake G's to your knees
Copping pleas in de Janeiro
Little Kim, is you coked up or doped up?
Get your little Junior Whopper click smoked up
What the fuck, is you stupid?
I take money, crash and mash through Brooklyn
With my click looting, shooting and polluting your block
With a 15-shot cocked Glock to your knot
Outlaw Mafia clique moving up another notch
And your Pop stars popped and get mopped and dropped
And all your fake ass east coast props
Brainstormed and locked

[E.D.I. Mean:]
Jui-cer
You's a beat biter, a Pac style taker
I'll tell you to your face you ain't shit but a faker
Softer than Alize with a chaser
About to get murdered for the paper
E.D.I. Mean approach the scene of the caper
Like a loc with Little Ceas' in a choke
Gun totin' smoke. We ain't no motherfucking joke
Thug Life, niggas better be known
Be approaching in the wide open, gun smoking
No need for hoping, it's a battle lost
I got 'em crossed as soon as the funk is bopping off
Nigga, I hit 'em up!

[2Pac:]
Now you tell me who won
I see them, they run haha
They don't wanna see us
Take money
Whole Junior M.A.F.I.A. clique dressing up trying to be us
Take money
How the fuck they gonna be the mob when we always on our job? We millionaires
Killing ain't fair, but somebody got to do it
Oh yeah, Mobb Deep: you wanna fuck with us?
You little young-ass motherfuckers
Don't one of you niggas got sickle-cell or something?
You're fucking with me, nigga
You fuck around and catch a seizure or a heart attack
You better back the fuck up
Before you get smacked the fuck up
This is how we do it on our side
Any of you niggas from New York that want to bring it:
Bring it!
But we ain't singing, we bringing drama
Fuck you and your motherfucking mama
We gon' kill all you motherfuckers
Now when I came out, I told you it was just about Biggie
Then everybody had to open their mouth with a mother fucking opinion
Well, this is how we gonna do this:
Fuck Mobb Deep, fuck Biggie, fuck Bad Boy as a staff, record label and as a motherfucking crew!
And if you want to be down with Bad Boy, then fuck you too!
Chino XL: fuck you too!
All you motherfuckers, fuck you too!
(Take money, take money)
All of y'all motherfuckers, fuck you; die slow, motherfucker
My .44 make sure all y'all kids don't grow!
You motherfuckers can't be us or see us
We motherfuckin' Thug Life-riders, Westside til we die!
Out here in California, nigga, we warned ya
We'll bomb on you motherfucker! We do our job!
You think you mob? Nigga, we the motherfuckin' mob
Ain't nothing but killers and the real niggas
All you motherfuckers feel us
Our shit goes triple and 4-quadruple
Take money
You niggas laugh cause our staff got guns under they motherfuckin' belts
You know how it is, when we drop records they felt
You niggas can't feel it, we the realest
Fuck 'em, we Bad Boy-killers
We killers, we killers, we killers

        </div></pre>`,
        path: "songs/hitemup.mp3"
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

let album_tracks = {
    DooWopsHooligans: [
        {
            songname: 'Grenade',
            songduration: '3:42'
        },
        {
            songname: 'Just The Way You Are',
            songduration: '3:40'
        },
        {
            songname: 'Runaway Baby',
            songduration: '2:28'
        },
        {
            songname: 'The Lazy Song',
            songduration: '3:09'
        },
        {
            songname: `Marry You`,
            songduration: '3:50'
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
            songname: 'My Name Is Jonas',
            songduration: '3:24'
        },
        {
            songname: 'No One Else',
            songduration: '3:04'
        }
    ],

    Lover: [
        {
            songname: 'Lover',
            songduration: '3:41'
        },
        {
            songname: `Cruel Summer`,
            songduration: '2:58'
        },
        {
            songname: 'The Archer',
            songduration: '3:31'
        },
        {
            songname: 'Paper Rings',
            songduration: '3:42'
        },
        {
            songname: 'Afterglow',
            songduration: '3:43'
        }
    ],
    Mutter: [
        {
            songname: 'Feuer Frei!',
            songduration: '4:14'
        },
        {
            songname: `Sonne`,
            songduration: '4:34'
        },
        {
            songname: 'Mein Hertz Brennt',
            songduration: '4:39'
        },
        {
            songname: 'Mutter',
            songduration: '4:28'
        },
        {
            songname: 'Ich Will',
            songduration: '3:37'
        }
    ],
    ByTheWay: [
        {
            songname: 'By The Way',
            songduration: '3:36'
        },
        {
            songname: `Can't Stop`,
            songduration: '4:29'
        },
        {
            songname: 'Dosed',
            songduration: '5:11'
        },
        {
            songname: 'The Zephyr Song',
            songduration: '3:51'
        },
        {
            songname: `Don't Forget Me`,
            songduration: '4:37'
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

            
        



