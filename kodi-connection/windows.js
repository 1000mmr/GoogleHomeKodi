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
        { 'Videoteca Film': 'videodb://movies/' },
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
        { 'Videoteca Serie TV': 'videodb://tvshows/' },
        { 'Generi Serie TV': 'videodb://tvshows/genres/' },
        { 'Serie TV': 'videodb://tvshows/titles/' },
        { 'TvShow Years': 'videodb://tvshows/years/' },
        { 'TvShow Actors': 'videodb://tvshows/actors/' },
        { 'TvShow Studios': 'videodb://tvshows/studios/' },
        { 'Episodi aggiunti di recente': 'videodb://recentlyaddedepisodes/' },
        { 'Recent Episodes': 'videodb://recentlyaddedepisodes/' },
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
        { 'new YouTube videos': 'plugin://plugin.video.youtube/special/new_uploaded_videos_tv/' },
        { 'YouTube recommendations': 'plugin://plugin.video.youtube/special/recommendations/]' },
        { 'YouTube subscriptions': 'plugin://plugin.video.youtube/subscriptions/list/' },
        { 'YouTube watch later': 'plugin://plugin.video.youtube/channel/mine/playlist/%20WL/' },
        { 'YouTube history': 'plugin://plugin.video.youtube/special/watch_history_tv/' },
        { 'YouTube settings': 'plugin://plugin.video.youtube/config/youtube/' },
        { 'Ricerca': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJzZWFyY2giLCAKICAgICJjaGFubmVsIjogInNlYXJjaGluZyIKfQ%3D%3D,return' },
        { 'Motori': 'plugin://plugin.program.simple.favourites/index_of/special%3A%2F%2Fhome%2Faddons%2Fplugin.program.simple.favourites%2Faddon_data%2Ffolders%2FSPORT%2FMOTORI%2F,return' },
        { 'Calcio': 'plugin://plugin.program.simple.favourites/index_of/special%3A%2F%2Fhome%2Faddons%2Fplugin.program.simple.favourites%2Faddon_data%2Ffolders%2FSPORT%2FCALCIO%2F,return' },      
        { 'Menù Video': 'plugin://plugin.video.favourites/index_of/special%3A%2F%2Fprofile%2Faddon_data%2Fplugin.video.favourites%2Ffolders%2FMENU%2FVideo%2F,return' },
        { 'Menù Musica': 'plugin://plugin.program.simple.favourites/index_of/special%3A%2F%2Fhome%2Faddons%2Fplugin.program.simple.favourites%2Faddon_data%2Ffolders%2FMusic%2F,return' },
        { 'Menù Sport': 'plugin://plugin.program.simple.favourites/index_of/special%3A%2F%2Fhome%2Faddons%2Fplugin.program.simple.favourites%2Faddon_data%2Ffolders%2FSPORT%2F,return' },
        { 'Serie TV Popolari': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJsaXN0YWRvX3RtZGIiLCAKICAgICJjYXRlZ29yeSI6ICIiLCAKICAgICJjaGFubmVsIjogInR2bW92aWVkYiIsIAogICAgImV4dHJhIjogInR2IiwgIAogICAgInNlYXJjaGluZyI6IHsKICAgICAgICAibGFuZ3VhZ2UiOiAiaXQiLCAKICAgICAgICAicGFnZSI6IDEsIAogICAgICAgICJ1cmwiOiAidHYvcG9wdWxhciIKICAgIH0sIAogICAgInVybCI6ICJzZWFyY2hfbW92aWVfYnlfdGl0bGUiCn0%3D,return' },
        { 'Film Popolari': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJsaXN0YWRvX3RtZGIiLCAKICAgICJjYXRlZ29yeSI6ICIiLCAKICAgICJjaGFubmVsIjogInR2bW92aWVkYiIsIAogICAgImV4dHJhIjogIm1vdmllIiwgIAogICAgInNlYXJjaGluZyI6IHsKICAgICAgICAibGFuZ3VhZ2UiOiAiaXQiLCAKICAgICAgICAicGFnZSI6IDEsIAogICAgICAgICJ1cmwiOiAibW92aWUvcG9wdWxhciIKICAgIH0sICJ1cmwiOiAic2VhcmNoX21vdmllX2J5X3RpdGxlIgp9,return' },      
        { 'Ultimi Episodi Inseriti': 'plugin://plugin.video.SODbyHDs/?eyJhY3Rpb24iOiAibm92ZWRhZGVzIiwgImNhdGVnb3J5IjogIiIsICJjaGFubmVsIjogIm5ld3MiLCAiZXh0cmEiOiAic2VyaWVzIn0%3D,return' },      
        { 'Menù Serie Tv': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJ0bWRiIiwgCiAgICAiY2F0ZWdvcnkiOiAiIiwgCiAgICAiY2hhbm5lbCI6ICJ0dm1vdmllZGIiLCAKICAgICJleHRyYSI6ICJ0diIsIAogICAgImZhbmFydCI6ICIiLCAKICAgICJpbmZvTGFiZWxzIjoge30sIAogICAgInRleHRfY29sb3IiOiAiYXp1cmUiLCAKICAgICJ0aHVtYm5haWwiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL21hc3Rlci0xOTcwL3Jlc291cmNlcy9tYXN0ZXIvaW1hZ2VzL2dlbnJlcy8wL1RWJTIwU2VyaWVzLnBuZyIsIAogICAgInRpdGxlIjogIltDT0xPUiBhenVyZV1TZXJpZSBUViBIb21lWy9DT0xPUl0iLCAKICAgICJ0b3RhbEl0ZW1zIjogMCwgCiAgICAidmlld21vZGUiOiAibGlzdCIKfQ%3d%3d,return' },      
        { 'Ultimi Film Inseriti': 'plugin://plugin.video.SODbyHDs/?eyJhY3Rpb24iOiAibm92ZWRhZGVzIiwgImNhdGVnb3J5IjogIiIsICJjaGFubmVsIjogIm5ld3MiLCAiZXh0cmEiOiAiZmlsbSJ9,return' },      
        { 'Menù Film': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJ0bWRiIiwgCiAgICAiY2F0ZWdvcnkiOiAiIiwgCiAgICAiY2hhbm5lbCI6ICJ0dm1vdmllZGIiLCAKICAgICJleHRyYSI6ICJtb3ZpZSIKfQ%3D%3D,return' }
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
        { 'Ricerca Musica': 'plugin://plugin.video.spotitube/?mode=SearchDeezer&amp;url,return'},       
        { 'Spotify': 'plugin://plugin.video.spotitube/?mode=spotifyMain&amp;url,return'},      
        { 'Radio': 'plugin://plugin.audio.radio_de/,return' }
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
    { 'canali tv': [{'canali tv':'tvchannels'}] },   
    { 'guida tv': [{'guida tv':'tvguide'}] },
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
