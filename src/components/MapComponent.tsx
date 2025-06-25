import React, { useEffect, useRef } from 'react'

// 创建不同颜色的宝箱图标
const createTreasureChestIcon = (primaryColor: string, accentColor: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <defs>
        <radialGradient id="treasureGrad${primaryColor.replace('#', '')}" cx="50%" cy="30%" r="80%">
          <stop offset="0%" style="stop-color:${accentColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:1" />
        </radialGradient>
        <linearGradient id="chestGrad${primaryColor.replace('#', '')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- 宝箱底部 -->
      <rect x="6" y="16" width="20" height="12" fill="url(#chestGrad${primaryColor.replace('#', '')})" stroke="#5D4037" stroke-width="1" rx="2"/>
      
      <!-- 宝箱顶部 -->
      <path d="M 6 16 Q 6 10 16 10 Q 26 10 26 16 L 26 20 L 6 20 Z" fill="url(#chestGrad${primaryColor.replace('#', '')})" stroke="#5D4037" stroke-width="1"/>
      
      <!-- 金色装饰条 -->
      <rect x="6" y="18" width="20" height="2" fill="url(#treasureGrad${primaryColor.replace('#', '')})"/>
      <rect x="14" y="10" width="4" height="18" fill="url(#treasureGrad${primaryColor.replace('#', '')})"/>
      
      <!-- 锁头 -->
      <circle cx="16" cy="20" r="3" fill="${primaryColor}" stroke="#8B4513" stroke-width="1"/>
      <circle cx="16" cy="20" r="1.5" fill="${accentColor}"/>
      
      <!-- 钥匙孔 -->
      <rect x="15.5" y="19" width="1" height="2" fill="#654321" rx="0.5"/>
      
      <!-- 闪光效果 -->
      <circle cx="11" cy="14" r="1" fill="${accentColor}" opacity="0.8"/>
      <circle cx="21" cy="13" r="0.8" fill="${accentColor}" opacity="0.6"/>
      <circle cx="18" cy="25" r="0.6" fill="${accentColor}" opacity="0.7"/>
    </svg>
  `
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`
}

interface City {
  name: string
  coordinates: { lat: number; lng: number }
  markerIcon: string
  circleOptions: {
    strokeColor: string
    strokeOpacity: number
    strokeWeight: number
    fillColor: string
    fillOpacity: number
    radius: number
  }
}

const cities: City[] = [
  {
    name: 'Singapore',
    coordinates: { lat: 1.3521, lng: 103.8198 },
    markerIcon: createTreasureChestIcon('#FFD700', '#FFF8DC'),
    circleOptions: {
      strokeColor: '#FFD700',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#FFD700',
      fillOpacity: 0.35,
      radius: 25000,
    },
  },
  {
    name: 'Sydney',
    coordinates: { lat: -33.8688, lng: 151.2093 },
    markerIcon: createTreasureChestIcon('#FF6347', '#FFE4E1'),
    circleOptions: {
      strokeColor: '#FF6347',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF6347',
      fillOpacity: 0.35,
      radius: 30000,
    },
  },
  {
    name: 'Tokyo',
    coordinates: { lat: 35.6762, lng: 139.6503 },
    markerIcon: createTreasureChestIcon('#32CD32', '#F0FFF0'),
    circleOptions: {
      strokeColor: '#32CD32',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#32CD32',
      fillOpacity: 0.35,
      radius: 35000,
    },
  },
  {
    name: 'New York',
    coordinates: { lat: 40.7128, lng: -74.006 },
    markerIcon: createTreasureChestIcon('#4169E1', '#E6E6FA'),
    circleOptions: {
      strokeColor: '#4169E1',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#4169E1',
      fillOpacity: 0.35,
      radius: 40000,
    },
  },
  {
    name: 'London',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    markerIcon: createTreasureChestIcon('#DC143C', '#FFE4E1'),
    circleOptions: {
      strokeColor: '#DC143C',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#DC143C',
      fillOpacity: 0.35,
      radius: 35000,
    },
  },
  {
    name: 'Paris',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    markerIcon: createTreasureChestIcon('#9370DB', '#F8F8FF'),
    circleOptions: {
      strokeColor: '#9370DB',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#9370DB',
      fillOpacity: 0.35,
      radius: 32000,
    },
  },
  {
    name: 'Rome',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    markerIcon: createTreasureChestIcon('#FF8C00', '#FFF8DC'),
    circleOptions: {
      strokeColor: '#FF8C00',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF8C00',
      fillOpacity: 0.35,
      radius: 28000,
    },
  },
  {
    name: 'Berlin',
    coordinates: { lat: 52.52, lng: 13.405 },
    markerIcon: createTreasureChestIcon('#708090', '#F5F5F5'),
    circleOptions: {
      strokeColor: '#708090',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#708090',
      fillOpacity: 0.35,
      radius: 30000,
    },
  },
  {
    name: 'Moscow',
    coordinates: { lat: 55.7558, lng: 37.6176 },
    markerIcon: createTreasureChestIcon('#B22222', '#FFE4E1'),
    circleOptions: {
      strokeColor: '#B22222',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#B22222',
      fillOpacity: 0.35,
      radius: 45000,
    },
  },
  {
    name: 'Beijing',
    coordinates: { lat: 39.9042, lng: 116.4074 },
    markerIcon: createTreasureChestIcon('#FFD700', '#FFFACD'),
    circleOptions: {
      strokeColor: '#FFD700',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FFD700',
      fillOpacity: 0.35,
      radius: 50000,
    },
  },
  {
    name: 'Shanghai',
    coordinates: { lat: 31.2304, lng: 121.4737 },
    markerIcon: createTreasureChestIcon('#1E90FF', '#F0F8FF'),
    circleOptions: {
      strokeColor: '#1E90FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#1E90FF',
      fillOpacity: 0.35,
      radius: 35000,
    },
  },
  {
    name: 'Mumbai',
    coordinates: { lat: 19.076, lng: 72.8777 },
    markerIcon: createTreasureChestIcon('#FF4500', '#FFF8DC'),
    circleOptions: {
      strokeColor: '#FF4500',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF4500',
      fillOpacity: 0.35,
      radius: 38000,
    },
  },
  {
    name: 'Delhi',
    coordinates: { lat: 28.7041, lng: 77.1025 },
    markerIcon: createTreasureChestIcon('#8A2BE2', '#F5F5FF'),
    circleOptions: {
      strokeColor: '#8A2BE2',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#8A2BE2',
      fillOpacity: 0.35,
      radius: 42000,
    },
  },
  {
    name: 'Los Angeles',
    coordinates: { lat: 34.0522, lng: -118.2437 },
    markerIcon: createTreasureChestIcon('#FF69B4', '#FFF0F5'),
    circleOptions: {
      strokeColor: '#FF69B4',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF69B4',
      fillOpacity: 0.35,
      radius: 45000,
    },
  },
  {
    name: 'Chicago',
    coordinates: { lat: 41.8781, lng: -87.6298 },
    markerIcon: createTreasureChestIcon('#20B2AA', '#F0FFFF'),
    circleOptions: {
      strokeColor: '#20B2AA',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#20B2AA',
      fillOpacity: 0.35,
      radius: 35000,
    },
  },
  {
    name: 'Toronto',
    coordinates: { lat: 43.6532, lng: -79.3832 },
    markerIcon: createTreasureChestIcon('#CD853F', '#F5DEB3'),
    circleOptions: {
      strokeColor: '#CD853F',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#CD853F',
      fillOpacity: 0.35,
      radius: 30000,
    },
  },
  {
    name: 'São Paulo',
    coordinates: { lat: -23.5505, lng: -46.6333 },
    markerIcon: createTreasureChestIcon('#228B22', '#F0FFF0'),
    circleOptions: {
      strokeColor: '#228B22',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#228B22',
      fillOpacity: 0.35,
      radius: 40000,
    },
  },
  {
    name: 'Buenos Aires',
    coordinates: { lat: -34.6118, lng: -58.396 },
    markerIcon: createTreasureChestIcon('#4682B4', '#F0F8FF'),
    circleOptions: {
      strokeColor: '#4682B4',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#4682B4',
      fillOpacity: 0.35,
      radius: 35000,
    },
  },
  {
    name: 'Cairo',
    coordinates: { lat: 30.0444, lng: 31.2357 },
    markerIcon: createTreasureChestIcon('#DEB887', '#F5F5DC'),
    circleOptions: {
      strokeColor: '#DEB887',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#DEB887',
      fillOpacity: 0.35,
      radius: 32000,
    },
  },
  {
    name: 'Cape Town',
    coordinates: { lat: -33.9249, lng: 18.4241 },
    markerIcon: createTreasureChestIcon('#FF1493', '#FFF0F5'),
    circleOptions: {
      strokeColor: '#FF1493',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF1493',
      fillOpacity: 0.35,
      radius: 25000,
    },
  },
  {
    name: 'Dubai',
    coordinates: { lat: 25.2048, lng: 55.2708 },
    markerIcon: createTreasureChestIcon('#FFD700', '#FFFFF0'),
    circleOptions: {
      strokeColor: '#FFD700',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#FFD700',
      fillOpacity: 0.4,
      radius: 28000,
    },
  },
  {
    name: 'Seoul',
    coordinates: { lat: 37.5665, lng: 126.978 },
    markerIcon: createTreasureChestIcon('#DA70D6', '#FFF0FF'),
    circleOptions: {
      strokeColor: '#DA70D6',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#DA70D6',
      fillOpacity: 0.35,
      radius: 35000,
    },
  },
  {
    name: 'Bangkok',
    coordinates: { lat: 13.7563, lng: 100.5018 },
    markerIcon: createTreasureChestIcon('#FF6347', '#FFEFD5'),
    circleOptions: {
      strokeColor: '#FF6347',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF6347',
      fillOpacity: 0.35,
      radius: 30000,
    },
  },
]

interface MapComponentProps {
  apiKey: string
}

const MapComponent: React.FC<MapComponentProps> = ({ apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const circlesRef = useRef<google.maps.Circle[]>([])
  const animationRef = useRef<number[]>([])

  // 为所有城市创建不同的动画效果
  const animateCircles = (circles: google.maps.Circle[]) => {
    // 清除之前的动画
    animationRef.current.forEach((id) => cancelAnimationFrame(id))
    animationRef.current = []

    circles.forEach((circle, index) => {
      const city = cities[index]
      let wavePhase = (index * Math.PI) / 3 // 每个城市不同的起始相位

      const animate = () => {
        wavePhase += 0.08 + index * 0.01 // 不同的动画速度

        // 波浪透明度动画
        const opacity = 0.15 + (0.35 * (Math.sin(wavePhase) + 1)) / 2

        // 描边粗细波浪动画
        const strokeWeight = 2 + (3 * (Math.cos(wavePhase * 0.8) + 1)) / 2

        // 根据城市获取基础颜色
        let baseColor
        switch (city.name) {
          case 'Singapore': {
            // 金色动画
            const goldIntensity = 0.7 + 0.3 * Math.sin(wavePhase * 1.2)
            const red = Math.floor(255 * goldIntensity)
            const green = Math.floor(215 * goldIntensity)
            baseColor = [red, green, 0]
            break
          }
          case 'Sydney': {
            // 珊瑚色动画
            const coralIntensity = 0.7 + 0.3 * Math.sin(wavePhase * 1.1)
            const red = Math.floor(255 * coralIntensity)
            const green = Math.floor(99 * coralIntensity)
            const blue = Math.floor(71 * coralIntensity)
            baseColor = [red, green, blue]
            break
          }
          case 'Tokyo': {
            // 翡翠绿动画
            const greenIntensity = 0.7 + 0.3 * Math.sin(wavePhase * 1.3)
            const red = Math.floor(50 * greenIntensity)
            const green = Math.floor(205 * greenIntensity)
            const blue = Math.floor(50 * greenIntensity)
            baseColor = [red, green, blue]
            break
          }
          default:
            baseColor = [255, 215, 0]
        }

        const strokeColor = `rgb(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]})`
        const fillColor = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${opacity})`

        // 应用动画效果
        circle.setOptions({
          fillOpacity: opacity,
          strokeOpacity: Math.min(opacity + 0.4, 1),
          strokeWeight: Math.round(strokeWeight),
          strokeColor: strokeColor,
          fillColor: fillColor,
        })

        const animationId = requestAnimationFrame(animate)
        animationRef.current[index] = animationId
      }

      animate()
    })
  }

  const initializeMap = React.useCallback(() => {
    if (!mapRef.current) return

    // 藏宝图主题样式
    const treasureMapStyles = [
      {
        featureType: 'all',
        elementType: 'all',
        stylers: [
          {
            color: '#C5A572',
          },
          {
            saturation: -20,
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            color: '#4682B4',
          },
          {
            saturation: -10,
          },
          {
            lightness: -20,
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#DEB887',
          },
          {
            saturation: -10,
          },
        ],
      },
      {
        featureType: 'landscape.natural',
        elementType: 'all',
        stylers: [
          {
            color: '#D2B48C',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            color: '#8B7355',
          },
          {
            saturation: -30,
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            color: '#A0522D',
          },
          {
            saturation: -40,
          },
          {
            lightness: 10,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            color: '#8B4513',
          },
          {
            weight: 2,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#654321',
          },
        ],
      },
      {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#8B4513',
          },
          {
            weight: 2,
          },
        ],
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'all',
        stylers: [
          {
            color: '#CD853F',
          },
        ],
      },
    ]

    const mapInstance = new google.maps.Map(mapRef.current, {
      zoom: 2,
      center: { lat: 20, lng: 0 },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: treasureMapStyles,
      fullscreenControl: true,
      streetViewControl: false,
      mapTypeControl: true,
      zoomControl: true,
      // 添加藏宝图风格的控件
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'treasure_map'],
      },
    })

    const newMarkers: google.maps.Marker[] = []
    const newCircles: google.maps.Circle[] = []

    cities.forEach((city) => {
      const marker = new google.maps.Marker({
        position: city.coordinates,
        map: mapInstance,
        title: city.name,
        icon: {
          url: city.markerIcon,
          scaledSize: new google.maps.Size(32, 32),
        },
      })

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="
            padding: 15px; 
            background: linear-gradient(145deg, #F4E4BC, #D2B48C);
            border: 3px solid #8B4513;
            border-radius: 10px;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
            font-family: 'Courier New', monospace;
            position: relative;
          ">
            <div style="text-align: center; margin-bottom: 10px;">
              <span style="font-size: 20px; color: #8B4513;">₿</span>
            </div>
            <h3 style="
              margin: 0 0 10px 0; 
              color: #654321; 
              text-align: center;
              font-size: 18px;
              text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
              font-weight: bold;
            ">${city.name} Node</h3>
            <div style="
              background: rgba(139, 69, 19, 0.1);
              padding: 8px;
              border-radius: 5px;
              border: 1px dashed #8B4513;
            ">
              <p style="
                margin: 0; 
                color: #5D4037;
                font-size: 13px;
                line-height: 1.4;
                font-family: 'Courier New', monospace;
              ">
                ◆ Coordinates: ${city.coordinates.lat.toFixed(4)}, ${city.coordinates.lng.toFixed(4)}<br>
                ◇ Status: Active Blockchain Node<br>
                ♦ Network: Decentralized Ledger<br>
                ⬢ Mining: Proof of Stake Active<br>
                ⚡ Smart Contracts: Deployed
              </p>
            </div>            
          </div>
        `,
      })

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker)
      })

      const circle = new google.maps.Circle({
        ...city.circleOptions,
        map: mapInstance,
        center: city.coordinates,
      })

      newMarkers.push(marker)
      newCircles.push(circle)
    })

    markersRef.current = newMarkers
    circlesRef.current = newCircles

    // 为所有圆圈启动动画
    animateCircles(newCircles)

    const bounds = new google.maps.LatLngBounds()
    cities.forEach((city) => {
      bounds.extend(city.coordinates)
    })
    mapInstance.fitBounds(bounds)
  }, [])

  useEffect(() => {
    const currentMarkers = markersRef.current
    const currentCircles = circlesRef.current

    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry`
      script.async = true
      script.defer = true
      script.onload = initializeMap
      document.head.appendChild(script)
    } else {
      initializeMap()
    }

    return () => {
      // 清理动画
      animationRef.current.forEach((id) => {
        if (id) cancelAnimationFrame(id)
      })
      // 清理标记和圆圈
      currentMarkers.forEach((marker) => marker.setMap(null))
      currentCircles.forEach((circle) => circle.setMap(null))
    }
  }, [apiKey, initializeMap])

  return (
    <div
      ref={mapRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    />
  )
}

export default MapComponent
