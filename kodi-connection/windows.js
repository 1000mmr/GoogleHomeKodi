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
        { 'Cerca nuovi Episodi': 'plugin://plugin.video.SODbyHDs/?action=update_videolibrary&channel=videolibrary&folder=False' },
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
        { 'Serie TV Popolari': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJqdXN0d19zZXJpZSIsIAogICAgImNhdGVnb3J5IjogIiIsIAogICAgImNoYW5uZWwiOiAianVzdHdhdGNoIiwgCiAgICAiZmFuYXJ0IjogIiIsIAogICAgImluZm9MYWJlbHMiOiB7CiAgICAgICAgIm1lZGlhdHlwZSI6ICJ0dnNob3ciCiAgICB9LCAKICAgICJwYWdlIjogMSwgCiAgICAicmVsZWFzZV95ZWFyX2Zyb20iOiAyMDE4LCAKICAgICJyZWxlYXNlX3llYXJfdW50aWwiOiAyMDE5LCAKICAgICJ0aHVtYm5haWwiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzEwMDBtbXIvaWNvbi9tYXN0ZXIvdGh1bWJfY2hhbm5lbHNfanVzdHdhdGNoLnBuZyIsIAogICAgInRpdGxlIjogIlNlcmllIFRWIHBpw7kgdmlzdGUgU3RyZWFtaW5nIiwgCiAgICAidG90YWxJdGVtcyI6IDAsIAogICAgIndhbnRlZCI6ICJTZXJpZSBUViBwacO5IHZpc3RlIFN0cmVhbWluZyIKfQ%3d%3d' },
        { 'Film Popolari': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJqdXN0d19maWxtIiwgCiAgICAiY2F0ZWdvcnkiOiAiIiwgCiAgICAiY2hhbm5lbCI6ICJqdXN0d2F0Y2giLCAKICAgICJmYW5hcnQiOiAiIiwgCiAgICAiaW5mb0xhYmVscyI6IHsKICAgICAgICAibWVkaWF0eXBlIjogIm1vdmllIgogICAgfSwgCiAgICAicGFnZSI6IDEsIAogICAgInJlbGVhc2VfeWVhcl9mcm9tIjogMjAxOCwgCiAgICAicmVsZWFzZV95ZWFyX3VudGlsIjogMjAxOSwgCiAgICAidGh1bWJuYWlsIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS8xMDAwbW1yL2ljb24vbWFzdGVyL3RodW1iX2NoYW5uZWxzX2p1c3R3YXRjaC5wbmciLCAKICAgICJ0aXBvIjogIm1vdmllIiwgCiAgICAidGl0bGUiOiAiSnVzdFdhdGNoX0ZpbG0gcGnDuSB2aXN0aSIsIAogICAgInRvdGFsSXRlbXMiOiAwLCAKICAgICJ3YW50ZWQiOiAiSnVzdFdhdGNoX0ZpbG0gcGnDuSB2aXN0aSIKfQ%3d%3d' },      
        { 'Ultimi Episodi Inseriti': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJub3ZlZGFkZXMiLCAKICAgICJjYXRlZ29yeSI6ICIiLCAKICAgICJjaGFubmVsIjogIm5ld3MiLCAKICAgICJleHRyYSI6ICJzZXJpZXMiLCAKICAgICJmYW5hcnQiOiAiIiwgCiAgICAiaW5mb0xhYmVscyI6IHsKICAgICAgICAibWVkaWF0eXBlIjogInR2c2hvdyIsIAogICAgICAgICJwbG90IjogIkNlcmNhIG5laSBTaXRpIFdlYiBTZXJpZSBnbGkgdWx0aW1pIEVwaXNvZGkgY2FyaWNhdGkuLi4iCiAgICB9LCAKICAgICJ0aHVtYm5haWwiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzEwMDBtbXIvaWNvbi9tYXN0ZXIvdGh1bWJfY2hhbm5lbHNfdHZzaG93LnBuZyIsIAogICAgInRpdGxlIjogIlVsdGltaSBFcGlzb2RpIGRhbCBXZWIiLCAKICAgICJ0b3RhbEl0ZW1zIjogMCwgCiAgICAid2FudGVkIjogIlVsdGltaSBFcGlzb2RpIGRhbCBXZWIiCn0%3d' },      
        { 'Ultimi Episodi Torrent Inseriti': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJub3ZlZGFkZXMiLCAKICAgICJjYXRlZ29yeSI6ICIiLCAKICAgICJjaGFubmVsIjogIm5ld3MiLCAKICAgICJleHRyYSI6ICJTZXJpZVRPUiIsIAogICAgImZhbmFydCI6ICIiLCAKICAgICJpbmZvTGFiZWxzIjogewogICAgICAgICJtZWRpYXR5cGUiOiAidHZzaG93IiwgCiAgICAgICAgInBsb3QiOiAiQ2VyY2EgbmVpIFNpdGkgVG9ycmVudCBTZXJpZSBnbGkgdWx0aW1pIEVwaXNvZGkgY2FyaWNhdGkuLi4iCiAgICB9LCAKICAgICJ0aHVtYm5haWwiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzEwMDBtbXIvaWNvbi9tYXN0ZXIvdGh1bWJfY2hhbm5lbHNfdHZzaG93X2hkLnBuZyIsIAogICAgInRpdGxlIjogIlVsdGltaSBFcGlzb2RpIGRhaSBUb3JyZW50IiwgCiAgICAidG90YWxJdGVtcyI6IDAsIAogICAgIndhbnRlZCI6ICJVbHRpbWkgRXBpc29kaSBkYWkgVG9ycmVudCIKfQ%3d%3d' },       
        { 'Videoteca Serie Tv': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJsaXN0X3R2c2hvd3MiLCAKICAgICJjYXRlZ29yeSI6ICJWaWRlb3RlY2EgZGkgU2VyaWUgVHYiLCAKICAgICJjaGFubmVsIjogInZpZGVvbGlicmFyeSIsIAogICAgImZhbmFydCI6ICIiLCAKICAgICJpbmZvTGFiZWxzIjogewogICAgICAgICJtZWRpYXR5cGUiOiAidHZzaG93IiwgCiAgICAgICAgInBsb3QiOiAiUXVhIMOoIGRvdmUgdmVuZ29ubyBzYWx2YXRlIGxlIFNlcmllIFRWIGFnZ2l1bnRlIGFsbGEgVklERU9URUNBLiIKICAgIH0sIAogICAgInRodW1ibmFpbCI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vMTAwMG1tci9pY29uL21hc3Rlci90aHVtYl92aWRlb2xpYnJhcnlfdHZzaG93LnBuZyIsIAogICAgInRpdGxlIjogIlZpZGVvdGVjYSBTZXJpZSBUViIsIAogICAgInRvdGFsSXRlbXMiOiAwLCAKICAgICJ3YW50ZWQiOiAiVmlkZW90ZWNhIFNlcmllIFRWIgp9' },      
        { 'Ultimi Film Inseriti': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJub3ZlZGFkZXMiLCAKICAgICJjYXRlZ29yeSI6ICIiLCAKICAgICJjaGFubmVsIjogIm5ld3MiLCAKICAgICJleHRyYSI6ICJmaWxtIiwgCiAgICAiZmFuYXJ0IjogIiIsIAogICAgImluZm9MYWJlbHMiOiB7CiAgICAgICAgIm1lZGlhdHlwZSI6ICJtb3ZpZSIsIAogICAgICAgICJwbG90IjogIkNlcmNhIG5laSBTaXRpIFdlYiBGaWxtIGdsaSB1bHRpbWkgY29udGVudXRpIGNhcmljYXRpLi4uIgogICAgfSwgCiAgICAidGh1bWJuYWlsIjogImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS8xMDAwbW1yL2ljb24vbWFzdGVyL3RodW1iX2NoYW5uZWxzX21vdmllLnBuZyIsIAogICAgInRpdGxlIjogIlVsdGltaSBGaWxtIGRhbCBXZWIiLCAKICAgICJ0b3RhbEl0ZW1zIjogMCwgCiAgICAid2FudGVkIjogIlVsdGltaSBGaWxtIGRhbCBXZWIiCn0%3d' },      
        { 'Ultimi Film 4 K Inseriti': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJub3ZlZGFkZXMiLCAKICAgICJjYXRlZ29yeSI6ICIiLCAKICAgICJjaGFubmVsIjogIm5ld3MiLCAKICAgICJleHRyYSI6ICI0SyIsIAogICAgImZhbmFydCI6ICIiLCAKICAgICJpbmZvTGFiZWxzIjogewogICAgICAgICJtZWRpYXR5cGUiOiAibW92aWUiLCAKICAgICAgICAicGxvdCI6ICJDZXJjYSBuZWkgU2l0aSBUb3JyZW50IEZpbG0gZ2xpIHVsdGltaSBjb250ZW51dGkgaW4gNEsgY2FyaWNhdGkuLi4iCiAgICB9LCAKICAgICJ0aHVtYm5haWwiOiAiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzEwMDBtbXIvaWNvbi9tYXN0ZXIvdGh1bWJfY2hhbm5lbHNfbW92aWVfNGsucG5nIiwgCiAgICAidGl0bGUiOiAiVWx0aW1pIEZpbG0gNEsgZGFpIFRvcnJlbnQiLCAKICAgICJ0b3RhbEl0ZW1zIjogMCwgCiAgICAid2FudGVkIjogIlVsdGltaSBGaWxtIDRLIGRhaSBUb3JyZW50Igp9' },      
        { 'Ultimi Film full hd Inseriti': 'plugin://plugin.video.SODbyHDs/?ewogICAgImFjdGlvbiI6ICJub3ZlZGFkZXMiLCAKICAgICJjYXRlZ29yeSI6ICIiLCAKICAgICJjaGFubmVsIjogIm5ld3MiLCAKICAgICJleHRyYSI6ICJVSEQiLCAKICAgICJmYW5hcnQiOiAiIiwgCiAgICAiaW5mb0xhYmVscyI6IHsKICAgICAgICAibWVkaWF0eXBlIjogIm1vdmllIiwgCiAgICAgICAgInBsb3QiOiAiQ2VyY2EgbmVpIFNpdGkgVG9ycmVudCBGaWxtIGdsaSB1bHRpbWkgY29udGVudXRpIGluIFVIRCBjYXJpY2F0aS4uLiIKICAgIH0sIAogICAgInRodW1ibmFpbCI6ICJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vMTAwMG1tci9pY29uL21hc3Rlci90aHVtYl9jaGFubmVsc19tb3ZpZV9oZC5wbmciLCAKICAgICJ0aXRsZSI6ICJVbHRpbWkgRmlsbSBVSEQgZGFpIFRvcnJlbnQiLCAKICAgICJ0b3RhbEl0ZW1zIjogMCwgCiAgICAid2FudGVkIjogIlVsdGltaSBGaWxtIFVIRCBkYWkgVG9ycmVudCIKfQ%3d%3d' },        
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
    { 'tvchannels': [{ 'canali tv': 'pvr://channels/tv/tutti i canali' }] },   
    { 'tvguide': [{ 'guida tv': 'pvr://channels/tv/tutti i canali' }] },
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
