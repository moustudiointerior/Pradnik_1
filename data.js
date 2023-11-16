var APP_DATA = {
  "scenes": [
    {
      "id": "0-360-korytarz",
      "name": "360 korytarz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.602152543675361,
          "pitch": 0.013310520969358919,
          "rotation": 0,
          "target": "1-360-azienka"
        },
        {
          "yaw": -0.17387525092993172,
          "pitch": -0.06727862715390387,
          "rotation": 0,
          "target": "5-360-sypialnia"
        },
        {
          "yaw": -2.4302089706319094,
          "pitch": 0.14352488319398837,
          "rotation": 0,
          "target": "2-360-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-360-azienka",
      "name": "360 łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7380178249664135,
          "pitch": -0.20825348660993726,
          "rotation": 0,
          "target": "0-360-korytarz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-360-salon",
      "name": "360 SALON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5186925998353953,
          "pitch": 0.12329774133765348,
          "rotation": 0,
          "target": "3-360-sofa"
        },
        {
          "yaw": 0.46343549875150636,
          "pitch": 0.016806824088144268,
          "rotation": 0,
          "target": "0-360-korytarz"
        },
        {
          "yaw": -1.6435941327584995,
          "pitch": 0.07096515910555468,
          "rotation": 0,
          "target": "4-360-st"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-360-sofa",
      "name": "360 sofa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9046871348537167,
          "pitch": -3.552713678800501e-15,
          "rotation": 0,
          "target": "2-360-salon"
        },
        {
          "yaw": 1.7829398673846022,
          "pitch": -0.009110596781987113,
          "rotation": 0,
          "target": "4-360-st"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-360-st",
      "name": "360 stół",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.41645242367561863,
          "pitch": 0.05692183612677937,
          "rotation": 0,
          "target": "2-360-salon"
        },
        {
          "yaw": -0.7178389913132612,
          "pitch": 0.03048130565449725,
          "rotation": 0,
          "target": "3-360-sofa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-360-sypialnia",
      "name": "360 sypialnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.858311344219393,
          "pitch": 0.05488166502679981,
          "rotation": 0,
          "target": "0-360-korytarz"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
