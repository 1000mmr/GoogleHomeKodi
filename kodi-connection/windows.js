/*

	This file is based on http://kodi.wiki/view/Opening_Windows_and_Dialogs

	With some additional handpicked values found in this kodi-rpc-request:
	{
		"jsonrpc":"2.0",
		"method":"JSONRPC.Introspect",
		"id":1
		"params": {
	    	"getmetadata": true,
	    	"filter":{
	        	"getreferences":true,
	        	"id":"GUI.Window",
	        	"type":"type"
	        }
	    }
	}

*/

const KodiWindows = [
    { 'Videos': [
        { '': 'library://video/' },
        { 'Libreria Film': 'videodb://movies/' },
        { 'Generi Film': 'videodb://movies/genres/' },
        { 'Film': 'videodb://movies/titles/' },
        { 'Movie Years': 'videodb://movies/years/' },
        { 'Movie Actors': 'videodb://movies/actors/' },
        { 'Movie Directors': 'videodb://movies/directors/' },
        { 'Movie Studios': 'videodb://movies/studios/' },
        { 'Movie Sets': 'videodb://movies/sets/' },
        { 'Movie Countries': 'videodb://movies/countries/ ' },
        { 'Movie Tags': 'videodb://movies/tags/' },
        { 'Film Aggiunti di recente': 'videodb://recentlyaddedmovies/' },
        { 'Recent Movies': 'videodb://recentlyaddedmovies/' },
        { 'Newest Movies': 'videodb://recentlyaddedmovies/' },
        { 'Latest Movies': 'videodb://recentlyaddedmovies/' },
        { 'Libreria Serie TV': 'videodb://tvshows/' },
        { 'Generi Serie TV': 'videodb://tvshows/genres/' },
        { 'Serie TV': 'videodb://tvshows/titles/' },
        { 'TvShow Years': 'videodb://tvshows/years/' },
        { 'TvShow Actors': 'videodb://tvshows/actors/' },
        { 'TvShow Studios': 'videodb://tvshows/studios/' },
        { 'Episodi aggiunti di recente': 'videodb://recentlyaddedepisodes/' },
        { 'Cerca nuovi Episodi': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJ1cGRhdGVfdmlkZW9saWJyYXJ5IiwKICAgICJjaGFubmVsIjogInZpZGVvbGlicmFyeSIsIAogICAgImZvbGRlciI6ICJmYWxzZSJ9' },
        { 'Newest Episodes': 'videodb://recentlyaddedepisodes/' },
        { 'Latest Episodes': 'videodb://recentlyaddedepisodes/' },
        { 'In Progress Tv Shows': 'videodb://inprogresstvshows' },
        { 'Music Videos': 'videodb://musicvideos/' },
        { 'MusicVideo Genres': 'videodb://musicvideos/genres/' },
        { 'MusicVideo Titles': 'videodb://musicvideos/titles/' },
        { 'MusicVideo Years': 'videodb://musicvideos/years/' },
        { 'MusicVideo Artists': 'videodb://musicvideos/artists/' },
        { 'MusicVideo Albums': 'videodb://musicvideos/albums/' },
        { 'MusicVideo Directors': 'videodb://musicvideos/directors/' },
        { 'MusicVideo Studios': 'videodb://musicvideos/studios/' },
        { 'Recently Added Music Videos': 'videodb://recentlyaddedmusicvideos/' },
        { 'Playlists': 'special://videoplaylists/' },
        { 'Video Add-ons': 'addons://sources/video/' },
        { 'Files': 'sources://video/' },
        { 'nuovi video YouTube ': 'plugin://plugin.video.youtube/special/new_uploaded_videos_tv/' },
        { 'YouTube recommendations': 'plugin://plugin.video.youtube/special/recommendations/]' },
        { 'YouTube subscriptions': 'plugin://plugin.video.youtube/subscriptions/list/' },
        { 'YouTube watch later': 'plugin://plugin.video.youtube/channel/mine/playlist/%20WL/' },
        { 'YouTube history': 'plugin://plugin.video.youtube/special/watch_history_tv/' },
        { 'YouTube settings': 'plugin://plugin.video.youtube/config/youtube/' },
        { 'Ricerca web': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJzZWFyY2giLCAKICAgICJjaGFubmVsIjogInNlYXJjaGluZyIKfQ%3D%3D' },
        { 'Motori': 'library://video/sport/motori.xml/' },
        { 'Calcio': 'library://video/sport/calcio.xml/' },      
        { 'Menù Video': 'library://video/ondemand/' },
        { 'Menù Musica': 'plugin://plugin.audio.favourites/index_of/special%3A%2F%2Fprofile%2Faddon_data%2Fplugin.audio.favourites%2Ffolders%2FMusica%2F' },
        { 'Menù Sport': 'library://video/sport/' },
        { 'Serie TV Popolari': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJwZWxpY3VsYXNfZXBpIiwgCiAgICAiY2F0ZWdvcnkiOiAidHZzaG93IiwgCiAgICAiY2hhbm5lbCI6ICJtb3ZpZXBsYXllciIsIAogICAgImZhbmFydCI6ICIiLCAKICAgICJpbmZvTGFiZWxzIjogewogICAgICAgICJtZWRpYXR5cGUiOiAidHZzaG93IgogICAgfSwgCiAgICAidGh1bWJuYWlsIjogIi9zdG9yYWdlLy5rb2RpL2FkZG9ucy9wbHVnaW4udmlkZW8uU09EYnlIRHMvcmVzb3VyY2VzL21lZGlhL3RoZW1lcy9kZWZhdWx0L3RodW1iX2NoYW5uZWxzX21vdmllcGxheWVyLnBuZyIsIAogICAgInRpdGxlIjogIlNlcmllVFYgaW4gb25kYSIsIAogICAgInRvdGFsSXRlbXMiOiAwLCAKICAgICJ1cmwiOiAiaHR0cHM6Ly9tb3ZpZXBsYXllci5pdC9zZXJpZXR2L3VsdGltZS11c2NpdGUvIiwgCiAgICAid2FudGVkIjogIlNlcmllVFYgaW4gb25kYSIKfQ%3D%3D' },
        { 'Film Popolari': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJqdXN0d19maWxtIiwgCiAgICAiY2F0ZWdvcnkiOiAibW92aWUiLCAKICAgICJjaGFubmVsIjogImp1c3R3YXRjaCIsIAogICAgImZhbmFydCI6ICIiLCAKICAgICJpbmZvTGFiZWxzIjogewogICAgICAgICJtZWRpYXR5cGUiOiAibW92aWUiCiAgICB9LCAKICAgICJwYWdlIjogMSwgCiAgICAicmVsZWFzZV95ZWFyX2Zyb20iOiAyMDE4LCAKICAgICJyZWxlYXNlX3llYXJfdW50aWwiOiAyMDE5LCAKICAgICJ0aHVtYm5haWwiOiAiL3N0b3JhZ2UvLmtvZGkvYWRkb25zL3BsdWdpbi52aWRlby5TT0RieUhEcy9yZXNvdXJjZXMvbWVkaWEvdGhlbWVzL2RlZmF1bHQvdGh1bWJfY2hhbm5lbHNfanVzdHdhdGNoLnBuZyIsIAogICAgInRpcG8iOiAibW92aWUiLCAKICAgICJ0aXRsZSI6ICJGaWxtIHBpw7kgdmlzdGkgU3RyZWFtaW5nIiwgCiAgICAidG90YWxJdGVtcyI6IDAsIAogICAgIndhbnRlZCI6ICJGaWxtIHBpw7kgdmlzdGkgU3RyZWFtaW5nIgp9' },      
        { 'Ultimi Episodi Inseriti': 'plugin://plugin.video.SODbyHDs/?eyJhY3Rpb24iOiAibm92ZWRhZGVzIiwgImNhdGVnb3J5IjogIiIsICJjaGFubmVsIjogIm5ld3MiLCAiZXh0cmEiOiAic2VyaWVzIn0%3D' },      
        { 'Ultimi Episodi Torrent Inseriti': 'plugin://plugin.video.SODbyHDs/?JTdCJTIyYWN0aW9uJTIyJTNBJTIybm92ZWRhZGVzJTIyLCUyMmNhdGVnb3J5JTIyJTNBJTIyTm92aXRhJTIwU2VyaWUlMjBUb3JyZW50JTIyLCUyMmNoYW5uZWwlMjIlM0ElMjJuZXdzJTIyLCUyMmV4dHJhJTIyJTNBJTIyU2VyaWVUT1IlMjIlN0Q%3D' },       
        { 'Videoteca Serie Tv': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJsaXN0X3R2c2hvd3MiLCAKICAgICJjYXRlZ29yeSI6ICJWaWRlb3RlY2EgZGkgU2VyaWUgVHYiLCAKICAgICJjaGFubmVsIjogInZpZGVvbGlicmFyeSIsIAogICAgImZhbmFydCI6ICIiLCAKICAgICJpbmZvTGFiZWxzIjogewogICAgICAgICJtZWRpYXR5cGUiOiAidHZzaG93IiwgCiAgICAgICAgInBsb3QiOiAiUXVhIMOoIGRvdmUgdmVuZ29ubyBzYWx2YXRlIGxlIFNlcmllIFRWIGFnZ2l1bnRlIGFsbGEgVklERU9URUNBLiIKICAgIH0sIAogICAgInRodW1ibmFpbCI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vMTAwMG1tci9pY29uL21hc3Rlci90aHVtYl92aWRlb2xpYnJhcnlfdHZzaG93LnBuZyIsIAogICAgInRpdGxlIjogIlZpZGVvdGVjYSBTZXJpZSBUViIsIAogICAgInRvdGFsSXRlbXMiOiAwLCAKICAgICJ3YW50ZWQiOiAiVmlkZW90ZWNhIFNlcmllIFRWIgp9' },      
        { 'Ultimi Film Inseriti': 'plugin://plugin.video.SODbyHDs/?JTdCJTIyYWN0aW9uJTIyJTNBJTIybm92ZWRhZGVzJTIyLCUyMmNhdGVnb3J5JTIyJTNBJTIyTm92aXRhJTIwRmlsbSUyMiwlMjJjaGFubmVsJTIyJTNBJTIybmV3cyUyMiwlMjJleHRyYSUyMiUzQSUyMmZpbG0lMjIlN0Q%3D' },      
        { 'Ultimi Film 4 K Inseriti': 'plugin://plugin.video.SODbyHDs/?JTdCJTIyYWN0aW9uJTIyJTNBJTIybm92ZWRhZGVzJTIyLCUyMmNhdGVnb3J5JTIyJTNBJTIyTm92aXRhJTIwRmlsbSUyMDRLJTIyLCUyMmNoYW5uZWwlMjIlM0ElMjJuZXdzJTIyLCUyMmV4dHJhJTIyJTNBJTIyNEslMjIlN0Q%3D' },      
        { 'Ultimi Film full hd Inseriti': 'plugin://plugin.video.SODbyHDs/?JTdCJTIyYWN0aW9uJTIyJTNBJTIybm92ZWRhZGVzJTIyLCUyMmNhdGVnb3J5JTIyJTNBJTIyTm92aXRhJTIwRmlsbSUyMFVIRCUyMiwlMjJjaGFubmVsJTIyJTNBJTIybmV3cyUyMiwlMjJleHRyYSUyMiUzQSUyMlVIRCUyMiU3RA%3D%3D' },        
        { 'Videoteca Film': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJsaXN0X21vdmllcyIsIAogICAgImNhdGVnb3J5IjogIlZpZGVvdGVjYSBkaSBGaWxtIiwgCiAgICAiY2hhbm5lbCI6ICJ2aWRlb2xpYnJhcnkiLCAKICAgICJmYW5hcnQiOiAiIiwgCiAgICAiaW5mb0xhYmVscyI6IHsKICAgICAgICAibWVkaWF0eXBlIjogIm1vdmllIiwgCiAgICAgICAgInBsb3QiOiAiUXVhIMOoIGRvdmUgdmVuZ29ubyBzYWx2YXRpIGkgRmlsbSBhZ2dpdW50aSBhbGxhIFZJREVPVEVDQS4iCiAgICB9LCAKICAgICJ0aHVtYm5haWwiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzEwMDBtbXIvaWNvbi9tYXN0ZXIvdGh1bWJfdmlkZW9saWJyYXJ5X21vdmllLnBuZyIsIAogICAgInRpdGxlIjogIlZpZGVvdGVjYSBGaWxtIiwgCiAgICAidG90YWxJdGVtcyI6IDAsIAogICAgIndhbnRlZCI6ICJWaWRlb3RlY2EgRmlsbSIKfQ%3d%3d' }
    ] },
    { 'Music': [
        { '': 'library://music/' },
        { 'Genres': 'musicdb://genres/' },
        { 'Artists': 'musicdb://artists/' },
        { 'Albums': 'musicdb://albums/' },
        { 'Song': 'musicdb://songs/' },
        { 'Top 100': 'musicdb://top100/' },
        { 'Top 100 Songs': 'musicdb://top100/songs/' },
        { 'Top 100 Albums': 'musicdb://top100/albums/' },
        { 'Recently Added Albums': 'musicdb://recentlyaddedalbums/' },
        { 'Recently Played Albums': 'musicdb://recentlyplayedalbums/' },
        { 'Compilations': 'musicdb://compilations/' },
        { 'Years': 'musicdb://years/' },
        { 'Singles': 'musicdb://singles/' },
        { 'Files': 'sources://music/' },
        { 'Playlists': 'special://musicplaylists/' },
        { 'Music Add-ons': 'addons://sources/audio/' },
        { 'spotify explore': 'plugin://plugin.audio.spotify/?action=browse_main_explore' },
        { 'spotify featured playlists': 'plugin://plugin.audio.spotify/?action=browse_playlists&applyfilter=featured' },
        { 'Ricerca Musica': 'plugin://plugin.video.spotitube/?mode=SearchDeezer&amp;url'},      
        { 'Radio': 'plugin://plugin.audio.radio_de/' }
    ] },
    { 'Programs': [
        { 'Addons': 'addons://sources/executable/' },
        { 'Android Apps': 'androidapp://sources/apps/' }
    ] },
    { 'AddonBrowser': [
        { 'Update available': 'addons://outdated/' },
        { 'Currently downloading add-ons': 'addons://downloading/' },
        { 'Recently updated': 'addons://recently_updated/' },
        { 'Install from repository': 'addons://repos/' },
        { 'Install from zip': 'addons://install/' },
        { 'Search': 'addons://search/' }
    ] },
    { 'PVR': [
        { 'Canali TV': 'pvr://channels/tv/' },
        { 'TV channels': 'pvr://channels/tv/*' },
        { 'Active TV recordings': 'pvr://recordings/tv/active ' },
        { 'Deleted TV recordings': 'pvr://recordings/tv/deleted' },
        { 'TV timers': 'pvr://timers/tv/timers' },
        { 'TV timer rules': 'pvr://timers/tv/rules' },
        { 'Radio channels': 'pvr://channels/radio/*' },
        { 'Active Radio recordings': 'pvr://recordings/radio/active' },
        { 'Deleted Radio recordings': 'pvr://recordings/radio/deleted' },
        { 'Radio timers': 'pvr://timers/radio/timers' },
        { 'Radio timer rules': 'pvr://timers/radio/rules' }
    ] },
    { 'settings': [{ 'settings': 'settings' }] },   
    { 'guida tv': [{ 'guida tv': 'tvguide' }] },
    { 'systemsettings': [{ 'system settings': 'systemsettings' }] },
    { 'servicesettings': [{ 'service settings': 'servicesettings' }] },
    { 'playersettings': [{ 'player settings': 'playersettings' }] },
    { 'mediasettings': [{ 'media settings': 'mediasettings' }] },
    { 'interfacesettings': [{ 'interface settings': 'interfacesettings' }] },
    { 'appearancesettings': [{ 'appearance settings': 'appearancesettings' }] },
    { 'profilesettings': [{ 'profile settings': 'profilesettings' }] },
    { 'skinsettings': [{ 'skin settings': 'skinsettings' }] },
    { 'filemanager': [{ 'file manager': 'filemanager' }] },
    { 'systeminfo': [{ 'system info': 'systeminfo' }] },
    { 'favourites': [{ '': 'favourites' }] },
    { 'eventlog': [{ 'event log': 'eventlog' }] },
    { 'screensaver': [{ 'screen saver': 'screensaver' }] },
    { 'subtitlesearch': [{ 'subtitle download': 'subtitlesearch' }] }
];

module.exports = function() {
    let flatWindows = [];

    KodiWindows.map((windowsSection) => {
        let sectionName = Object.keys(windowsSection)[0];
        let sectionPaths = windowsSection[sectionName];

        sectionPaths.map((pair) => {
            let subSectionName = Object.keys(pair)[0];
            let path = pair[subSectionName];

            flatWindows.push({
                'section': sectionName,
                'sub-section': subSectionName,
                'path': path,
                'label': `${sectionName} ${subSectionName}`
            });
        });
    });

    return flatWindows;
};
