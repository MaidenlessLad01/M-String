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
// let track_list = [
//     {
//         name: "Can't Stop",
//         artist: "Red Hot Chili Peppers",
//         lyrics: `<pre><div class="lyrics">Can't stop, addicted 
// to the shindig
// Chop Top, he says 
// I'm gonna win big
// Choose not a 
// life of imitation
// Distant cousin to 
// the reservation
// efunct, the pistol 
// that you pay for
// This punk, the feelin' 
// that you stay for
// In time, I want to be 
// your best friend
// East Side love is living 
// on the West End

// Knocked out, but boy, 
// you better come to            
// Don't die, you know, 
// the truth is some do
// Go write your message on 
// the pavement
// Burn so bright, I wonder 
// what the wave meant
// White heat is 
// screamin' in the jungle
// Complete the motion if you stumble
// Go ask the dust for any answers
// Come back strong with 
// 50 belly dancers

// The world I love, the tears I drop
// To be part of the wave, can't stop
// Ever wonder if it's all for you?
// The world I love, the trains I hop
// To be part of the wave, can't stop
// Come and tell me when it's time to

// Sweetheart is bleeding 
// in the snow cone
// So smart, she's 
// leading me to ozone
// Music, the great 
// communicator
// Use two sticks to 
// make it in the nature
// I'll get you into penetration
// The gender of a generation
// The birth of every other nation
// Worth your weight, 
// the gold of meditation

// This chapter's gonna 
// be a close one
// Smoke rings, I know 
// you're gonna blow one
// All on a spaceship, 
// persevering
// Use my hands for 
// everything but steering
// Can't stop the spirits 
// when they need you
// Mop tops are happy 
// when they feed you
// J. Butterfly is in 
// the treetop
// Birds that blow 
// the meaning into bebop

// The world I love, 
// the tears I drop
// To be part of the wave, 
// can't stop
// Ever wonder if 
// it's all for you?
// The world I love, 
// the trains I hop
// To be part of the wave,
// can't stop
// Come and tell me 
// when it's time to

// Wait a minute, I'm 
// passin' out, win or lose
// Just like you
// Far more shocking 
// than anything I ever knew
// How about you?
// Ten more reasons 
// why I need somebody new
// Just like you
// Far more shocking 
// than anything I ever knew
// Right on cue

// Can't stop, addicted 
// to the shindig
// Chop Top, he says 
// I'm gonna win big
// Choose not a life of imitation
// Distant cousin 
// to the reservation
// Defunct, the pistol 
// that you pay for
// This punk, the feelin' 
// that you stay for
// In time, I want to 
// be your best friend
// East Side love is 
// living on the West End

// Knocked out, but boy, 
// you better come to
// Don't die, you know, 
// the truth is some do
// Go write your message 
// on the pavement
// Burn so bright, I 
// wonder what the wave meant

// Kick-start the
// golden generator
// Sweet talk but
// don't intimidate her
// Can't stop the
// gods from engineering
// Feel no need for
// any interfering
// Your image in
// the dictionary
// This life is more
// than ordinary
// Can I get two, maybe 
// even three of these?
// Comin' from space to
// teach you of the Pleiades

// Can't stop the spirits 
// when they need you
// This life is more than
// just a read-through</div></pre>`,
//         path: "songs/cantstop.mp3"
//     },
//     {
//         name: "Buddy Holly",
//         artist: "Weezer",
//         lyrics: `<pre><div class="lyrics">What's with these
// homies, dissing my girl?
// Why do they gotta front?
// What did we ever
// do to these guys
// That made them so violent?
// Woo-hoo
// But you know I'm yours
// Woo-hoo
// And I know you're mine
// Woo-hoo
// (And that's for
// all time)
// Ooh-wee-hoo, I
// look just like 
// Buddy Holly
// Oh-oh, and you're 
// Mary Tyler Moore
// I don't care what 
// they say about us anyway
// I don't care about that

// Don't you ever fear,
// I'm always near
// I know that you
// need help
// Your tongue is 
// twisted, your eyes 
// are slit
// You need a guardian

// Woo-hoo
// And you know I'm yours
// Woo-hoo
// And I know you're mine
// Woo-hoo
// (And that's for
// all time)
// Ooh-wee-hoo, I look
// just like Buddy Holly
// Oh-oh, and you're
// Mary Tyler Moore
// I don't care what
// they say about us anyway
// I don't care about that
// I don't care about that

// Bang, bang, a knock 
// on the door
// Another big bang 
// and you're down on 
// the floor
// Oh no! What do we do?
// Don't look now, 
// but I lost my shoe
// I can't run, and 
// I can't kick
// What's the matter babe, 
// are you feeling sick?
// What's the matter, what's 
// the matter, what's the
// matter you?
// What's the matter babe, 
// are you feeling blue?
// Ooh-wee-hoo, I look just 
// like Buddy Holly
// Oh-oh, and you're 
// Mary Tyler Moore
// I don't care what 
// they say about us anyway

// I don't care about that
// I don't care about that
// I don't care about that
// I don't care about that</div></pre>`,
//         path: "songs/buddyholly.mp3"
//     },  
//     {
//         name: "Blue",
//         artist: "Yung Kai",
//         lyrics: `<pre><div class="lyrics">Your morning eyes,
// I could stare like
// watching stars
// I could walk you by,
// and I'll tell
// without a thought
// You'd be mine,
// would you mind if
// I took your hand
// tonight?
// Know you're all
// that I want this life

// I'll imagine we
// fell in love
// I'll nap under
// moonlight skies
// with you
// I think I'll
// picture us,
// you with the waves
// The ocean's
// colors on your face
// I'll leave my
// heart with your air
// So let me fly with you
// Will you be
// forever with me?

// My love will always
// stay by you
// I'll keep it safe,
// so don't you worry
// a thing, I'll tell
// you I love you more
// It's stuck with you
// forever, so promise
// you won't let it go
// I'll trust the 
// universe will
// always bring me to you

// I'll imagine we
// fell in love
// I'll nap under
// moonlight skies with you
// I think I'll picture us,
// you with the waves
// The ocean's colors
// on your face
// I'll leave my heart
// with your air
// So let me 
// fly with you
// Will you be
// forever with me?</div></pre>`,
//         path: "songs/blue.mp3"
//     },
//     {
//         name: "So Sick",
//         artist: "Ne-Yo",
//         lyrics:`<pre><div class="lyrics">
// Mm, mm, yeah
// Do, do, do, do, do, do, do-do
// Ooh, yeah

// Gotta change my answering machine
// Now that I'm alone
// 'Cause right now it says that we
// Can't come to the phone
// And I know it makes no sense
// 'Cause you walked out the door
// But it's the only way I hear your voice anymore

// (It's ridiculous)
// It's been months
// And for some reason I just (Can't get over us)
// And I'm stronger than this, yeah (Enough is enough)
// No more walking 'round with my head down (Yeah)
// I'm so over being blue
// Cryin' over you

// And I'm so sick of love songs, so tired of tears
// So done with wishin' you were still here
// Said I'm so sick of love songs, so sad and slow
// So why can't I turn off the radio?

// Gotta fix that calendar I have
// That's marked July 15th
// Because since there's no more you
// There's no more anniversary
// I'm so fed up with my thoughts of you
// And your memory
// And how every song reminds me of what used to be
// That's the reason

// I'm so sick of love songs, so tired of tears
// So done with wishin' you were still here
// Said I'm so sick of love songs, so sad and slow
// So why can't I turn off the radio?

// (Oh, leave me alone) Leave me alone
// (Stupid love songs) Oh-oh, hey
// Don't make me think about her smile
// Or having my first child
// I'm letting go
// Turning off the radio

// 'Cause I'm so sick of love songs (Hey), so tired of tears (So tired of tears)
// So done with wishin' she were still here (Oh)
// Said I'm so sick of love songs, so sad and slow (Ooh, oh)
// So why can't I turn off the radio? (Why can't I turn off the radio?)
// And I'm so sick of love songs, so tired of tears (So tired of tears)
// So done with wishing she were still here
// Said I'm so sick of love songs, so sad and slow (Hey)
// Why can't I turn off the radio? (Why can't I turn off the radio?)
// And I'm so sick of love songs (So sick of love songs)
// So tired of tears (And I'm so sick, so sick of love song)
// So done with wishing you were still here
// (And I'm so sick, so sick of love songs)
// Said I'm so sick of love songs, so sad and slow (Hey)
// So why can't I turn off the radio?

// Why can't I turn off the radio?
// Why can't I turn off the radio?
//         </div></pre>`,
//         path: "songs/sosick.mp3"
//     },
//     {
//         name: "Hit 'Em Up",
//         artist: "2Pac",
//         lyrics:`<pre><div class="lyrics">
// I ain't got no motherfucking friends
// That's why I fucked your bitch, you fat motherfucker
// Take Money
// West Side, Bad Boy killers
// Take Money
// You know who the realest is
// We bring it too
// Take money, take money

// [2Pac:]
// First off, fuck your bitch and the clique you claim
// Westside when we ride, come equipped with game
// You claim to be a player, but I fucked your wife
// We bust on Bad Boys, niggas fucked for life
// Plus Puffy trying to see me, weak hearts I rip
// Biggie Smalls and Junior M.A.F.I.A. some mark-ass bitches
// We keep on coming while we running for your jewels
// Steady gunning, keep on busting at them fools
// You know the rules
// Lil' Caesar go ask your homie how I'll leave you
// Cut your young ass up, leave you in pieces, now be deceased
// Little Kim, don't fuck around with real G's
// Quick to snatch your ugly ass off the streets
// So fuck peace! I'll let them niggas know it's on for life
// Don't let the Westside ride the night haha
// Bad Boy murdered on wax and killed
// Fuck with me and get your caps peeled
// You know

// [2Pac:]
// See, grab your Glocks when you see 2Pac
// Call the cops when you see 2Pac, oh
// Who shot me, but your punks didn't finish
// Now you about to feel the wrath of a menace
// Nigga, I hit 'em up

// [2Pac:]
// Check this out, you motherfuckers know what time it is
// I don't know why I'm even on this track
// Y'all niggas ain't even on my level
// I'm going to let my little homies ride on you bitch-made ass Bad Boy bitches
// Take money

// [Hussein Fatal:]
// Get out the way, yo, get out the way, yo
// Biggie Smalls just got dropped
// Little Moo' pass the MAC and let me hit him in his back
// Frank White needs to get spanked right for setting traps
// Little accident-murderer, and I ain't never heard of ya
// Poisonous gats attack when I'm serving ya
// Spank you, shank your whole style when I gank
// Guard your rank cause I'ma slam your ass in the paint
// Puffy weaker than the fuckin' block I'm running through, nigga
// And I'm smoking Junior M.A.F.I.A. in front of you, nigga
// With the ready-power
// Tucked in my Guess under my Eddie Bauer
// Your clout petty/sour, I push packages every hour
// I hit 'em up

// [2Pac:]
// Grab your Glocks when you see 2Pac
// Call the cops when you see 2Pac, oh
// Who shot me, but your punks didn't finish
// Now you about to feel the wrath of a menace
// Nigga, I hit 'em up

// [2Pac:]
// Peep how we do it, keep it real as penitentiary steel
// This ain't no freestyle battle
// All you niggas getting killed with your mouths open
// Trying to come up off of me, you in the clouds hoping
// Smoking dope, it's like a sherm high
// Niggas think they learned to fly
// But they burn, motherfucker, you deserve to die
// Talking about you getting money, but it's funny to me
// All you niggas living bummy – why you fucking with me?
// I'm a self-made millionaire
// Thug livin', out of prison, pistols in the air haha
// Biggie, remember when I used to let you sleep on the couch
// And beg a bitch to let you sleep in the house?
// Now it's all about Versace, you copied my style
// Five shots couldn't drop me, I took it and smiled
// Now I'm back to set the record straight
// With my AK, I'm still the thug that you love to hate
// Motherfucker, I'll hit 'em up

// [Kadafi:]
// I'm from N-E-W Jers' where plenty of murders occurs
// No points or commas, we bring drama to all you herbs
// Now go check the scenario: Lil' Cease
// I'll bring you fake G's to your knees
// Copping pleas in de Janeiro
// Little Kim, is you coked up or doped up?
// Get your little Junior Whopper click smoked up
// What the fuck, is you stupid?
// I take money, crash and mash through Brooklyn
// With my click looting, shooting and polluting your block
// With a 15-shot cocked Glock to your knot
// Outlaw Mafia clique moving up another notch
// And your Pop stars popped and get mopped and dropped
// And all your fake ass east coast props
// Brainstormed and locked

// [E.D.I. Mean:]
// Jui-cer
// You's a beat biter, a Pac style taker
// I'll tell you to your face you ain't shit but a faker
// Softer than Alize with a chaser
// About to get murdered for the paper
// E.D.I. Mean approach the scene of the caper
// Like a loc with Little Ceas' in a choke
// Gun totin' smoke. We ain't no motherfucking joke
// Thug Life, niggas better be known
// Be approaching in the wide open, gun smoking
// No need for hoping, it's a battle lost
// I got 'em crossed as soon as the funk is bopping off
// Nigga, I hit 'em up!

// [2Pac:]
// Now you tell me who won
// I see them, they run haha
// They don't wanna see us
// Take money
// Whole Junior M.A.F.I.A. clique dressing up trying to be us
// Take money
// How the fuck they gonna be the mob when we always on our job? We millionaires
// Killing ain't fair, but somebody got to do it
// Oh yeah, Mobb Deep: you wanna fuck with us?
// You little young-ass motherfuckers
// Don't one of you niggas got sickle-cell or something?
// You're fucking with me, nigga
// You fuck around and catch a seizure or a heart attack
// You better back the fuck up
// Before you get smacked the fuck up
// This is how we do it on our side
// Any of you niggas from New York that want to bring it:
// Bring it!
// But we ain't singing, we bringing drama
// Fuck you and your motherfucking mama
// We gon' kill all you motherfuckers
// Now when I came out, I told you it was just about Biggie
// Then everybody had to open their mouth with a mother fucking opinion
// Well, this is how we gonna do this:
// Fuck Mobb Deep, fuck Biggie, fuck Bad Boy as a staff, record label and as a motherfucking crew!
// And if you want to be down with Bad Boy, then fuck you too!
// Chino XL: fuck you too!
// All you motherfuckers, fuck you too!
// (Take money, take money)
// All of y'all motherfuckers, fuck you; die slow, motherfucker
// My .44 make sure all y'all kids don't grow!
// You motherfuckers can't be us or see us
// We motherfuckin' Thug Life-riders, Westside til we die!
// Out here in California, nigga, we warned ya
// We'll bomb on you motherfucker! We do our job!
// You think you mob? Nigga, we the motherfuckin' mob
// Ain't nothing but killers and the real niggas
// All you motherfuckers feel us
// Our shit goes triple and 4-quadruple
// Take money
// You niggas laugh cause our staff got guns under they motherfuckin' belts
// You know how it is, when we drop records they felt
// You niggas can't feel it, we the realest
// Fuck 'em, we Bad Boy-killers
// We killers, we killers, we killers

//         </div></pre>`,
//         path: "songs/hitemup.mp3"
//     },
//     ];
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
    {
        name: 'Die With A Smile',
        artist: "Bruno Mars",
        lyrics: `<pre><div class="lyrics">Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Oh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh
I'd wanna be next to you
        </div></pre>`,
        path: "songs/diewithasmile.mp3"
    },
    {
        name: 'APT.',
        artist: "Bruno Mars",
        lyrics: `<pre><div class="lyrics">채영이가 좋아하는 랜덤 게임, 랜덤 게임
Game start
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh
Kissy face, kissy face sent to your phone, but
I'm trying to kiss your lips for real (uh-huh, uh-huh)
Red hearts, red hearts, that's what I'm on, yeah
Come give me somethin' I can feel, oh-oh-oh
Don't you want me like I want you, baby?
Don't you need me like I need you now?
Sleep tomorrow, but tonight go crazy
All you gotta do is just meet me at the
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh
It's whatever, it's whatever, it's whatever you like (whoo)
Turn this 아파트 into a club (uh-huh, uh-huh)
I'm talking drink, dance, smoke, freak, party all night (come on)
건배, 건배, girl, what's up? Oh-oh-oh
Don't you want me like I want you, baby?
Don't you need me like I need you now?
Sleep tomorrow, but tonight go crazy
All you gotta do is just meet me at the
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh
Hey, so now you know the game
Are you ready? 'Cause I'm comin' to get you, get you, get you
Hold on, hold on, I'm on my way
Yeah, yeah, yeah, yeah, yeah, I'm on my way
Hold on, hold on, I'm on my way
Yeah, yeah, yeah, yeah, yeah, I'm on my way
Don't you want me like I want you, baby?
Don't you need me like I need you now?
Sleep tomorrow, but tonight go crazy
All you gotta do is just meet me at the
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh (just meet me at the)
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh (just meet me at the)
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh (just meet me at the)
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh
        </div></pre>`,
        path: "songs/apt.mp3"
    },
    {
        name: 'Locked Out Of Heaven',
        artist: "Bruno Mars",
        lyrics: `<pre><div class="lyrics">
        </div></pre>`,
        path: "songs/lockedoutofheaven.mp3"
    },
    {
        name: 'Just The Way You Are',
        artist: "Bruno Mars",
        lyrics: `<pre><div class="lyrics">[Intro: Bruno Mars & Mark Ronson]
(One, two, one, two, three)
Aw, yeah, yeah
Aw, yeah, yeah, yeah, yeah (Uh)
Aw, yeah, yeah
Aw, yeah, yeah, yeah, yeah (Uh)

[Verse 1]
Never had much faith in love or miracles (Uh)
Never wanna put my heart on the line (Uh)
But swimmin' in your water's somethin' spiritual (Uh)
I'm born again every time you spend the night, —ight (Uh)

[Pre-Chorus]
'Cause your sex takes me to paradise
Yeah, your sex takes me to paradise
And it shows
Yeah, yeah, yeah

[Chorus]
'Cause you make me feel like
I've been locked outta heaven
For too long
For too long
Yeah, you make me feel like
I've been locked outta heaven
For too long
For too long
See Bruno Mars Live
Get tickets as low as $500
You might also like
The Tortured Poets Department
Taylor Swift
But Daddy I Love Him
Taylor Swift
Family Matters
Drake
[Post-Chorus]
Aw, yeah, yeah, yeah, yeah (Uh)
Aw, yeah, yeah
Aw, yeah, yeah, yeah, yeah (Uh)

[Verse 2]
You bring me to my knees, you make me testify (Uh)
You can make a sinner change his ways (Uh)
Open up your gates 'cause I can't wait to see the light (Uh)
And right there is where I wanna stay, —ay (Uh)

[Pre-Chorus]
'Cause your sex takes me to paradise
Yeah, your sex takes me to paradise
And it shows
Yeah, yeah, yeah

[Chorus]
'Cause you make me feel like
I've been locked outta heaven
For too long
For too long
Yeah, you make me feel like
I've been locked outta heaven
For too long
For too long
[Bridge]
Oh, woah, woah, woah
Yeah, yeah, yeah
Can I just stay here?
Spend the rest of my days here?
Oh, woah, woah, woah
Yeah, yeah, yeah
Can I just stay here?
Spend the rest of my days here?

[Chorus]
'Cause you make me feel like
I've been locked outta heaven
For too long
For too long
Yeah, you make me feel like
I've been locked outta heaven
For too long
For too long

[Post-Chorus]
Aw, yeah, yeah, yeah, yeah (Uh)
Aw, yeah, yeah
Aw, yeah, yeah, yeah, yeah (Uh)
        </div></pre>`,
        path: "songs/justthewayyouare.mp3"
    },
    {
        name: `That's What I Like`,
        artist: "Bruno Mars",
        lyrics: `<pre><div class="lyrics">It's Gucci Mane and Bruno
That's one dynamic duo
A lot of women want me
But I'm in love with you though
Your ex is unimportant
That boy can't even afford it
I drive so many foreigns
Baby I should be deported
I got a condo in Manhattan
Baby girl, what's hatnin'?
You and your ass invited
So gon' and get to clappin'
So pop it for a player
Pop, pop it for me
Turn around and drop it for a player
Drop, drop it for me
I'll rent a beach house in Miami
Wake up with no jammies (Nope)
Lobster tail for dinner
Julio serve that scampi (Julio!)
You got it if you want it
Got, got it if you want it
Said you got it if you want it
Take my wallet if you want it now
Jump in the Cadillac, girl, let's put some miles on it
Anything you want, just to put a smile on it
You deserve it baby, you deserve it all
And I'm gonna give it to you
Gold jewelry shining so bright
Strawberry champagne on ice
Lucky for you, that's what I like, that's what I like
Lucky for you, that's what I like, that's what I like
Sex by the fire at night
Silk sheets and diamonds all white
Lucky for you, that's what I like, that's what I like
Lucky for you, that's what I like, that's what I like
I'm talkin' trips to Puerto Rico
Say the word and we go
You can be my freaka
Girl, I'll be a fleeko, mamacita
I will never make a promise that I can't keep
I promise that your smile ain't gon' never leave
Shopping sprees in Paris
Everything 24 karats
Take a look in that mirror
Now tell me who's the fairest
Is it you? (is it you?) Is it me? (is it me?)
Say it's us (say it's us) and I'll agree, baby
Jump in the Cadillac, girl, let's put some miles on it
Anything you want, just to put a smile on it
You deserve it baby, you deserve it all
And I'm gonna give it to you
Gold jewelry shining so bright
Strawberry champagne on ice
Lucky for you, that's what I like, that's what I like
Lucky for you, that's what I like, that's what I like
Sex by the fire at night
Silk sheets and diamonds all white
Lucky for you, that's what I like, that's what I like
Lucky for you, that's what I like, that's what I like
If you say you want a good time
Well here I am baby, here I am baby
Talk to me, talk to me, talk to me
Tell me what's on your mind (what's on your mind)
If you want it, girl come and get it
All this is here for you
Tell me baby, tell me, tell me baby
What you tryna do
Babe, I like the way you touch me
But love the way you fuck me
Girl, ain't no need for frontin'
'Cause you're my type of woman
Wanna fly you out the country
To show you how I'm stuntin' (ya)
'Cause you got what I'm wanting
And I got all this money (It's Gucci)
Gold jewelry shining so bright
Strawberry champagne on ice
Lucky for you, that's what I like, that's what I like
Lucky for you, that's what I like, that's what I like
Sex by the fire at night
Silk sheets and diamonds all white
Lucky for you, that's what I like, that's what I like
Lucky for you, that's what I like, that's what I like
        </div></pre>`,
        path: "songs/thatswhatilike.mp3"
    },
    {
        name: 'Grenade',
        artist: "Bruno Mars",
        lyrics: `<pre><div class="lyrics">Easy come, easy go
That's just how you live, oh
Take, take, take it all
But you never give
Should've known you was trouble
From the first kiss
Had your eyes wide open
Why were they open?

Gave you all I had
And you tossed it in the trash
You tossed it in the trash, you did
To give me all your love is all I ever asked
'Cause what you don't understand is...

I'd catch a grenade for you (yeah, yeah, yeah)
Throw my hand on a blade for you (yeah, yeah, yeah)
I'd jump in front of a train for you (yeah, yeah, yeah)
You know I'd do anything for you (yeah, yeah, yeah)
Oh, I would go through all this pain
Take a bullet straight through my brain
Yes, I would die for you, baby
But you won't do the same

No, no, no, no

Black, black, black and blue
Beat me 'til I'm numb
Tell the devil I said "Hey" when you get back to where you're from
Mad woman, bad woman
That's just what you are
Yeah, you'll smile in my face then rip the brakes out my car

Gave you all I had
And you tossed it in the trash
You tossed it in the trash, yes you did
To give me all your love is all I ever asked
'Cause what you don't understand is...

I'd catch a grenade for you (yeah, yeah, yeah)
Throw my hand on a blade for you (yeah, yeah, yeah)
I'd jump in front of a train for you (yeah, yeah, yeah)
You know I'd do anything for you (yeah, yeah, yeah)
Oh, I would go through all this pain
Take a bullet straight through my brain
Yes, I would die for you, baby
But you won't do the same

If my body was on fire
Oh, you'd watch me burn down in flames
You said you loved me, you're a liar
'Cause you never, ever, ever did, baby

But, darling, I'd still catch a grenade for you (yeah, yeah, yeah)
Throw my hand on a blade for you (yeah, yeah, yeah)
I'd jump in front of a train for you (yeah, yeah, yeah)
You know I'd do anything for you (yeah, yeah, yeah)
Oh, I would go through all this pain
Take a bullet straight through my brain
Yes, I would die for you, baby
But you won't do the same

No, you won't do the same
You wouldn't do the same
Oh, you'd never do the same
Oh, no no no, oh

        </div></pre>`,
        path: "songs/grenade.mp3"
    },
    {
        name: 'Runaway Baby',
        artist: "Bruno Mars",
        lyrics: `<pre><div class="lyrics">Well, looky here, looky here.
Ah, what do we have?
Another pretty thang ready for me to grab.
But little does she know
That I'm a wolf in sheep's clothing
'Cause at the end of the night
It is her I'll be holding.

I love you so, hey.
That's what you'll say (that's what you'll say).
You'll tell me, "Baby, baby, please don't go away (don't go away)."
But when I play (but when I play),
I never stay (I never stay).
To every girl that I meet, yeah, this is what I say,

"Run, run, run away, run away, baby,
Before I put my spell on you.
You better get, get, get away, get away, darling,
'Cause everything you heard is true.
Your poor little heart will end up alone
'Cause Lord knows I'm a rolling stone.
So, you better run, run, run away, run away, baby."

Well, let me think, let me think.
Ah, what should I do?
So many eager young bunnies
That I'd like to pursue.
Now even though they're eating out the palm of my hand,
There's only one carrot,
And they all gotta share it!

I love you so, hey.
That's what you'll say (that's what you'll say).
You'll tell me, "Baby, baby please don't go away (don't go away)."
But when I play (but when I play),
I never stay (I never stay).
To every girl that I meet, yeah, this is what I say,

"Run, run, run away, run away, baby,
Before I put my spell on you.
You better get, get, get away, get away, darling,
'Cause everything you heard is true.
Your poor little heart will end up alone
'Cause Lord knows I'm a rolling stone.
So, you better run, run, run away, run away, baby."

Uh, check it out

See, I ain't tryna hurt you, baby.
No, no, no, I just wanna work you, baby.
Yup.Yup
See, I ain't tryna hurt you, baby.
No, no, no, I just wanna work you, baby.

If you're scared you better run (you better run),
You better run (you better run),
You better run (you better run),
You better—, you better—, you better—

Run, run, run away, run away, baby,
Before I put my spell on you.
You better get, get, get away, get away, darling,
'Cause everything you heard is true.
Your poor little heart will end up alone
'Cause Lord knows I'm a rolling stone.
So you better run, run, run away, run away, baby.

        </div></pre>`,
        path: "songs/runawaybaby.mp3"
    },
    {
        name: 'The Lazy Song',
        artist: "Bruno Mars",
        lyrics: `<pre><div class="lyrics">Today, I don't feel like doing anything
I just wanna lay in my bed
Don't feel like picking up my phone
So leave a message at the tone
'Cause today, I swear, I'm not doing anything, uh

I'm gonna kick my feet up, then stare at the fan
Turn the TV on, throw my hand in my pants
Nobody's gon' tell me I can't, nah
I'll be lounging on the couch, just chillin' in my Snuggie
Click to MTV, so they can teach me how to dougie
'Cause in my castle, I'm the freaking man

Oh-oh, yes, I said it (Ooh-ooh)
I said it, I said it, 'cause I can (Ooh-ooh-ooh-ooh-ooh-ooh)

Today, I don't feel like doing anything
I just wanna lay in my bed
Don't feel like picking up my phone
So leave a message at the tone
'Cause today, I swear, I'm not doing anything
Nothing at all
Woo-hoo, woo-hoo, ooh
Nothing at all
Woo-hoo, woo-hoo, ooh

Tomorrow, I'll wake up, do some P90X
Meet a really nice girl, have some really nice sex
And she's gonna scream out, "This is great!" (Oh my God, this is great)
Yeah, I might mess around and get my college degree
I bet my old man will be so proud of me
But sorry, pops, you'll just have to wait

Oh-oh, yes I said it (Ooh-ooh)
I said it, I said it, 'cause I can (Ooh-ooh-ooh-ooh-ooh)

Today, I don't feel like doing anything
I just wanna lay in my bed
Don't feel like picking up my phone
So leave a message at the tone
'Cause today, I swear, I'm not doing anything

No, I ain't gonna comb my hair (Ooh-ooh-ooh)
'Cause I ain't going anywhere (Ooh-ooh-ooh)
No, no, no, no, no, no, no, no, no
I'll just strut in my birthday suit (Ooh-ooh-ooh)
And let everything hang loose (Ooh-ooh-ooh)
Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah

Oh, today, I don't feel like doing anything
I just wanna lay in my bed
Don't feel like picking up my phone
So leave a message at the tone
'Cause today, I swear, I'm not doing anything
Nothing at all
Woo-hoo, woo-hoo, ooh
Nothing at all
Woo-hoo, woo-hoo, ooh
Nothing at all
        </div></pre>`,
        path: "songs/lazysong.mp3"
    },
    {
        name: `Marry You`,
        artist: "Bruno Mars",
        lyrics: `<pre><div class="lyrics">It's a beautiful night
We're looking for something dumb to do
Hey, baby
I think I wanna marry you

Is it the look in your eyes
Or is it this dancing juice?
Who cares, baby?
I think I wanna marry you

Well I know this little chapel on the boulevard we can go oh oh oh
No one will know oh oh oh
Oh, come on, girl
Who cares if we're trashed? Got a pocket full of cash we can blow
Shots of Patrón
And it's on, girl

Don't say no, no, no, no-no
Just say yeah, yeah, yeah, yeah-yeah
And we'll go, go, go, go-go
If you're ready, like I'm ready

'Cause it's a beautiful night
We're looking for something dumb to do
Hey, baby
I think I wanna marry you

Is it the look in your eyes
Or is it this dancing juice?
Who cares, baby?
I think I wanna marry you

I'll go get a ring let the choir bells sing like "Ooh"
So what you wanna do?
Let's just run, girl

If we wake up and you wanna break up that's cool
No, I won't blame you
It was fun, girl

Don't say no, no, no, no-no
Just say yeah, yeah, yeah, yeah-yeah
And we'll go, go, go, go-go
If you're ready, like I'm ready

'Cause it's a beautiful night
We're looking for something dumb to do
Hey, baby
I think I wanna marry you

Is it the look in your eyes
Or is it this dancing juice?
Who cares, baby
I think I wanna marry you

Just say "I do."
Tell me right now, baby
Tell me right now, baby, baby
Just say "I do."
Tell me right now, baby
Tell me right now, baby, baby

Oh, it's a beautiful night
We're looking for something dumb to do
Hey, baby
I think I wanna marry you

Is it the look in your eyes
Or is it this dancing juice?
Who cares, baby?
I think I wanna marry you

        </div></pre>`,
        path: "songs/marryyou.mp3"
    },
    {
        name: `Say It Ain't So`,
        artist: "Weezer",
        lyrics: `<pre><div class="lyrics">Oh, yeah
Alright

Somebody's Heine is crowding my icebox
Somebody's cold one is giving me chills
Guess I'll just close my eyes

Oh, yeah
Alright
Feels good
Inside

Flip on the telly, wrestle with Jimmy
Somethin' is bubblin' behind my back
The bottle is ready to blow

Say it ain't so
Your drug is a heartbreaker
Say it ain't so
My love is a life taker

I can't confront you, I never could do
That which might hurt you, so try and be cool
When I say, "this way is a water slide away from me
That takes you further every day," so be cool

Say it ain't so
Your drug is a heartbreaker
Say it ain't so
My love is a life taker

Dear daddy, I write you, in spite of years of silence
You've cleaned up, found Jesus, things are good, or so I hear
This bottle of Stephen's awakens ancient feelings
Like father, stepfather, the son is drowning in the flood
Yeah, yeah-yeah, yeah-yeah

Say it ain't so
Your drug is a heartbreaker
Say it ain't so
My love is a life taker
        </div></pre>`,
        path: "songs/sayitaintso.mp3"
    },
    {
        name: 'Undone - The Sweater Song',
        artist: "Weezer",
        lyrics: `<pre><div class="lyrics">Hey brah, how we doin' man?
Alright
It's been a while man, life's so rad! This band's my favorite man, don't ya love 'em?
Yeah
Aw man, you want a beer?
Alright
Aw man, hell brah, this is the best man. I'm so glad we're all back together and stuff. This is great, man
Yeah
Hey, did you know about the party after the show?
Yeah
Aw man, it's gonna be the best, I'm so stoked! Take it easy, brah!

I'm me, me be, goddamn, I am
I can sing and hear me, know me

If you want to destroy my sweater
Hold this thread as I walk away

Hey, what's up?
Not much
Did you hear about the party?
Yeah
Um, I think I'm gonna go but, um, my friends don't really wanna go. Could I get a ride?

Oh no, it go, it gone, bye-bye (Bye)
Who I, I think, I sink, and I die

If you want to destroy my sweater
Hold this thread as I walk away (As I walk away!)
Watch me unravel I'll soon be naked
Lying on the floor, lying on the floor, I've come undone

If you want to destroy my sweater
Hold this thread as I walk away (As I walk away!)
Watch me unravel I'll soon be naked
Lying on the floor, lying on the floor, I've come undone

(I don't want to destroy your tank top)
If you want to destroy my sweater
(Let's be friends and just walk away)
Hold this thread as I walk away
(Good to see you lying there in your Superman skivvies)
Watch me unravel I'll soon be naked
(Lying on the floor, lying on the floor, I've come undone!)
Lying on the floor, lying on the floor, I've come undone!
        </div></pre>`,
        path: "songs/undone.mp3"
    },
    {
        name: 'Island In The Sun',
        artist: "Weezer",
        lyrics: `<pre><div class="lyrics">Hip hip
Hip hip
Hip hip
Hip hip

When you're on a holiday
You can't find the words to say
All the things that come to you
And I wanna feel it too

On an island in the sun
We'll be playing and having fun
And it makes me feel so fine
I can't control my brain

Hip hip
Hip hip

When you're on a golden sea
You don't need no memory
Just a place to call your own
As we drift into the zone

On an island in the sun
We'll be playing and having fun
And it makes me feel so fine
I can't control my brain

We'll run away together
We'll spend some time forever
We'll never feel bad anymore

Hip hip
Hip hip
Hip hip

On an island in the sun
We'll be playing and having fun
And it makes me feel so fine
I can't control my brain

We'll run away together
We'll spend some time forever
We'll never feel bad anymore

Hip hip
Hip hip (We'll never feel bad anymore)
Hip hip (No, no)
Hip hip
Hip hip (We'll never feel bad anymore)
Hip hip (No, no)
Hip hip (No, no)
Hip hip
        </div></pre>`,
        path: "songs/islandinthesun.mp3"
    },
    {
        name: 'Beverly Hills',
        artist: "Weezer",
        lyrics: `<pre><div class="lyrics">Where I come from isn't all that great
My automobile is a piece of crap
My fashion sense is a little whack
And my friends are just as screwed as me
I didn't go to boarding schools
Preppy girls never looked at me
Why should they? I ain't nobody
Got nothing in my pocket

Beverly Hills, that's where I want to be
(Gimme gimme, gimme gimme)
Livin' in Beverly Hills
Beverly Hills, rollin' like a celebrity
(Gimme gimme, gimme gimme)
Livin' in Beverly Hills

Look at all those movie stars
They're all so beautiful and clean
When the housemaids scrub the floors
They get the spaces in between
I wanna live a life like that
I wanna be just like a king
Take my picture by the pool
Cause I'm the next big thing

Beverly Hills, that's where I want to be
(Gimme gimme, gimme gimme)
Livin' in Beverly Hills
Beverly Hills, rollin' like a celebrity
(Gimme gimme, gimme gimme)
Livin' in Beverly Hills

The truth is
I don't stand a chance
It's something that you're born into
And I just don't belong

No I don't, I'm just a no class, beat down fool
And I will always be that way
I might as well enjoy my life
And watch the stars play

Beverly Hills, that's where I want to be
(Gimme gimme, gimme gimme)
Livin' in Beverly Hills
Beverly Hills, rollin' like a celebrity
(Gimme gimme, gimme gimme)
Livin' in Beverly Hills

Beverly Hills
Beverly Hills
Beverly Hills
Beverly Hills, livin' in Beverly Hills
        </div></pre>`,
        path: "songs/beverlyhills.mp3"
    },
    {
        name: 'My Name Is Jonas',
        artist: "Weezer",
        lyrics: `<pre><div class="lyrics">My name is Jonas, I'm carryin' the wheel
Thanks for all you've shown us, but this is how we feel
Come sit next to me, pour yourself some tea
Just like Grandma made when we couldn't find sleep
Things were better then, once but never again
We've all left the den, let me tell you about it

The choo-choo train left right on time
A ticket cost only your mind
The driver said, "Hey man, we go all the way"
Of course we were willing to pay

My name is Wepeel, got a box full of your toys
They're fresh out of batteries, but they're still making noise, making noise
Tell me what to do now the tank is dry
Now this wheel is flat and you know what else?
Guess what I received in the mail today
Words of deep concern from my little brother

The building's not goin' as he planned
The foreman has injured his hand
The dozer will not clear a path
The driver swears he learned his math

The workers are going home, the workers are going home
The workers are going home, the workers are going home, yeah!

The workers are going home, the workers are going home
The workers are going home, yeah, yeah, yeah!

My name is Jonas

        </div></pre>`,
        path: "songs/mynameisjonas.mp3"
    },
    {
        name: 'No One Else',
        artist: "Weezer",
        lyrics: `<pre><div class="lyrics">My girl's got a big mouth
With which she blabbers a lot
She laughs at most everything
Whether it's funny or not
And if you see her
Tell her it's over now

I want a girl who will laugh for no one else
When I'm away, she puts her makeup on the shelf
When I'm away, she never leaves the house
I want a girl who laughs for no one else

My girl's got eyeballs
In the back of her head
She looks around and around
You know, it makes me sad to see her like that

Please don't believe her, she says that for anyone
And if you see her, tell her it's a hey, hey, hey, hey!

I want a girl who will laugh for no one else
When I'm away, she puts her makeup on the shelf
When I'm away, she never leaves the house
I want a girl who laughs for no one else

And if you see her, tell her it's over now!

And if you see her, tell her it's over now
And if you watch her go, watch her go, watch her, watch her, watch her, watch her!

I want a girl who will laugh for no one else
When I'm away, she puts her makeup on the shelf
When I'm away, she never leaves the house
I want a girl who laughs for no one else, no one else
Yeah!
        </div></pre>`,
        path: "songs/nooneelse.mp3"
    },
    {
        name: 'You Belong With Me',
        artist: "Taylor Swift",
        lyrics: `<pre><div class="lyrics">You're on the phone with your girlfriend
She's upset, she's going off about something that you said
'Cause she doesn't get your humor like I do

I'm in the room, it's a typical Tuesday night
I'm listening to the kind of music she doesn't like
And she'll never know your story like I do

But she wears short skirts
I wear T-shirts
She's cheer captain
And I'm on the bleachers
Dreaming about the day when you wake up and find
That what you're looking for has been here the whole time

If you could see
That I'm the one
Who understands you
Been here all along
So, why can't you see
You belong with me
You belong with me

Walk in the streets with you in your worn-out jeans
I can't help thinking this is how it ought to be
Laughing on a park bench thinking to myself
"Hey, isn't this easy?"

And you've got a smile
That could light up this whole town
I haven't seen it in a while
Since she brought you down

You say you're fine I know you better than that
Hey, what you doing with a girl like that?

She wears high heels
I wear sneakers
She's cheer captain
And I'm on the bleachers
Dreaming about the day when you wake up and find
That what you're looking for has been here the whole time

If you could see
That I'm the one
Who understands you
Been here all along
So, why can't you see
You belong with me

Standing by and waiting at your backdoor
All this time how could you not know, baby?
You belong with me
You belong with me

Oh, I remember you driving to my house
In the middle of the night
I'm the one who makes you laugh
When you know you're 'bout to cry
I know your favorite songs
And you tell me about your dreams
Think I know where you belong
Think I know it's with me

Can't you see
That I'm the one
Who understands you?
Been here all along
So, why can't you see
You belong with me

Standing by and waiting at your backdoor
All this time how could you not know, baby?
You belong with me
You belong with me

You belong with me

Have you ever thought just maybe
You belong with me?
You belong with me
        </div></pre>`,
        path: "songs/youbelongwithme.mp3"
    },
    {
        name: `Love Story`,
        artist: "Taylor Swift",
        lyrics: `<pre><div class="lyrics">We were both young when I first saw you
I close my eyes and the flashback starts:
I'm standing there
On a balcony in summer air

See the lights, see the party, the ball gowns
See you make your way through the crowd
And say, "Hello."
Little did I know

That you were Romeo, you were throwing pebbles
And my daddy said, "Stay away from Juliet."
And I was crying on the staircase
Begging you, "Please don't go."
And I said

"Romeo, take me somewhere we can be alone
I'll be waiting. All there's left to do is run
You'll be the prince and I'll be the princess
It's a love story. Baby, just say 'Yes'."

So, I sneak out to the garden to see you
We keep quiet 'cause we're dead if they knew
So, close your eyes
Escape this town for a little while
Oh, oh

'Cause you were Romeo. I was a scarlet letter
And my daddy said, "Stay away from Juliet."
But you were everything to me
I was begging you, "Please don't go!"
And I said

"Romeo, take me somewhere we can be alone
I'll be waiting. All there's left to do is run
You'll be the prince and I'll be the princess
It's a love story. Baby, just say 'Yes'

Romeo, save me. They're tryna tell me how to feel
This love is difficult but it's real
Don't be afraid. We'll make it out of this mess
It's a love story. Baby, just say 'Yes'."

Oh, oh, oh

I got tired of waiting
Wondering if you were ever coming around
My faith in you was fading
When I met you on the outskirts of town
And I said

"Romeo, save me. I've been feeling so alone
I keep waiting for you, but you never come
Is this in my head? I don't know what to think."
He knelt to the ground and pulled out a ring and said

"Marry me, Juliet. You'll never have to be alone
I love you, and that's all I really know
I talked to your dad. Go pick out a white dress
It's a love story. Baby, just say 'Yes'."

Oh, oh, oh, oh, oh, oh

'Cause we were both young when I first saw you
        </div></pre>`,
        path: "songs/LoveStory.mp3"
    },
    {
        name: 'Back To December',
        artist: "Taylor Swift",
        lyrics: `<pre><div class="lyrics">I'm so glad you made time to see me
How's life? Tell me how's your family?
I haven't seen them in a while

You've been good, busier than ever
We small-talk, work and the weather
Your guard is up and I know why

Because the last time you saw me is still burned in the back of your mind
You gave me roses and I left them there to die

So this is me swallowing my pride
Standing in front of you, saying, "I'm sorry for that night,"
And I go back to December all the time

It turns out freedom ain't nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around and make it all right
I go back to December all the time

These days I haven't been sleeping
Staying up, playing back myself leaving
When your birthday passed and I didn't call

And I think about summer, all the beautiful times
I watched you laughing from the passenger side
And realized I loved you in the fall

And then the cold came, the dark days when fear crept into my mind
You gave me all your love and all I gave you was "Goodbye"

So this is me swallowing my pride
Standing in front of you, saying, "I'm sorry for that night."
And I go back to December all the time

It turns out freedom ain't nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around and change my own mind
I go back to December all the time

I miss your tanned skin, your sweet smile
So good to me, so right
And how you held me in your arms that September night:
The first time you ever saw me cry

Maybe this is wishful thinking
Probably mindless dreaming
But if we loved again, I swear I'd love you right

I'd go back in time and change it but I can't
So if the chain is on your door I understand

But this is me swallowing my pride
Standing in front of you, saying, "I'm sorry for that night."
And I go back to December

It turns out freedom ain't nothing but missing you
Wishing I'd realized what I had when you were mine
I'd go back to December, turn around and make it all right
I'd go back to December, turn around and change my own mind

I go back to December all the time
All the time
        </div></pre>`,
        path: "songs/backtodecember.mp3"
    },
    {
        name: 'Cardigan',
        artist: "Taylor Swift",
        lyrics: `<pre><div class="lyrics">Vintage tee, brand new phone
High heels on cobblestones
When you are young, they assume you know nothing
Sequin smile, black lipstick
Sensual politics
When you are young, they assume you know nothing

But I knew you
Dancing in your Levi's
Drunk under a streetlight, I
I knew you
Hand under my sweatshirt
Baby, kiss it better, I

And when I felt like I was an old cardigan under someone's bed
You put me on and said I was your favorite
A friend to all is a friend to none
Chase two girls, lose the one
When you are young, they assume you know nothing

But I knew you
Playing hide-and-seek and
Giving me your weekends
I, I knew you
Your heartbeat on the High Line
Once in twenty lifetimes, I

And when I felt like I was an old cardigan under someone's bed
You put me on and said I was your favorite

To kiss in cars and downtown bars
Was all we needed
You drew stars around my scars
But now I'm bleeding

'Cause I knew you
Stepping on the last train
Marked me like a bloodstain, I
I knew you
Tried to change the ending
Peter losing Wendy
I, I knew you
Leaving like a father
Running like water, I
And when you are young, they assume you know nothing

But I knew you'd linger like a tattoo kiss
I knew you'd haunt all of my what-ifs
The smell of smoke would hang around this long
'Cause I knew everything when I was young
I knew I'd curse you for the longest time
Chasing shadows in the grocery line
I knew you'd miss me once the thrill expired
And you'd be standing in my front porch light
And I knew you'd come back to me
You'd come back to me
And you'd come back to me
And you'd come back

And when I felt like I was an old cardigan under someone's bed
You put me on and said I was your favorite
        </div></pre>`,
        path: "songs/cardigan.mp3"
    },
    {
        name: 'Enchanted',
        artist: "Taylor Swift",
        lyrics: `<pre><div class="lyrics">There I was again tonight
Forcing laughter, faking smiles
Same old tired lonely place

Walls of insincerity
Shifting eyes and vacancy
Vanished when I saw your face

All I can say is it was enchanting to meet you

Your eyes whispered, "Have we met?"
Across the room your silhouette
Starts to make its way to me
The playful conversation starts
Counter all your quick remarks
Like passing notes in secrecy

And it was enchanting to meet you
All I can say is I was enchanted to meet you

This night is sparkling, don't you let it go
I'm wonderstruck, blushing all the way home
I'll spend forever wondering if you knew
I was enchanted to meet you

The lingering question kept me up
2 AM, who do you love?
I wonder 'til I'm wide awake
And now I'm pacing back and forth
Wishing you were at my door
I'd open up and you would say, "Hey
It was enchanting to meet you
All I know is I was enchanted to meet you."

This night is sparkling, don't you let it go
I'm wonderstruck, blushing all the way home
I'll spend forever wondering if you knew
This night is flawless, don't you let it go
I'm wonderstruck, dancing around all alone
I'll spend forever wondering if you knew
I was enchanted to meet you

This is me praying that
This was the very first page
Not where the storyline ends
My thoughts will echo your name
Until I see you again
These are the words I held back
As I was leaving too soon
I was enchanted to meet you

Please don't be in love with someone else
Please don't have somebody waiting on you
Please don't be in love with someone else
Please don't have somebody waiting on you

This night is sparkling, don't you let it go
I'm wonderstruck, blushing all the way home
I'll spend forever wondering if you knew
This night is flawless, don't you let it go
(Please don't be in love with someone else)
I'm wonderstruck, dancing around all alone
(Please don't have somebody waiting on you)
I'll spend forever wondering if you knew
(Please don't be in love with someone else)
I was enchanted to meet you

Please don't be in love with someone else
Please don't have somebody waiting on you
        </div></pre>`,
        path: "songs/enchanted.mp3"
    },
    {
        name: 'Lover',
        artist: "Taylor Swift",
        lyrics: `<pre><div class="lyrics">We could leave the Christmas lights up 'til January
This is our place, we make the rules
And there's a dazzling haze, a mysterious way about you, dear
Have I known you twenty seconds or twenty years?

Can I go where you go?
Can we always be this close forever and ever?
And ah, take me out and take me home
You're my, my, my, my
Lover

We could let our friends crash in the living room
This is our place, we make the call
And I'm highly suspicious that everyone who sees you wants you
I've loved you three summers now, honey, but I want 'em all

Can I go where you go?
Can we always be this close forever and ever?
And ah, take me out and take me home (Forever and ever)
You're my, my, my, my
Lover

Ladies and gentlemen, will you please stand?
With every guitar string scar on my hand
I take this magnetic force of a man to be my
Lover
My heart's been borrowed and yours has been blue
All's well that ends well to end up with you
Swear to be over-dramatic and true to my
Lover

And you'll save all your dirtiest jokes for me
And at every table, I'll save you a seat
Lover

Can I go where you go?
Can we always be this close forever and ever?
And ah, take me out and take me home (Forever and ever)
You're my, my, my, my
Oh, you're my, my, my, my
Darling, you're my, my, my, my
Lover
        </div></pre>`,
        path: "songs/lover.mp3"
    },
    {
        name: `Cruel Summer`,
        artist: "Taylor Swift",
        lyrics: `<pre><div class="lyrics">(Yeah, yeah, yeah, yeah)

Fever dream high in the quiet of the night
You know that I caught it (Oh yeah, you're right, I want it)
Bad, bad boy, shiny toy with a price
You know that I bought it (Oh yeah, you're right, I want it)

Killing me slow, out the window
I'm always waiting for you to be waiting below
Devils roll the dice, angels roll their eyes
What doesn't kill me makes me want you more

And it's new, the shape of your body
It's blue, the feeling I've got
And it's ooh, whoa oh
It's a cruel summer
It's cool, that's what I tell 'em
No rules in breakable heaven
But ooh, whoa oh
It's a cruel summer
With you

Hang your head low in the glow of the vending machine
I'm not dying (Oh yeah, you're right, I want it)
We say that we'll just screw it up in these trying times
We're not trying (Oh yeah, you're right, I want it)

So cut the headlights, summer's a knife
I'm always waiting for you just to cut to the bone
Devils roll the dice, angels roll their eyes
And if I bleed, you'll be the last to know

Oh, it's new, the shape of your body
It's blue, the feeling I've got
And it's ooh, whoa oh
It's a cruel summer
It's cool, that's what I tell 'em
No rules in breakable heaven
But ooh, whoa oh
It's a cruel summer
With you

I'm drunk in the back of the car
And I cried like a baby coming home from the bar (Oh)
Said, "I'm fine," but it wasn't true
I don't wanna keep secrets just to keep you
And I snuck in through the garden gate
Every night that summer just to seal my fate (Oh)
And I scream, "For whatever it's worth
I love you, ain't that the worst thing you ever heard?"
He looks up, grinning like a devil

It's new, the shape of your body
It's blue, the feeling I've got
And it's ooh, whoa oh
It's a cruel summer
It's cool, that's what I tell 'em
No rules in breakable heaven
But ooh, whoa oh
It's a cruel summer
With you

I'm drunk in the back of the car
And I cried like a baby coming home from the bar (Oh)
Said, "I'm fine," but it wasn't true
I don't wanna keep secrets just to keep you
And I snuck in through the garden gate
Every night that summer just to seal my fate (Oh)
And I scream, "For whatever it's worth
I love you, ain't that the worst thing you ever heard?"
(Yeah, yeah, yeah, yeah)
        </div></pre>`,
        path: "songs/cruelsummer.mp3"
    },
    {
        name: 'The Archer',
        artist: "Taylor Swift",
        lyrics: `<pre><div class="lyrics">Combat
I'm ready for combat
I say I don't want that
But what if I do?

'Cause cruelty
Wins in the movies
I've got a hundred thrown-out speeches
I almost said to you

Easy they come
Easy they go
I jump from the train
I ride off alone
I never grew up
It's getting so old
Help me hold on to you

I've been the archer
I've been the prey
Who could ever leave me darling...
But who could stay?

Dark side
I search for your dark side
But what if I'm alright
Right, right, right here?

And I cut off
My nose just to spite my face
Then I hate my reflection
For years and years

I wake in the night
I pace like a ghost
The room is on fire
Invisible smoke
And all of my heroes
Die all alone
Help me hold on to you

I've been the archer
I've been the prey
Screaming, "Who could ever leave me darling...
But who could stay?"

(I see right through me, I see right through me)

'Cause they see right through me
They see right through me
They see right through
Can you see right through me?
They see right through
They see right through me
I see right through me
I see right through me

All the king's horses
All the king's men
Couldn't put me together again
'Cause all of my enemies
Started out friends
Help me hold on to you

I've been the archer
I've been the prey
Who could ever leave me darling...
But who could stay?

(I see right through me, I see right through me)

Who could stay?
Who could stay?
Who could stay?
You could stay
You could stay

Combat
I'm ready for combat
        </div></pre>`,
        path: "songs/thearcher.mp3"
    },
    {
        name: 'Paper Rings',
        artist: "Taylor Swift",
        lyrics: `<pre><div class="lyrics">The moon is high
Like your friends were the night that we first met
Went home and tried to stalk you on the internet
Now I've read all of the books beside your bed
The wine is cold
Like the shoulder that I gave you in the street
Cat and mouse for a month or two or three
Now I wake up in the night and watch you breathe

(Ayy)
Kiss me once 'cause you know I had a long night (Oh)
Kiss me twice 'cause it's gonna be alright (Uh)
Three times 'cause I waited my whole life (1, 2, 1, 2, 3, 4)

I like shiny things, but I'd marry you with paper rings
Uh huh, that's right
Darling, you're the one I want, and
I hate accidents except when we went from friends to this
Uh huh, that's right
Darling, you're the one I want
In paper rings in picture frames in dirty dreams
Oh, you're the one I want

In the winter, in the icy outdoor pool
When you jumped in first, I went in too
I'm with you even if it makes me blue
Which takes me back
To the color that we painted your brother's wall
Honey, without all the exes, fights, and flaws
We wouldn't be standing here so tall, so

(Ayy)
Kiss you once 'cause I know you had a long night (Oh)
Kiss you twice 'cause it's gonna be alright (Uh)
Three times 'cause you waited your whole life (1, 2, 1, 2, 3, 4)
Ah

I like shiny things, but I'd marry you with paper rings
Uh huh, that's right
Darling, you're the one I want, and
I hate accidents except when we went from friends to this
Uh huh, that's right
Darling, you're the one I want
In paper rings in picture frames in dirty dreams
Oh, you're the one I want

I want to drive away with you
I want your complications too
I want your dreary Mondays
Wrap your arms around me, baby boy
I want to drive away with you
I want your complications too
I want your dreary Mondays
Wrap your arms around me, baby boy
Uh huh

I like shiny things, but I'd marry you with paper rings
Uh huh, that's right, you're the one I want
I hate accidents except when we went from friends to this
Ah-ah, darling, you're the one I want
I like shiny things, but I'd marry you with paper rings
Uh huh, that's right
Darling, you're the one I want, and
I hate accidents except when we went from friends to this
Uh huh, that's right
Darling, you're the one I want
In paper rings in picture frames in all my dreams
You're the one I want
In paper rings in picture frames in all my dreams
Oh, you're the one I want

You're the one I want, one I want
You're the one I want, one I want
        </div></pre>`,
        path: "songs/paperrings.mp3"
    },
    {
        name: 'Afterglow',
        artist: "Taylor Swift",
        lyrics: `<pre><div class="lyrics">I blew things out of proportion, now you're blue
Put you in jail for something you didn't do
I pinned your hands behind your back, oh
Thought I had reason to attack, but no

Fighting with a true love is boxing with no gloves
Chemistry 'til it blows up, 'til there's no us
Why'd I have to break what I love so much?
It's on your face, and I'm to blame, I need to say

Hey, it's all me, in my head
I'm the one who burned us down
But it's not what I meant
Sorry that I hurt you
I don't wanna do, I don't wanna do this to you (Ooh)
I don't wanna lose, I don't wanna lose this with you (Ooh)
I need to say, hey, it's all me, just don't go
Meet me in the afterglow

It's so excruciating to see you low
Just wanna lift you up and not let you go
This ultraviolet morning light below
Tells me this love is worth the fight, oh

I lived like an island, punished you with silence
Went off like sirens, just crying
Why'd I have to break what I love so much?
It's on your face, don't walk away, I need to say

Hey, it's all me, in my head
I'm the one who burned us down
But it's not what I meant
I'm sorry that I hurt you
I don't wanna do, I don't wanna do this to you (Ooh)
I don't wanna lose, I don't wanna lose this with you (Ooh)
I need to say, hey, it's all me, just don't go
Meet me in the afterglow

Tell me that you're still mine
Tell me that we'll be just fine
Even when I lose my mind
I need to say
Tell me that it's not my fault
Tell me that I'm all you want
Even when I break your heart
I need to say

Hey, it's all me, in my head
I'm the one who burned us down
But it's not what I meant
Sorry that I hurt you
I don't wanna do, I don't wanna do this to you (Ooh)
I don't wanna lose, I don't wanna lose this with you (Ooh)
I need to say, hey, it's all me, just don't go
Meet me in the afterglow
        </div></pre>`,
        path: "songs/afterglow.mp3"
    },
    {
        name: 'Mad',
        artist: "Ne-Yo",
        lyrics: `<pre><div class="lyrics">Whoa whoa, no whoa
Whoa whoa, whoa oh

Mm, she's staring at me, I'm sitting wondering what she's thinking
Mm, nobody's talking, 'cause talking just turns into screaming, oh
And now as I'm yelling over her, she yelling over me
All that that means is neither of us are listening
And what's even worse, that we don't even remember why we're fighting

So both of us are mad for nothing (fighting for)
Nothing (crying for)
Nothing (whoa oh oh)
When we won't let it go for nothing (come back for)
Nothing, it should be nothing
To a love like what we got

Oh baby I know sometimes it's gonna rain
But baby can we make up now
'Cause I can't sleep through the pain (can't sleep through the pain)
Girl I don't wanna go to bed, mad at you
And I don't want you to go to bed, mad at me
No, I don't wanna go to bed, mad at you
And I don't want you to go to bed, mad at me
Oh no, no, no

Mm, and it gets me upset, girl, when you're constantly accusing, oh, hey
(Asking questions like you already know)
We fight in this war, baby when both of us are losing, oh, whoa
(This ain't the way that love is supposed to go)
(What happened to working it out?)
We fall into this place where you ain't backing down
And I ain't backing down
So what the hell do we do now?

It's all for nothing (fighting for)
Nothing (crying for)
Nothing (whoa oh oh)
We won't let it go for nothing (no, not for)
Nothing, it should be nothing
To a love like what we got

Oh baby I know sometimes it's gonna rain (hey, it's gonna rain, mm)
But baby can we make up now (oh oh oh)
'Cause I can't sleep through the pain (uh, can't sleep through the pain)
Girl I don't wanna go to bed, mad at you
And I don't want you to go to bed, mad at me
No, I don't wanna go to bed, mad at you
And I don't want you to go to bed, mad at me
Oh no, no, no

Oh baby this love ain't gonna be perfect, oh no (perfect, perfect, oh)
And just how good it's gonna be
We can fuss and we can fight
As long as everything's alright between us
Before we go to sleep
Baby we're gonna be, happy
Oh whoa whoa whoa whoa, oh whoa!

Baby I know sometimes it's gonna rain (soon it's gonna rain)
But baby can we make up now (can we make up now)
'Cause I can't sleep through the pain (can't sleep through the pain)
Girl I don't wanna go to bed, mad at you (oh)
And I don't want you to go to bed, mad at me (oh)
No, I don't wanna go to bed, mad at you
And I don't want you to go to bed, mad at me
Oh no, no, no

        </div></pre>`,
        path: "songs/mad.mp3"
    },
    {
        name: `Miss Independent`,
        artist: "Ne-Yo",
        lyrics: `<pre><div class="lyrics">You, yeah, you, you
You, yeah, you, you
You, yeah, you, you, you

Ooh, it's something about
Just something about the way she move
I can't figure it out
It's something about her
Said, ooh, it's something about
Kind of woman that want you but don't need you
Hey, I can't figure it out
It's something about her

'Cause she walk like a boss, talk like a boss
Manicured nails to set the pedicure off
She's fly effortlessly
And she move like a boss, do what a boss do
She got me thinking about getting involved
That's the kinda girl I need, oh

She got her own thing
That's why I love her
Miss independent
Won't you come and spend a little time?
She got her own thing
That's why I love her
Miss independent
Ooh, the way we'd shine
Miss independent

You, yeah, you, you
You, yeah, you, you
You, yeah, you, you, you

Uh, ooh, there's something about
Kind of woman that can do for herself
I look at her and it makes me proud
It's something about her
It's something, ooh, so sexy about
Kind of woman that don't even need my help
She said she got it, she got it, no doubt (she said she got it, she got it, no doubt)
It's something about her (there's something about her)

'Cause she work like a boss, play like a boss
Car and a crib, she 'bout to pay 'em both off
And her bills are paid on time, yeah
She made for a boss, only a boss
Anything less, she's telling them to get lost
That's the girl that's on my mind

She got her own thing
That's why I love her
Miss independent
Won't you come and spend a little time?
She got her own thing
That's why I love her
Miss independent
Ooh, the way we'd shine
Miss independent yeah

Mm, her favorite thing to say: "Don't worry, I got it"
Mm, and everything she got, best believe she bought it
Mm, she gon' steal my heart, ain't no doubt about it
Girl, you're everything I need
I said you're everything I need

You, yeah, you, you
You, yeah, you, you
You, you, you (Oh, whoa!)

She got her own thing
That's why I love her (That's why I love her, oh whoa)
Miss independent (Independent)
Won't you come and spend a little time?
She got her own thing (She got, she got)
That's why I love her (That's why I love that girl)
Miss independent (Oh, oh)
Ooh, the way we'd shine
Miss independent

Miss independent
That's why I love her
        </div></pre>`,
        path: "songs/missindependent.mp3"
    },
    {
        name: 'Closer',
        artist: "Ne-Yo",
        lyrics: `<pre><div class="lyrics">Closer
Closer
Closer
Closer

Turn the lights off in this place
And she shines just like a star
And I swear I know her face
I just don't know who you are
Turn the music up in here
I still hear her loud and clear
Like she's right there in my ear
Telling me that she wants to own me
To control me

Come closer
Come closer

And I just can't pull myself away
Under her spell I can't break
I just can't stop
I just can't stop
I just can't stop
I just can't stop
And I just can't bring myself no way
But I don't want to escape
I just can't stop
I just can't stop
I just can't stop
I just can't stop

I can feel her on my skin
I can taste her on my tongue
She's the sweetest taste of sin
The more I get the more I want
She wants to own me

Come closer
Come closer

And I just can't pull myself away
Under her spell I can't break
I just can't stop
I just can't stop
I just can't stop
I just can't stop
And I just can't bring myself no way
But I don't want to escape
I just can't stop
I just can't stop
I just can't stop
I just can't stop

Come closer
Come closer
Come closer
Come closer

I just can't stop, no no
I just can't stop, no no
I just can't stop, no no
I just can't stop, no no
No, no, no, no

And I just can't pull myself away
Under her spell I can't break
I just can't stop
I just can't stop
I just can't stop
I just can't stop
And I just can't bring myself no way
But I don't want to escape
I just can't stop
I just can't stop
I just can't stop
I just can't stop
And I just can't pull myself away
Under her spell I can't break
I just can't stop
I just can't stop
I just can't stop
I just can't stop
Come closer
        </div></pre>`,
        path: "songs/closer.mp3"
    },
    {
        name: 'Because Of You',
        artist: "Ne-Yo",
        lyrics: `<pre><div class="lyrics">Ooh-oh-oh, oh-oh, oh-oh
Oh-oh-oh-oh-oh, oh-oh-oh-oh-oh

Want to, but I can't help it, I love the way it feels
It's got me stuck between my fantasy and what is real
I need it when I want it, I want it when I don't
Tell myself I'll stop everyday, knowin' that I won't

I got a problem and I don't know what to do about it
Even if I did, I don't know if I would quit but I doubt it
I'm taken by the thought of it

And I know this much is true
Baby, you have become my addiction
I'm so strung out on you
I can barely move but I like it

And it's all because of you (All because of you)
And it's all because of you (All because of you)
And it's all because of you (All because of you)
And it's all because
Never get enough
She's the sweetest drug

Ooh-oh-oh
Think of it every second, I can't get nothin' done
Only concern is the next time I'm gon' get me some
Know I should stay away from, 'cause it's no good for me
I try and try, but my obsession won't let me leave

I got a problem and I don't know what to do about it
Oh, even if I did, I don't know if I would quit but I doubt it
I'm taken by the thought of it, hey

And I know this much is true
Baby, you have become my addiction
I'm so strung out on you (Strung out on you)
I can barely move but I like it (I like it)

And it's all because of you (Oh, all because of you)
And it's all because of you (All because of you)
And it's all because of you (All because of you)
And it's all because
Never get enough (Never get enough)
She's the sweetest drug

Ooh-oh-oh
Ain't no doubt (No doubt, hey), so strung out (Strung out)
Ain't no doubt (There's ain't no grain of doubt, oh), so strung out (Hey)
Over you, over you (You), over you (You)
Ooh-oh-oh
Because of you
And it's all because of you
Never get enough
She's the sweetest drug

And I know this much is true
Baby, you (Baby, you, you, you) have become my addiction (My addiction)
I'm so strung out on you
I can barely move but I like it (Oh I like it, yeah)

And it's all because of you (All because of you)
And it's all because of you (All because of you)
And it's all because of you (All because of you)
And it's all because
Never get enough (Oh never get enough)
She's the sweetest drug

She's the sweetest drug

        </div></pre>`,
        path: "songs/becauseofyou.mp3"
    },
    {
        name: 'Californication',
        artist: "Red Hot Chili Peppers",
        lyrics: `<pre><div class="lyrics">Psychic spies from China try to steal your mind's elation
And little girls from Sweden dream of silver-screen quotation
And if you want these kind of dreams, it's Californication

It's the edge of the world and all of Western civilization
The sun may rise in the East, at least it settled in a final location
It's understood that Hollywood sells Californication

Pay your surgeon very well to break the spell of aging
Celebrity skin: is this your chin or is that war you're waging?

First born unicorn
Hardcore soft porn

Dream of Californication
Dream of Californication
Dream of Californication
Dream of Californication

Marry me, girl, be my fairy to the world, be my very own constellation
A teenage bride with a baby inside getting high on information
And buy me a star on the boulevard, it's Californication

Space may be the final frontier but it's made in a Hollywood basement
And Cobain, can you hear the spheres singing songs off Station to Station?
And Alderaan's not far away, it's Californication

Born and raised by those who praise control of population
Well, everybody's been there, and I don't mean no vacation

First born unicorn
Hardcore soft porn

Dream of Californication
Dream of Californication
Dream of Californication
Dream of Californication

Destruction leads to a very rough road but it also breeds creation
And earthquakes are to a girl's guitar, they're just another good vibration
And tidal waves couldn't save the world from Californication

Pay your surgeon very well to break the spell of aging
Sicker than the rest, there is no test, but this is what you're craving

First born unicorn
Hardcore soft porn

Dream of Californication
Dream of Californication
Dream of Californication
Dream of Californication

        </div></pre>`,
        path: "songs/californication.mp3"
    },
    {
        name: 'Snow (Hey Oh)',
        artist: "Red Hot Chili Peppers",
        lyrics: `<pre><div class="lyrics">Come to decide that the things that I tried
Were in my life just to get high on
When I sit alone, come get a little known
But I need more than myself this time
Step from the road to the sea to the sky
And I do believe that we rely on
When I lay it on, come get to play it on
All my life to sacrifice

Hey, oh
Listen what I say, oh
I got your hey, oh
Now listen what I say, oh
(Oh)

When will I know that I really can't go
To the well once more time to decide on
When it's killing me, when will I really see
All that I need to look inside?
Come to believe that I better not leave
Before I get my chance to ride
When it's killing me, what do I really need
All that I need to look inside?

Hey, oh
Listen what I say, oh
Come back and hey, oh
Look at what I say, oh
(Oh)

The more I see, the less I know
The more I like to let it go
Hey oh, whoa-whoa

Deep beneath the cover of another perfect wonder
Where it's so white as snow
Privately divided by a world so undecided
And there's nowhere to go
In between the cover of another perfect wonder
And it's so white as snow
Running through the field where all my tracks will be concealed
And there's nowhere to go
Ho!

When to descend to amend for a friend
All the channels that have broken down
Now you bring it up, I'm gonna ring it up
Just to hear you sing it out
Step from the road to the sea to the sky
And I do believe what we rely on
When I lay it on, come get to play it on
All my life to sacrifice

Hey, oh
Listen what I say, oh
I got your hey, oh
Listen what I say, oh

The more I see, the less I know
The more I like to let it go
Hey oh, whoa-whoa

Deep beneath the cover of another perfect wonder
Where it's so white as snow
Privately divided by a world so undecided
And there's nowhere to go
In between the cover of another perfect wonder
Where it's so white as snow
Running through the field where all my tracks will be concealed
And there's nowhere to go

I said hey, hey yeah (Ooh)
Oh yeah, tell my love now (Ooh)
Hey, hey yeah (Ooh-ooh-ooh)
Oh yeah, tell my love now

Deep beneath the cover of another perfect wonder
Where it's so white as snow
Privately divided by a world so undecided
And there's nowhere to go
Deep beneath the cover of another perfect wonder
Where it's so white as snow
Running through the field where all my tracks will be concealed
And there's nowhere to go

I said hey, oh yeah (Ooh)
Oh yeah, tell my love now (Ooh)
Hey, hey yeah, oh yeah (Ooh-ooh-ooh)
Ooh-ooh
Ooh-ooh
        </div></pre>`,
        path: "songs/snow.mp3"
    },
    {
        name: 'Otherside',
        artist: "Red Hot Chili Peppers",
        lyrics: `<pre><div class="lyrics">How long, how long will I slide?
Well, separate my side
I don't, I don't believe it's bad
Slittin' my throat, it's all I ever

I heard your voice through a photograph
I thought it up and brought up the past
Once you know you can never go back
I gotta take it on the otherside
Well, centuries are what it meant to me
A cemetery where I marry the sea
The stranger things that never change my mind
I gotta take it on the otherside

Take it on the otherside
Take it on, take it on

How long, how long will I slide?
A-separate my side
I don't, I don't believe it's bad
A-slittin' my throat, it's all I ever

Pour my life into a paper cup
The ashtray's full and I'm spillin' my guts
She want to know am I still a slut?
I gotta take it on the otherside
A scarlet starlet and she's in my bed
A candidate for my soul mate bled
Mmm, push the trigger and I pull the thread
I gotta take it on the otherside

Take it on the otherside
Take it on, take it on

How long, how long will I slide?
Separate my side
I don't, I don't believe it's bad
A-slittin' my throat, it's all I ever

Turn me on, take me for a hard ride
Burn me out, leave me on the otherside
I yell and tell it that it's not my friend
I tear it down, I tear it down, and then it's born again

How long, how long will I slide?
Separate my side
I don't, I don't believe it's bad
A-slittin' my throat, it's all I ever had

(How long?)
I don't, I don't believe it's sad
A-slittin' my throat, it's all I ever
        </div></pre>`,
        path: "songs/otherside.mp3"
    },
    {
        name: 'Under The Bridge',
        artist: "Red Hot Chili Peppers",
        lyrics: `<pre><div class="lyrics">Sometimes I feel like I don't have a partner
Sometimes I feel like my only friend
Is the city I live in, The City of Angels
Lonely as I am together we cry

I drive on her streets 'cause she's my companion
I walk through her hills 'cause she knows who I am
She sees my good deeds and she kisses me windy
Well, I never worry, now that is a lie

I don't ever wanna feel like I did that day
But take me to the place I love, take me all the way
I don't ever wanna feel like I did that day
But take me to the place I love take me all the way

Yeah, yeah yeah

It's hard to believe that there's nobody out there
It's hard to believe that I'm all alone
At least I have her love
The city, she loves me
Lonely as I am together we cry

I don't ever wanna feel like I did that day
But take me to the place I love take me all the way
I don't ever wanna feel like I did that day
But take me to the place I love take me all the way

Yeah, yeah yeah
Oh, no, no, no, yeah yeah
Love me, I say, yeah yeah
One time

(Under the bridge downtown)
Is where I drew some blood
(Under the bridge downtown)
I could not get enough
(Under the bridge downtown)
Forgot about my love
(Under the bridge downtown)
I gave my life away, yeah
Yeah yeah
Oh, no, no no no, yeah yeah
Oh no, I said oh, yeah yeah
Here I stay
        </div></pre>`,
        path: "songs/underthebridge.mp3"
    },
    {
        name: 'Feuer Frei!',
        artist: "Rammstein",
        lyrics: `<pre><div class="lyrics">Getadelt wird, wer Schmerzen kennt
Vom Feuer, das die Haut verbrennt
Ich werf ein Licht in mein Gesicht
Ein heißer Schrei, Feuer frei!

Bäng bäng
Bäng bäng

Geadelt ist, wer Schmerzen kennt
Vom Feuer, das in Lust verbrennt
Ein Funkenstoß in ihren Schoß
Ein heißer Schrei, Feuer frei!

Bäng bäng
Bäng bäng
Feuer frei!
Bäng bäng
Bäng bäng
Feuer frei!

Gefährlich ist, wer Schmerzen kennt
Vom Feuer, das den Geist verbrennt (Bäng bäng)
Gefährlich das gebrannte Kind
Mit Feuer, das vom Leben trennt
Ein heißer Schrei (Bäng bäng), feuer frei!

Dein Glück
Ist nicht mein Glück
Ist mein Unglück
Dein Glück
Ist nicht mein Glück
Ist mein Unglück

Bäng bäng
Bäng bäng
Feuer frei!
Bäng bäng
Bäng bäng
Feuer frei!
Bäng bäng
Bäng bäng
Feuer frei!

Bäng bäng

[English translation:]

Blamed are those who know pain
From fire that burns the skin
I shine a light in my face
A hot scream, fire at will!

Bang, bang
Bang, bang

Knighted are those who know pain
From fire that burns the lust
A shock of sparks in your lap
A hot scream, fire at will!

Bang, bang
Bang, bang
Open fire!
Bang, bang
Bang, bang
Open fire!

Dangerous are those who know pain
From fire that burns the soul (Bang, bang)
Dangerous is the burnt child
With fire that separates life
A hot scream (Bang, bang), fire at will!

Your luck
Is not my luck
It's my bad luck
Your luck
Is not my luck
It's my bad luck

Bang, bang
Bang, bang
Fire at will!
Bang, bang
Bang, bang
Fire at will!
Bang, bang
Bang, bang
Fire at will

Bang, bang
        </div></pre>`,
        path: "songs/feuerfrei.mp3"
    },
    {
        name: 'Sonne',
        artist: "Rammstein",
        lyrics: `<pre><div class="lyrics">Eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, aus!

Alle warten auf das Licht
Fürchtet euch, fürchtet euch nicht
Die Sonne scheint mir aus den Augen
Sie wird heut Nacht nicht untergeh'n
Und die Welt zählt laut bis zehn

Eins, hier kommt die Sonne
Zwei, hier kommt die Sonne
Drei, sie ist der hellste Stern von allen
Vier, hier kommt die Sonne

Die Sonne scheint mir aus den Händen
Kann verbrennen, kann euch blenden
Wenn sie aus den Fäusten bricht
Legt sich heiß auf das Gesicht
Sie wird heut Nacht nicht untergeh'n
Und die Welt zählt laut bis zehn

Eins, hier kommt die Sonne
Zwei, hier kommt die Sonne
Drei, sie ist der hellste Stern von allen
Vier, hier kommt die Sonne
Fünf, hier kommt die Sonne
Sechs, hier kommt die Sonne
Sieben, sie ist der hellste Stern von allen
Acht, neun, hier kommt die Sonne

Die Sonne scheint mir aus den Händen
Kann verbrennen, kann dich blenden
Wenn sie aus den Fäusten bricht
Legt sich heiß auf dein Gesicht
Legt sich schmerzend auf die Brust
Das Gleichgewicht wird zum Verlust
Lässt dich hart zu Boden geh'n
Und die Welt zählt laut bis zehn

Eins, hier kommt die Sonne
Zwei, hier kommt die Sonne
Drei, sie ist der hellste Stern von allen
Vier, und wird nie vom Himmel fallen
Fünf, hier kommt die Sonne
Sechs, hier kommt die Sonne
Sieben, sie ist der hellste Stern von allen
Acht, neun, Hier kommt die Sonne

[English translation:]

One, two, three, four, five, six, seven, eight, nine, out

Everyone is waiting for the light
Be afraid, don't be afraid
The sun is shining out of my eyes
It will not set tonight
And the world counts loudly to ten

One, here comes the sun
Two, here comes the sun
Three, it is the brightest star of them all
Four, here comes the sun

The sun is shining out of my hands
It can burn, it can blind you all
When it breaks out of the fists
It lays down hotly on the face
It will not set tonight
And the world counts loudly to ten

One, here comes the sun
Two, here comes the sun
Three, it is the brightest star of them all
Four, here comes the sun
Five, here comes the sun
Six, here comes the sun
Seven, it is the brightest star of them all
Eight, nine, here comes the sun

The sun is shining out of my hands
It can burn, it can blind you
When it breaks out of the fists
It lays down hotly on your face
It lays down painfully on your chest
Balance is lost
It lets you go hard to the floor
And the world counts loudly to ten

One, here comes the sun
Two, here comes the sun
Three, it is the brightest star of them all
Four, and it will never fall from the sky
Five, here comes the sun
Six, here comes the sun
Seven, it is the brightest star of them all
Eight, nine, here comes the sun
        </div></pre>`,
        path: "songs/Sonne.mp3"
    },
    {
        name: 'Mein Hertz brennt',
        artist: "Rammstein",
        lyrics: `<pre><div class="lyrics">Nun, liebe Kinder, gebt fein Acht
Ich bin die Stimme aus dem Kissen
Ich hab' euch etwas mitgebracht
Hab' es aus meiner Brust gerissen
Mit diesem Herz hab' ich die Macht
Die Augenlider zu erpressen
Ich singe, bis der Tag erwacht
Ein heller Schein am Firmament

Mein Herz brennt!

Sie kommen zu euch in der Nacht
Dämonen, Geister, schwarze Feen
Sie kriechen aus dem Kellerschacht
Und werden unter euer Bettzeug sehen

Nun, liebe Kinder, gebt fein Acht
Ich bin die Stimme aus dem Kissen
Ich hab' euch etwas mitgebracht
Ein heller Schein am Firmament

Mein Herz brennt!
Mein Herz brennt!

Sie kommen zu euch in der Nacht
Und stehlen eure kleinen, heißen Tränen
Sie warten, bis der Mond erwacht
Und drücken sie in meine kalten Venen

Nun, liebe Kinder, gebt fein Acht
Ich bin die Stimme aus dem Kissen
Ich singe, bis der Tag erwacht
Ein heller Schein am Firmament

Mein Herz brennt!
Mein Herz brennt!
Mein Herz brennt!
Mein Herz brennt!

Mit diesem Herz hab' ich die Macht
Die Augenlider zu erpressen
Ich singe, bis der Tag erwacht
Ein heller Schein am Firmament

Mein Herz brennt!
Mein Herz brennt!
Mein Herz brennt! (Mein Herz)
Mein Herz brennt!

[English translation:]

Now, dear children, pay attention
I am the voice from the pillow
I brought you something
Have ripped it out of my chest
With this heart, I have the power
Blackmail the eyelids
I sing until the new day comes
A bright light in the heaven's sky

My heart burns

They come to you at night
Demons, ghosts and black elves
They crawl up from the cellar rows
And will take a look under your blanket

Little children listen now
I am the voice from the pillow
I brought something to you
A bright light in the heaven's sky

My heart burns
My heart burns

They come to you at night
And steal your small hot tears
They wait 'til the moon awakes
And push them in my cold veins

Little children listen now
I am the voice from the pillow
I sing 'til the day awakes
A bright light in the heaven's sky

My heart burns
My heart burns
My heart burns
My heart burns

With this heart I have the power
To blackmail the eyelids
I sing 'til the day wakes up
A bright light in the heaven's sky

My heart burns
My heart burns
My heart burns (My heart)
My heart burns

        </div></pre>`,
        path: "songs/MeinHertzbrennt.mp3"
    },
    {
        name: 'Mutter',
        artist: "Rammstein",
        lyrics: `<pre><div class="lyrics">Die Tränen greiser Kinderschar
Ich zieh' sie auf ein weißes Haar
Werf in die Luft die nasse Kette
Und wünsch mir, dass ich eine Mutter hätte
Keine Sonne die mir scheint
Keine Brust hat Milch geweint
In meiner Kehle steckt ein Schlauch
Hab keinen Nabel auf dem Bauch

Mutter, Mutter
Mutter, Mutter

Ich durfte keine Nippel lecken
Und keine Falte zum Verstecken
Niemand gab mir einen Namen
Gezeugt in Hast und ohne Samen
Der Mutter, die mich nie geboren
Hab ich heute Nacht geschworen
Ich werd' ihr eine Krankheit schenken
Und sie danach im Fluss versenken

Mutter, Mutter
Mutter, Mutter
Mutter, Mutter
Mutter, Mutter

In ihren Lungen wohnt ein Aal
Auf meiner Stirn ein Muttermal
Entferne es mit Messers Kuss
Auch wenn ich daran sterben muss

Mutter, Mutter
Mutter, Mutter!

In ihren Lungen wohnt ein Aal
Auf meiner Stirn ein Muttermal
Entferne es mit Messers Kuss
Auch wenn ich verbluten muss

Oh, gib mir Kraft
Mutter, Mutter
Oh, gib mir Kraft
Mutter, Mutter
Oh, gib mir Kraft
Mutter, Mutter
Oh, gib mir Kraft

[English translation:]

The tears of a crowd of very old children
I string them on a white hair
I throw the wet chain into the air
And wish that I had a mother
No sun shines for me
There was no breast that cried milk
There is a tube that sticks in my throat
I have no navel on my stomach

Mother, mother
Mother, mother

I was not allowed to lick any nipples
And there was no fold to hide in
No one gave me a name
Fathered in haste and without sperm
For the mother who never gave birth to me
I have sworn tonight
I will send her a sickness
And afterwards make her sink in the river

Mother, mother
Mother, mother
Mother, mother
Mother, mother

An eel lives in her lungs
On my forehead, a birthmark
Remove it with the kiss of a knife
Even if it causes me to die

Mother, mother
Mother, mother

An eel lives in her lungs
On my forehead, a birthmark
Remove it with the kiss of a knife
Even if it causes me to bleed to death

Oh give me strength
Mother, mother
Oh give me strength
Mother, mother
Oh give me strength
Mother, mother
Oh give me strength
        </div></pre>`,
        path: "songs/mutter.mp3"
    },
    {
        name: 'Ich Will',
        artist: "Rammstein",
        lyrics: `<pre><div class="lyrics">Ich will
Ich will
Ich will
Ich will
Ich will
Ich will
Ich will

(Ich will) Ich will, dass ihr mir vertraut
(Ich will) Ich will, dass ihr mir glaubt
(Ich will) Ich will eure Blicke spüren
(Ich will) jeden Herzschlag kontrollieren
(Ich will) Ich will eure Stimmen hören
(Ich will) Ich will die Ruhe stören
(Ich will) Ich will, dass ihr mich gut seht
(Ich will) Ich will, dass ihr mich versteht

(Ich will) Ich will eure Fantasie
(Ich will) Ich will eure Energie
(Ich will) Ich will eure Hände sehen
(Ich will) in Beifall untergehen

Seht ihr mich?
Versteht ihr mich?
Fühlt ihr mich?
Hört ihr mich?

Könnt ihr mich hören? (Wir hören dich)
Könnt ihr mich sehen? (Wir sehen dich)
Könnt ihr mich fühlen? (Wir fühlen dich)
Ich versteh’ euch nicht
Könnt ihr mich hören? (Wir hören dich)
Könnt ihr mich sehen? (Wir sehen dich)
Könnt ihr mich fühlen? (Wir fühlen dich)
Ich versteh’ euch nicht

Ich will
Ich will
Ich will
Ich will

Wir wollen, dass ihr uns vertraut
Wir wollen, dass ihr uns alles glaubt
Wir wollen eure Hände sehen
Wir wollen in Beifall untergehen, ja

Könnt ihr mich hören? (Wir hören dich)
Könnt ihr mich sehen? (Wir sehen dich)
Könnt ihr mich fühlen? (Wir fühlen dich)
Ich versteh’ euch nicht
Könnt ihr uns hören? (Wir hören euch)
Könnt ihr uns sehen? (Wir sehen euch)
Könnt ihr uns fühlen? (Wir fühlen euch)
Wir versteh’n euch nicht

Ich will
Ich will

        </div></pre>`,
        path: "songs/Ichwill.mp3"
    },
    {
        name: 'By The Way',
        artist: "Red Hot Chili Peppers",
        lyrics: `<pre><div class="lyrics">Standing in line to see the show tonight
And there's a light on, heavy glow
By the way, I tried to say
I'd be there waiting for
Dani, the girl, is singing songs to me
Beneath the marquee, overload

Steak knife, card shark
Con job, boot cut
Skin that flick, she's such a little DJ
To get there quick by street but not the freeway
Turn that trick to make a little leeway
Beat that nic, but not the way that we play
Dogtown, blood bath
Rib cage, soft tail

Standing in line to see the show tonight
And there's a light on, heavy glow
By the way, I tried to say
I'd be there waiting for

Black jack, dope dick
Pawn shop, quick pick
Kiss that dyke, I know you want to hold one
Not on strike but I'm about to bowl one
Bite that mic, I know you never stole one
Girls that like a story, so I told one
Song bird, main line
Cash back, hard top

Standing in line to see the show tonight
And there's a light on, heavy glow
By the way, I tried to say
I'd be there waiting for
Dani, the girl, is singing songs to me
Beneath the marquee, oversold
By the way, I tried to say
I'd be there waiting for

Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah, guess you never meant it
Ooh, ah

Standing in line to see the show tonight
And there's a light on, heavy glow
By the way, I tried to say
I'd be there waiting for
Dani, the girl, is singing songs to me
Beneath the marquee, oversold
By the way, I tried to say
I know you from before

Standing in line to see the show tonight
And there's a light on, heavy glow
By the way, I tried to say
I'd be there waiting for
        </div></pre>`,
        path: "songs/bytheway.mp3"
    },
    {
        name: `Can't Stop`,
        artist: "Red Hot Chili Peppers",
        lyrics: `<pre><div class="lyrics">
        </div></pre>`,
        path: "songs/cantstop.mp3"
    },
    {
        name: 'Dosed',
        artist: "Red Hot Chili Peppers",
        lyrics: `<pre><div class="lyrics">I got dosed by you and
Closer than most to you and
What am I supposed to do
Take it away, I never had it anyway
Take it away and everything will be okay
In you, a star is born and
You cut a perfect form and
Someone forever warm
Lay on, lay on, lay on, lay on
Lay on, lay on, lay on, lay on

Way upon the mountain where she died
All I ever wanted was your life
Deep inside the canyon, I can't hide
All I ever wanted was your life

Show love with no remorse and
Climb on to your seahorse and
This ride is right on course
This is the way I wanted it to be with you
This is the way I knew that it would be with you
Lay on, lay on, lay on, lay on
Lay on, lay on, lay on, lay on

Way upon the mountain where she died
All I ever wanted was your life
Deep inside the canyon, I can't hide
All I ever wanted was your life

I got dosed by you and
Closer than most to you and
What am I supposed to do
Take it away I never had it anyway
Take it away and everything will be okay

Way upon the mountain where she died
All I ever wanted was your life
Deep inside the canyon, I can't hide
All I ever wanted was your life
        </div></pre>`,
        path: "songs/Dosed.mp3"
    },
    {
        name: 'The Zephyr Song',
        artist: "Red Hot Chili Peppers",
        lyrics: `<pre><div class="lyrics">Can I get your hand to write on?
Just a piece of leg to bite on
What a night to fly my kite on
Do you want to flash a light on?
Take a look it's on display for you
Coming down, no, not today
Did you meet your fortune teller?
Get it off with no propeller
Do it up, it's on with Stella
What a way to finally smell her
Picking up, but not too strong for you
Take a piece and pass it on

Fly away on my zephyr
I feel it more than ever
And in this perfect weather
We'll find a place together
Fly on my wind

Rebel and a liberator
Find a way to be a skater
Rev it up to levitate her
Super friendly aviator
Take a look it's on display, for you
Coming down, no not today

Fly away on my zephyr
I feel it more than ever
And in this perfect weather
We'll find a place together

In the water where I center my emotion
All the world can pass me by
Fly away on my Zephyr
We'll find a place together

Wo-wo-wo-wo-wo-whoa, do you
Yea-yea-yea-yea-yea-yeah
Wo-wo-wo-wo-wo-whoa, want to
Yea-yea-yea-yea-yea-yeah

Fly away on my zephyr
I feel it more than ever
And in this perfect weather
We'll find a place together

In the water where I center my emotion
All the world can pass me by
Fly away on my Zephyr
We're going to live forever

Forever
        </div></pre>`,
        path: "songs/thezephyrsong.mp3"
    },
    {
        name: `Don't Forget Me`,
        artist: "Red Hot Chili Peppers",
        lyrics: `<pre><div class="lyrics">I'm an ocean in your bedroom
Make you feel warm, make you want to re-assume
Now we know it all for sure
I'm a dance hall dirty breakbeat
Make the snow fall up from underneath your feet

Not alone, I'll be there
Tell me when you want to go

I'm a meth lab, first rehab
Take it all off and step inside the running cab
There's a love that knows the way
I'm the rainbow in your jail cell
All the memories of everything you've ever smelled

Not alone, I'll be there
Tell me when you want to go
(Sideways fallin', more will be revealed, my friend)

(Sideways fallin', more will be revealed, my friend)
Don't forget me, I can't hide it
Come again get me excited

I'm an inbred and a pothead
Two legs that you spread inside the tool shed
Now we know it all for sure
I could show you to the free field
Overcome and more will always be revealed

Not alone, I'll be there
Tell me when you want to go
(Sideways fallin', more will be revealed, my friend)

(Sideways fallin', more will be revealed, my friend)
Don't forget me, I can't hide it
Come again make me excited
(Sideways fallin', more will be revealed, my friend)
Don't forget me, I can't hide it
There's a match, now let me light it

I'm the bloodstain on your shirt sleeve
Coming down and more are coming to believe
Now we know it all for sure
Make the hair stand up on your arm
Teach you how to dance inside the funny farm

Not alone, I'll be there
Tell me when you want to go
I'll be there, tell me when you want to go
Come on in and tell me when you want to go
More will be revealed, my friend

        </div></pre>`,
        path: "songs/dontforgetme.mp3"
    }

    ];

// let artist_songs = {
//     BrunoMars: [
//         {
//             songname: 'Die With A Smile',
//             songduration: '4:11'
//         },
//         {
//             songname: 'APT.',
//             songduration: '2:49'
//         },
//         {
//             songname: 'Locked Out Of Heaven',
//             songduration: '3:53'
//         },
//         {
//             songname: 'Just The Way You Are',
//             songduration: '3:40'
//         },
//         {
//             songname: `That's What I Like`,
//             songduration: '3:26'
//         }
//     ],

//     Weezer: [
//         {
//             songname: 'Buddy Holly',
//             songduration: '2:39'
//         },
//         {
//             songname: `Say It Ain't So`,
//             songduration: '4:18'
//         },
//         {
//             songname: 'Undone - The Sweater Song',
//             songduration: '5:05'
//         },
//         {
//             songname: 'Island In The Sun',
//             songduration: '3:20'
//         },
//         {
//             songname: 'Beverly Hills',
//             songduration: '3:20'
//         }
//     ],

//     TaylorShit: [
//         {
//             songname: 'You Belong With Me',
//             songduration: '3:51'
//         },
//         {
//             songname: `Love Story`,
//             songduration: '3:56'
//         },
//         {
//             songname: 'Back To December',
//             songduration: '4:53'
//         },
//         {
//             songname: 'Cardigan',
//             songduration: '3:59'
//         },
//         {
//             songname: 'Enchanted',
//             songduration: '5:52'
//         }
//     ],
//     NeYo: [
//         {
//             songname: 'Mad',
//             songduration: '4:14'
//         },
//         {
//             songname: `Miss Independent`,
//             songduration: '3:52'
//         },
//         {
//             songname: 'Closer',
//             songduration: '3:54'
//         },
//         {
//             songname: 'Because Of You',
//             songduration: '4:26'
//         },
//         {
//             songname: 'So Sick',
//             songduration: '3:27'
//         }
//     ],
//     RHCP: [
//         {
//             songname: 'Californication',
//             songduration: '5:29'
//         },
//         {
//             songname: `Can't Stop`,
//             songduration: '4:29'
//         },
//         {
//             songname: 'Snow (Hey Oh)',
//             songduration: '5:34'
//         },
//         {
//             songname: 'Otherside',
//             songduration: '4:15'
//         },
//         {
//             songname: 'Under The Bridge',
//             songduration: '4:24'
//         }
//     ]
// };

// let album_tracks = {
//     DooWopsHooligans: [
//         {
//             songname: 'Grenade',
//             songduration: '3:42'
//         },
//         {
//             songname: 'Just The Way You Are',
//             songduration: '3:40'
//         },
//         {
//             songname: 'Runaway Baby',
//             songduration: '2:28'
//         },
//         {
//             songname: 'The Lazy Song',
//             songduration: '3:09'
//         },
//         {
//             songname: `Marry You`,
//             songduration: '3:50'
//         }
//     ],

//     Weezer: [
//         {
//             songname: 'Buddy Holly',
//             songduration: '2:39'
//         },
//         {
//             songname: `Say It Ain't So`,
//             songduration: '4:18'
//         },
//         {
//             songname: 'Undone - The Sweater Song',
//             songduration: '5:05'
//         },
//         {
//             songname: 'My Name Is Jonas',
//             songduration: '3:24'
//         },
//         {
//             songname: 'No One Else',
//             songduration: '3:04'
//         }
//     ],

//     Lover: [
//         {
//             songname: 'Lover',
//             songduration: '3:41'
//         },
//         {
//             songname: `Cruel Summer`,
//             songduration: '2:58'
//         },
//         {
//             songname: 'The Archer',
//             songduration: '3:31'
//         },
//         {
//             songname: 'Paper Rings',
//             songduration: '3:42'
//         },
//         {
//             songname: 'Afterglow',
//             songduration: '3:43'
//         }
//     ],
//     Mutter: [
//         {
//             songname: 'Feuer Frei!',
//             songduration: '4:14'
//         },
//         {
//             songname: `Sonne`,
//             songduration: '4:34'
//         },
//         {
//             songname: 'Mein Hertz Brennt',
//             songduration: '4:39'
//         },
//         {
//             songname: 'Mutter',
//             songduration: '4:28'
//         },
//         {
//             songname: 'Ich Will',
//             songduration: '3:37'
//         }
//     ],
//     ByTheWay: [
//         {
//             songname: 'By The Way',
//             songduration: '3:36'
//         },
//         {
//             songname: `Can't Stop`,
//             songduration: '4:29'
//         },
//         {
//             songname: 'Dosed',
//             songduration: '5:11'
//         },
//         {
//             songname: 'The Zephyr Song',
//             songduration: '3:51'
//         },
//         {
//             songname: `Don't Forget Me`,
//             songduration: '4:37'
//         }
//     ]
// };

let singles = document.getElementsByClassName('singles')
Array.from(singles).forEach(b => {
    b.addEventListener('click',()=>{
        let track_name = b.getAttribute('alt')
        let track = track_list.findIndex(x => x.name == track_name)
        loadTrack(track)
        playTrack()
    })
}) 


document.addEventListener('DOMContentLoaded', function() {
    const tracks = document.getElementsByClassName('track');
    console.log(tracks);
    Array.from(tracks).forEach(trk => {
    trk.addEventListener('click', ()=> {
            let track_name = trk.children[1].innerText;
            let track = track_list.findIndex(x => x.name == track_name)
            loadTrack(track)
            playTrack()
        })  
    });
});


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

            
        



