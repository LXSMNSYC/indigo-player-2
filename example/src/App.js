import React, { useEffect } from 'react';
import * as IndigoPlayer from '@lxsmnsyc/indigo-player';
import './App.css';

const config = {
  autoplay: false,
  aspectRatio: 16 / 9,
  // volume: 0.5,
  // startPosition: 100,
  ui: {
    pip: true,
    lockControlsVisibility: false,
    locale: 'en-US',
    image: 'https://peach.blender.org/wp-content/uploads/rodents2.png?x11217',
  },
  // thumbnails: {
  //   src: './thumbnails.vtt',
  // },
  // BIF Files
  // thumbnails: {
  //   src: './thumbnails.bif',
  // },
  // freewheel: {
  //   clientSide: true,
  //   network: 96749,
  //   server: 'https://demo.v.fwmrm.net/ad/g/1',
  //   videoAsset: 'DemoVideoGroup.01',
  //   // videoAsset: 'TEST_AD_BRAND_ANV_10003623',
  //   duration: 594,
  //   siteSection: 'DemoSiteGroup.01',
  //   profile: 'global-js',
  //   cuepoints: ['preroll', 12, 'postroll'],
  // },
  // googleIMA: {
  //   // src: 'https://pubads.g.doubleclick.net/gampad/ads?' +
  //   // 'sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&' +
  //   // 'impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&' +
  //   // 'cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=',
  //   src:
  //     'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpostpod&cmsid=496&vid=short_onecue&correlator=',
  // },
  sources: [
    // {
    //   type: 'dash',
    //   src:
    //     'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd',
    // },
    // {
    //   type: 'hls',
    //   src:
    //     'https://stream1-vod.cdn1.sbs.prd.telenet-ops.be/geo/vier/dedag/volledigeafleveringen/133fc7a62dea3da106ba0b9f54f6e83d4f6777ec/DE_DAG_1_8_F0261554/DE_DAG_1_8_F0261554.m3u8',
    // },
    // {
    //   type: 'hls',
    //   src: 'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8',
    // },
    // {
    //   type: 'mp4',
    //   src:
    //     'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    // },
    {
      type: 'hls',
      src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    },
    // {
    //   type: 'mp4',
    //   src:
    //     'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    // },
    // {
    //   type: 'dash',
    //   src:
    //     'https://amssamples.streaming.mediaservices.windows.net/683f7e47-bd83-4427-b0a3-26a6c4547782/BigBuckBunny.ism/manifest(format=mpd-time-csf)',
    // },
    // {
    //   type: 'dash',
    //   src:
    //     'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd',
    //   drm: {
    //     widevine: {
    //       licenseUrl: 'https://widevine-proxy.appspot.com/proxy',
    //     },
    //     playready: {
    //       licenseUrl:
    //         'https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&#038;ContentKey=EAtsIJQPd5pFiRUrV9Layw==',
    //     },
    //   },
    // },
    // {
    //   type: 'dash',
    //   src: 'http://dash.edgesuite.net/akamai/bbb_30fps/bbb_30fps.mpd',
    // },
    // {
    //   type: 'hls',
    //   src:
    //     'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/m3u8s/11331.m3u8',
    // },
    // {
    //   type: 'webm',
    //   src: 'http://ptgmedia.pearsoncmg.com/imprint_downloads/peachpit/peachpit/downloads/0321793935/media//elephants-dream-medium.webm',
    // },
    // {
    //   type: 'mp4',
    //   src: 'http://techslides.com/demos/sample-videos/small.mp4',
    // },
  ],
  subtitles: [
    // {
    //   label: 'Demo',
    //   srclang: 'demo',
    //   src:
    //     'https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt',
    // },
    // {
    //   label: 'English',
    //   srclang: 'en',
    //   src: './bbb-en-subs.vtt',
    // },
    // {
    //   label: 'French',
    //   srclang: 'fr',
    //   src: './bbb-fr-subs.vtt',
    // },
    // {
    //   label: 'German',
    //   srclang: 'de',
    //   src: './bbb-de-subs.vtt',
    // },
  ],
};

function App() {
  const el = React.useRef(null);

  useEffect(() => {
    if (el.current) {

      const { current } = el;

      let instance = IndigoPlayer.init(current, config);

      return () => {
        instance.destroy();
      };
    }
    return undefined;
  }, []);

  return (
    <div ref={el} />
  );
}

export default App;
