import MapComponent from './components/MapComponent'
import './App.css'

function App() {
  // 从环境变量获取Google Maps API密钥
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY_HERE'

  if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY_HERE') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
        }}>
        <h1 style={{ color: '#e74c3c', marginBottom: '20px' }}>配置错误</h1>
        <div
          style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            maxWidth: '600px',
          }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>需要配置Google Maps API密钥</h2>
          <p style={{ color: '#7f8c8d', lineHeight: '1.6', marginBottom: '20px' }}>请按照以下步骤配置：</p>
          <ol style={{ textAlign: 'left', color: '#34495e', lineHeight: '1.8' }}>
            <li>
              访问{' '}
              <a
                href="https://console.developers.google.com/"
                target="_blank"
                rel="noopener noreferrer">
                Google Cloud Console
              </a>
            </li>
            <li>创建一个新项目或选择现有项目</li>
            <li>启用 Maps JavaScript API</li>
            <li>创建 API 密钥</li>
            <li>
              将 API 密钥添加到项目根目录的 <code>.env</code> 文件中：
              <br />
              <code style={{ backgroundColor: '#ecf0f1', padding: '5px', borderRadius: '3px' }}>VITE_GOOGLE_MAPS_API_KEY=你的API密钥</code>
            </li>
          </ol>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="treasure-title">The Lost Ledger of Satoshi</div>
      <MapComponent apiKey={GOOGLE_MAPS_API_KEY} />
    </div>
  )
}

export default App
