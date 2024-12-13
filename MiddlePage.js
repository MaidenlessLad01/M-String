document.addEventListener('DOMContentLoaded',()=>{
    let artist = JSON.parse(localStorage.getItem('artist'))
    let album = JSON.parse(localStorage.getItem('album'))
    //console.log(artist)
    document.getElementById('image').setAttribute('src',artist.image)
    document.getElementById('name').textContent=artist.name

    let artist_songs = {
        BrunoMars: [
            {
                songname: 'Die With A Smile',
                songduration: '4:13'
            },
            {
                songname: 'APT.',
                songduration: '2:49'
            },
            {
                songname: 'Locked Out Of Heaven',
                songduration: '3:55'
            },
            {
                songname: 'Just The Way You Are',
                songduration: '3:40'
            },
            {
                songname: `That's What I Like`,
                songduration: '3:31'
            }
        ],
    
        Weezer: [
            {
                songname: 'Buddy Holly',
                songduration: '2:39'
            },
            {
                songname: `Say It Ain't So`,
                songduration: '4:19'
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
                songduration: '3:17[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]y=6y7777777777777777777777777777'
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


    let album_tracks = {
        DooWopsAndHooligans: [
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
    
        Weezers: [
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

    let sigma = album_tracks[album.name.replaceAll(" ","").replaceAll("-","")]
    for(let i in sigma)
        {
            track_list.innerHTML +=  `<div class="track">
            <span class="track-number">${parseInt(i)+ 1}</span>
            <span class="track-title">${sigma[i].songname}</span>
            <span class="track-duration">${sigma[i].songduration}</span>
    </div>`
        }
})

