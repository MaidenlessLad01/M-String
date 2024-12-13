document.addEventListener('DOMContentLoaded',()=>{
    let artist = JSON.parse(localStorage.getItem('artist'))
    //console.log(artist)
    document.getElementById('image').setAttribute('src',artist.image)
    document.getElementById('name').textContent=artist.name

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
    
        TaylorSwift: [
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
        RedHotChiliPeppers: [
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

    const track_list = document.getElementById('content-track')
    
    let skibidi = artist_songs[artist.name.replaceAll(" ","").replaceAll("-","") ]
    for(let i in skibidi)
    {
        track_list.innerHTML +=  `<div class="track">
        <span class="track-number">${parseInt(i)+ 1}</span>
        <span class="track-title">${skibidi[i].songname}</span>
        <span class="track-duration">${skibidi[i].songduration}</span>
</div>`
    }
})

